import type { Metadata } from "next";
import QuizStepper from "@/components/quiz/QuizStepper";
import ScrollAnimator from "@/components/layout/ScrollAnimator";

export const metadata: Metadata = {
  title: "Free Hormone Symptom Quiz",
  description:
    "A free 2-minute educational assessment covering sleep, energy, mood, and physical symptoms commonly reported during perimenopause. Not a diagnosis.",
  alternates: { canonical: "/quiz" },
};

export default function QuizPage() {
  return (
    <>
      <ScrollAnimator />

      {/* Hero Banner */}
      <section className="bg-forest pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
            Your Wellness Assessment
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Answer a few simple questions and get personalized recommendations.
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="bg-stone py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <QuizStepper />
          </div>
        </div>
      </section>
    </>
  );
}
