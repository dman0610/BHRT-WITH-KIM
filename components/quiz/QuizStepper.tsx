"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { track, readUtms } from "@/lib/analytics";
import {
  QUIZ_QUESTIONS,
  SERVICES,
  calculateQuizResults,
  getOverallSeverity,
  getSymptomCallouts,
  SEVERITY_MESSAGES,
  QUIZ_DISCLAIMER,
} from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import EmailCaptureStep from "@/components/quiz/EmailCaptureStep";

const STEP_BGS = ["bg-mist", "bg-lavender/30", "bg-peach/20", "bg-mist", "bg-lavender/30", "bg-peach/20", "bg-mist"];

/**
 * Read UTM parameters once, when the quiz mounts.
 *
 * Must happen on entry rather than at submit — by the time someone finishes
 * seven questions the params may be gone from the URL. Lazy-initialised so it
 * runs a single time; `readUtms` is SSR-guarded since this component still
 * renders on the server. The values never affect what is rendered, so there is
 * no hydration mismatch.
 *
 * Shape differs from the analytics payload on purpose: MailerLite's custom
 * fields are `source`/`medium`/`campaign`.
 */
function readUtmFields() {
  const utm = readUtms();
  return {
    source: utm.utm_source,
    medium: utm.utm_medium,
    campaign: utm.utm_campaign,
  };
}

export default function QuizStepper() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showCapture, setShowCapture] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [utm] = useState(readUtmFields);
  const [startTracked, setStartTracked] = useState(false);

  const totalSteps = QUIZ_QUESTIONS.length;
  const currentQ = QUIZ_QUESTIONS[step];
  const progress = ((step + 1) / totalSteps) * 100;

  /*
    LandingPageView is the event Meta campaigns actually optimize against, so
    it has to be reliable. UTM params are the only thing it carries — see the
    allowlist in lib/analytics.ts. Nothing about the person's health is sent by
    any event on this page, including this one.
  */
  useEffect(() => {
    track("LandingPageView", readUtms());
  }, []);

  const selectOption = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentQ.id]: value }));
    if (!startTracked) {
      setStartTracked(true);
      track("QuizStart");
    }
  };

  const goNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setShowCapture(true);
    }
  };

  const goBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const restart = () => {
    setStarted(false);
    setStep(0);
    setAnswers({});
    setShowCapture(false);
    setShowResults(false);
  };

  // ─── Welcome Screen ─────────────────────────────────────
  if (!started) {
    return (
      <div className="text-center py-16">
        <div className="mx-auto w-20 h-20 rounded-full bg-lavender/60 flex items-center justify-center mb-8">
          <Icon name="sparkles" className="size-9 text-forest" />
        </div>
        <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl md:text-5xl">
          Where Are You on Your Wellness Journey?
        </h2>
        <p className="mt-4 text-clay-text text-lg max-w-xl mx-auto leading-relaxed">
          Take this quick assessment to discover which services may be the best
          fit for where you are right now. It only takes 2 minutes.
        </p>
        <Button
          onClick={() => setStarted(true)}
          className="mt-8 bg-moss text-white rounded-full px-8 py-3 text-base font-medium hover:bg-forest transition-colors shadow-md"
        >
          Start the Quiz
        </Button>

        {/*
          Shown BEFORE the assessment, not only after the verdict. A disclaimer
          that appears once a graded result has already been delivered is doing
          very little work. See docs/05-CONTENT-STANDARDS.md.
        */}
        <p className="mx-auto mt-8 max-w-md rounded-2xl bg-mist px-5 py-4 text-clay-text leading-relaxed">
          This is an educational tool, not a medical diagnosis. It reflects the
          answers you give and is meant to help you start a conversation with a
          provider.
        </p>
      </div>
    );
  }

  // ─── Email Capture ───────────────────────────────────────
  // Between the last question and the results. Results follow either way.
  if (showCapture && !showResults) {
    return (
      <EmailCaptureStep
        payload={{
          severity: getOverallSeverity(answers),
          topServices: calculateQuizResults(answers)
            .slice(0, 3)
            .map((r) => r.serviceId),
          stage: answers.stage ?? "unknown",
          utm,
        }}
        /*
          Fires whether the visitor gave an email or skipped. QuizComplete
          carries NO parameters — that the quiz finished is not health data,
          what they answered is, and the answers never leave this component
          except server-side to MailerLite.
        */
        onDone={() => {
          setShowResults(true);
          track("QuizComplete");
        }}
      />
    );
  }

  // ─── Results Screen ──────────────────────────────────────
  if (showResults) {
    const results = calculateQuizResults(answers);
    const severity = getOverallSeverity(answers);
    const msg = SEVERITY_MESSAGES[severity];
    const callouts = getSymptomCallouts(answers);
    const topServices = results.slice(0, 3).map((r) => {
      const service = SERVICES.find((s) => s.id === r.serviceId);
      return { ...r, service };
    }).filter((r) => r.service);
    const isThriving = severity === "thriving";

    return (
      <div className="max-w-2xl mx-auto">
        {/* Summary */}
        <div className="text-center mb-10">
          <div className="mx-auto w-16 h-16 rounded-full bg-peach/50 flex items-center justify-center mb-6">
            <Icon name="heart" className="size-8 text-forest" />
          </div>
          <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl">
            {msg.headline}
          </h2>
          <p className="mt-4 text-clay-text text-lg leading-relaxed max-w-xl mx-auto">
            {msg.body}
          </p>
        </div>

        {/* Symptom-specific callouts */}
        {callouts.length > 0 && (
          <div className="mb-10 space-y-3">
            {callouts.map((callout, i) => (
              <div
                key={i}
                className="flex gap-3 items-start bg-lavender/20 rounded-2xl px-5 py-4"
              >
                <Icon name="leaf" className="size-4 text-moss shrink-0 mt-0.5" />
                <p className="text-clay-text italic leading-relaxed">{callout}</p>
              </div>
            ))}
          </div>
        )}

        {/* Recommended Services */}
        <div className="mb-10">
          <h3 className="font-heading text-xl font-medium text-bark mb-4 text-center">
            {isThriving
              ? "Areas Kim loves to explore — even when you're thriving:"
              : "Based on your responses, here\u2019s where we\u2019d start:"}
          </h3>
          <div className="space-y-4">
            {topServices.map(({ service }, index) => (
              <Link
                key={service!.id}
                href={`/services#${service!.id}`}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-lavender/50 flex items-center justify-center shrink-0">
                  <span className="font-heading text-lg font-semibold text-forest">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-medium text-bark group-hover:text-forest transition-colors">
                    {service!.title}
                  </h4>
                  <p className="text-clay-text leading-relaxed mt-1 line-clamp-2">
                    {service!.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-clay-text text-sm leading-relaxed max-w-md mx-auto italic">
            {msg.cta}
          </p>
          <Link href="/book">
            <Button className="bg-moss text-white rounded-full px-8 py-3 text-base font-medium hover:bg-forest transition-colors shadow-md">
              Book a Free Consultation
            </Button>
          </Link>
          <div>
            <button
              onClick={restart}
              className="inline-flex items-center gap-2 text-sm text-clay-text hover:text-bark transition-colors mt-4"
            >
              <RotateCcw className="size-4" />
              Retake Quiz
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-clay-text text-center max-w-xl mx-auto mt-8 pt-6 border-t border-stone/40 leading-relaxed">
          {QUIZ_DISCLAIMER}
        </p>
      </div>
    );
  }

  // ─── Question Steps ──────────────────────────────────────
  const selectedValue = answers[currentQ.id];
  const canProceed = !!selectedValue;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-clay-text mb-2">
          <span>Question {step + 1} of {totalSteps}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-stone rounded-full overflow-hidden">
          <div
            className="h-full bg-moss rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className={`${STEP_BGS[step % STEP_BGS.length]} rounded-3xl p-6 md:p-10`}>
        <h2 className="font-heading text-2xl font-semibold text-bark sm:text-3xl">
          {currentQ.question}
        </h2>
        <p className="mt-2 text-clay-text">{currentQ.description}</p>

        {/* Options */}
        <div className="mt-8 space-y-3">
          {currentQ.options.map((option) => {
            const isSelected = selectedValue === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => selectOption(option.value)}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 ${
                  isSelected
                    ? "border-forest bg-white shadow-sm"
                    : "border-transparent bg-white/60 hover:bg-white hover:border-sage/50"
                }`}
                aria-pressed={isSelected}
              >
                {/* The answer choices are the primary thing being read here — base size, not 14px. */}
                <span className={`font-medium ${isSelected ? "text-forest" : "text-bark"}`}>
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Button
          variant="ghost"
          onClick={goBack}
          disabled={step === 0}
          className="text-clay-text hover:text-bark disabled:opacity-30"
        >
          <ArrowLeft className="size-4 mr-1" />
          Back
        </Button>
        <Button
          onClick={goNext}
          disabled={!canProceed}
          className="bg-moss text-white rounded-full px-6 hover:bg-forest transition-colors disabled:opacity-40"
        >
          {step === totalSteps - 1 ? "See Results" : "Next"}
          {step < totalSteps - 1 && <ArrowRight className="size-4 ml-1" />}
        </Button>
      </div>
    </div>
  );
}
