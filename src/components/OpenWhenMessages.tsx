import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, X } from "lucide-react";
import { siteContent, type OpenWhenMessage } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function OpenWhenMessages() {
  const [selected, setSelected] = useState<OpenWhenMessage | null>(null);

  return (
    <section id="messages" className="px-5 py-24 text-cream">
      <SectionHeading eyebrow="chapter six" title="Open-When Messages">
        Digital envelopes for days that need a softer place to land.
      </SectionHeading>
      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {siteContent.openWhenMessages.map((message) => (
          <button
            key={message.title}
            className="group min-h-44 rounded-lg border border-sky/18 bg-white/8 p-5 text-left shadow-glow backdrop-blur transition hover:-translate-y-1 hover:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky"
            onClick={() => setSelected(message)}
          >
            <Mail className="text-sky transition group-hover:rotate-[-6deg]" />
            <h3 className="mt-5 font-serifSoft text-3xl leading-tight">{message.title}</h3>
            <p className="mt-3 font-handwriting text-2xl text-lavender">open gently</p>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {selected ? (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/75 px-5 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true">
            <motion.article className="paper-texture relative w-full max-w-lg rounded-lg bg-cream p-8 text-midnight shadow-paper" initial={{ y: 28, rotateX: -10 }} animate={{ y: 0, rotateX: 0 }} exit={{ y: 28, opacity: 0 }}>
              <button className="absolute right-4 top-4 rounded-full bg-midnight/10 p-2" onClick={() => setSelected(null)} aria-label="Close message">
                <X size={18} />
              </button>
              <p className="font-handwriting text-3xl text-royal">{selected.title}</p>
              <p className="mt-5 whitespace-pre-line font-serifSoft text-2xl leading-9">{selected.message}</p>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
