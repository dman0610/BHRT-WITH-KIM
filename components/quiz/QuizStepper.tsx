"use client";

import { useState } from "react";
import Link from "next/link";
import {
  QUIZ_QUESTIONS,
  SERVICES,
  calculateQuizResults,
  getOverallSeverity,
  SEVERITY_MESSAGES,
} from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

const STEP_BGS = ["bg-mist", "bg-lavender/30", "bg-peach/20", "bg-mist", "bg-lavender/30", "bg-peach/20", "bg-mist"];

export default function QuizStepper() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const totalSteps = QUIZ_QUESTIONS.length;
  const currentQ = QUIZ_QUESTIONS[step];
  const progress = ((step + 1) / totalSteps) * 100;

  const selectOption = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentQ.id]: value }));
  };

  const goNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const goBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const restart = () => {
    setStarted(false);
    setStep(0);
    setAnswers({});
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
        <p className="mt-4 text-clay text-lg max-w-xl mx-auto leading-relaxed">
          Take this quick assessment to discover which services may be the best
          fit for where you are right now. It only takes 2 minutes.
        </p>
        <Button
          onClick={() => setStarted(true)}
          className="mt-8 bg-moss text-white rounded-full px-8 py-3 text-base font-medium hover:bg-forest transition-colors shadow-md"
        >
          Start the Quiz
        </Button>
      </div>
    );
  }

  // ─── Results Screen ──────────────────────────────────────
  if (showResults) {
    const results = calculateQuizResults(answers);
    const severity = getOverallSeverity(answers);
    const msg = SEVERITY_MESSAGES[severity];
    const topServices = results.slice(0, 3).map((r) => {
      const service = SERVICES.find((s) => s.id === r.serviceId);
      return { ...r, service };
    }).filter((r) => r.service);

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
          <p className="mt-4 text-clay text-lg leading-relaxed max-w-xl mx-auto">
            {msg.body}
          </p>
        </div>

        {/* Recommended Services */}
        <div className="mb-10">
          <h3 className="font-heading text-xl font-medium text-bark mb-4 text-center">
            Based on your responses, here&apos;s where we&apos;d start:
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
                  <p className="text-clay text-sm leading-relaxed mt-1 line-clamp-2">
                    {service!.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <Link href="/contact">
            <Button className="bg-moss text-white rounded-full px-8 py-3 text-base font-medium hover:bg-forest transition-colors shadow-md">
              Book a Consultation to Discuss Your Results
            </Button>
          </Link>
          <div>
            <button
              onClick={restart}
              className="inline-flex items-center gap-2 text-sm text-clay hover:text-bark transition-colors mt-4"
            >
              <RotateCcw className="size-4" />
              Retake Quiz
            </button>
          </div>
        </div>
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
        <div className="flex justify-between text-sm text-clay mb-2">
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
        <p className="mt-2 text-clay">{currentQ.description}</p>

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
                <span className={`text-sm font-medium ${isSelected ? "text-forest" : "text-bark"}`}>
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
          className="text-clay hover:text-bark disabled:opacity-30"
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
