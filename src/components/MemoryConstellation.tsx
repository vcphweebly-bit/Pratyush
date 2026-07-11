import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { siteContent, type Memory } from "../data/content";
import { FALLBACK_IMAGE, handleImageFallback } from "../utils/assetFallbacks";
import { nearestConnections } from "../utils/constellation";
import { SectionHeading } from "./SectionHeading";

export function MemoryConstellation() {
  const [selected, setSelected] = useState<Memory | null>(null);
  const connections = nearestConnections(siteContent.memories);

  return (
    <section id="stars" className="relative overflow-hidden px-5 py-24 text-cream">
      <SectionHeading eyebrow="chapter one" title="A Constellation of Memories">
        Each star is a small proof. Tap one and the sky remembers with you.
      </SectionHeading>

      <div className="relative mx-auto h-[520px] max-w-5xl rounded-lg border border-sky/18 bg-white/7 shadow-glow backdrop-blur">
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          {connections.map(({ from, to }) => (
            <motion.line
              key={`${from.title}-${to.title}`}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              stroke="#89C7F5"
              strokeWidth="1.2"
              strokeOpacity="0.38"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            />
          ))}
        </svg>
        {siteContent.memories.map((memory) => (
          <button
            key={memory.title}
            className={`absolute rounded-full bg-cream shadow-[0_0_24px_rgba(221,242,255,.75)] transition hover:scale-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky ${
              memory.hidden ? "h-2 w-2 opacity-70" : "h-4 w-4"
            }`}
            style={{ left: `${memory.x}%`, top: `${memory.y}%` }}
            aria-label={`Open memory: ${memory.title}`}
            onClick={() => setSelected(memory)}
          >
            <span className="sr-only">{memory.title}</span>
          </button>
        ))}
        <p className="absolute bottom-5 left-5 max-w-xs font-handwriting text-2xl text-silver/70">
          there is one very quiet star near the edge
        </p>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/72 px-5 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <motion.article
              className="relative w-full max-w-md rounded-lg border border-sky/25 bg-ice p-4 text-midnight shadow-paper"
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 24 }}
            >
              <button
                className="absolute right-3 top-3 rounded-full bg-midnight/10 p-2 text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
                onClick={() => setSelected(null)}
                aria-label="Close memory"
              >
                <X size={18} />
              </button>
              <img
                src={selected.image || FALLBACK_IMAGE}
                onError={handleImageFallback}
                alt=""
                className="h-52 w-full rounded-md object-cover"
                loading="lazy"
              />
              {selected.date ? <p className="mt-4 font-rounded text-xs uppercase tracking-[0.18em] text-royal">{selected.date}</p> : null}
              <h3 className="mt-2 font-serifSoft text-3xl">{selected.title}</h3>
              <p className="mt-3 leading-7 text-midnight/78">{selected.description}</p>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
