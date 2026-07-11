import { useState } from "react";
import { motion } from "framer-motion";
import { Badge, X } from "lucide-react";
import { siteContent } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function FinalLetter() {
  const [opened, setOpened] = useState(false);
  const [instant, setInstant] = useState(false);
  const paragraphs = siteContent.finalLetter.split("\n\n").filter(Boolean);

  return (
    <section id="letter" className="px-5 py-24 text-cream">
      <SectionHeading eyebrow="final chapter" title="The Letter">
        Folded away until you are ready.
      </SectionHeading>
      <div className="mx-auto max-w-3xl">
        {!opened ? (
          <button
            className="paper-texture mx-auto flex min-h-80 w-full max-w-lg flex-col items-center justify-center rounded-lg bg-cream p-8 text-midnight shadow-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-sky"
            onClick={() => setOpened(true)}
            aria-label="Break the wax seal and open the letter"
          >
            <Badge className="text-royal" size={58} />
            <p className="mt-5 font-handwriting text-4xl">break the seal</p>
          </button>
        ) : (
          <motion.article className="paper-texture relative rounded-lg bg-cream p-6 text-midnight shadow-paper sm:p-10" initial={{ opacity: 0, y: 20, scaleY: 0.92 }} animate={{ opacity: 1, y: 0, scaleY: 1 }}>
            <button className="absolute right-4 top-4 rounded-full bg-midnight/10 p-2" onClick={() => setOpened(false)} aria-label="Close letter">
              <X size={18} />
            </button>
            <button className="mb-6 rounded-lg border border-royal/30 px-4 py-2 font-rounded text-sm text-royal" onClick={() => setInstant(true)}>
              Read instantly
            </button>
            <div className="space-y-6 font-serifSoft text-2xl leading-10">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={paragraph}
                  className="whitespace-pre-line"
                  initial={instant ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: instant ? 0 : index * 0.28, duration: 0.45 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.article>
        )}
      </div>
    </section>
  );
}
