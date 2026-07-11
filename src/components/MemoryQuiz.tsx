import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { siteContent } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function MemoryQuiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [complete, setComplete] = useState(false);
  const question = siteContent.quiz[questionIndex];

  if (!question) {
    return null;
  }

  const choose = () => {
    setAnswered(true);
  };

  const next = () => {
    if (questionIndex >= siteContent.quiz.length - 1) {
      setComplete(true);
      return;
    }

    setQuestionIndex((value) => value + 1);
    setAnswered(false);
  };

  return (
    <section className="px-5 py-24 text-cream">
      <SectionHeading eyebrow="bonus chapter" title="Let us see how well you remember our lore." />
      <div className="mx-auto max-w-2xl rounded-lg border border-sky/20 bg-white/8 p-6 shadow-glow backdrop-blur">
        {complete ? (
          <div className="text-center">
            <CheckCircle2 className="mx-auto text-sky" size={42} />
            <h3 className="mt-5 font-serifSoft text-4xl">Lore accepted.</h3>
            <p className="mt-4 text-silver/82">No score needed. The hidden message is this: the best memories are usually still under construction.</p>
          </div>
        ) : (
          <>
            <p className="font-rounded text-xs uppercase tracking-[0.2em] text-sky">
              question {questionIndex + 1} of {siteContent.quiz.length}
            </p>
            <h3 className="mt-3 font-serifSoft text-3xl leading-tight">{question.question}</h3>
            <div className="mt-6 grid gap-3">
              {question.options.map((option) => (
                <button
                  key={option}
                  className="min-h-12 rounded-lg border border-sky/18 bg-midnight/35 px-4 py-3 text-left text-sm text-silver transition hover:bg-sky/12 hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  onClick={choose}
                  disabled={answered}
                >
                  {option}
                </button>
              ))}
            </div>
            {answered ? (
              <div className="mt-6 rounded-lg border border-lavender/30 bg-lavender/10 p-4">
                <p className="font-handwriting text-2xl text-lavender">{question.response}</p>
                <button className="mt-4 rounded-lg bg-cream px-5 py-3 font-rounded font-bold text-midnight hover:bg-ice" onClick={next}>
                  {questionIndex >= siteContent.quiz.length - 1 ? "Reveal hidden message" : "Next question"}
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
