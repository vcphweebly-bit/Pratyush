import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { siteContent } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function ObservationCards() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const observation = siteContent.observations[index];

  if (!observation) {
    return null;
  }

  const next = () => {
    setFlipped(false);
    setIndex((value) => (value + 1) % siteContent.observations.length);
  };

  return (
    <section className="px-5 py-24 text-cream">
      <SectionHeading eyebrow="chapter four" title="Things I Notice About You">
        Small notes. Specific things. The sort of details that refuse to stay invisible.
      </SectionHeading>
      <div className="mx-auto max-w-md text-center">
        <button
          className="perspective-card relative h-72 w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky"
          onClick={() => setFlipped((value) => !value)}
          aria-label="Flip observation card"
        >
          <motion.div
            className="preserve-3d absolute inset-0"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="backface-hidden paper-texture absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-cream p-8 text-midnight shadow-paper">
              <p className="font-rounded text-xs uppercase tracking-[0.2em] text-royal">tap to open</p>
              <h3 className="mt-5 font-handwriting text-5xl leading-tight">{observation.title}</h3>
            </div>
            <div className="backface-hidden paper-texture absolute inset-0 flex rotate-y-180 flex-col items-center justify-center rounded-lg bg-ice p-8 text-midnight shadow-paper">
              <p className="font-serifSoft text-2xl leading-9">{observation.text}</p>
            </div>
          </motion.div>
        </button>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button className="rounded-lg border border-sky/25 px-5 py-3 font-rounded text-sm text-silver transition hover:bg-white/10" onClick={next}>
            Next note
          </button>
          <button className="rounded-full border border-sky/25 p-3 text-sky transition hover:bg-white/10" onClick={() => setFlipped(false)} aria-label="Reset card">
            <RotateCcw size={18} />
          </button>
        </div>
        <p className="mt-4 text-sm text-silver/62">
          {index + 1} / {siteContent.observations.length}
        </p>
      </div>
    </section>
  );
}
