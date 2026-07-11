import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { siteContent } from "../data/content";
import { FALLBACK_IMAGE, handleImageFallback } from "../utils/assetFallbacks";
import { SectionHeading } from "./SectionHeading";

export function PolaroidGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [secretVisible, setSecretVisible] = useState(false);
  const active = activeIndex === null ? null : siteContent.gallery[activeIndex];

  const move = (direction: number) => {
    if (activeIndex === null) {
      return;
    }

    setActiveIndex((activeIndex + direction + siteContent.gallery.length) % siteContent.gallery.length);
  };

  return (
    <section id="memories" className="relative overflow-hidden px-5 py-24 text-cream">
      <SectionHeading eyebrow="chapter three" title="Memory Polaroids">
        A scrapbook wall for photographs, ticket stubs, impossible little captions, and one hidden arrow.
      </SectionHeading>
      <div className="pointer-events-none absolute left-8 top-36 h-14 w-24 rotate-[-8deg] rounded bg-cream/20" />
      <div className="pointer-events-none absolute right-10 top-52 font-handwriting text-3xl text-lavender">look closer</div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {siteContent.gallery.map((item, index) => (
          <motion.figure
            key={item.src}
            className="paper-texture relative mx-auto w-full max-w-xs cursor-pointer rounded-sm bg-cream p-3 pb-8 text-midnight shadow-paper"
            style={{ rotate: `${[-4, 3, -2, 5, -3][index % 5]}deg` }}
            whileHover={{ rotate: 0, y: -6 }}
            whileTap={{ rotate: 0, scale: 0.98 }}
            onClick={() => setActiveIndex(index)}
            tabIndex={0}
            role="button"
            aria-label={`Open photo: ${item.caption}`}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setActiveIndex(index);
              }
            }}
          >
            <img src={item.src} onError={handleImageFallback} alt={item.alt} className="aspect-[4/3] w-full rounded-sm object-cover" loading="lazy" />
            <figcaption className="mt-4 font-handwriting text-2xl leading-6">{item.caption}</figcaption>
            {item.hasSecretArrow ? (
              <button
                className="absolute -right-3 top-10 rotate-12 rounded-full bg-lavender px-3 py-1 font-handwriting text-xl text-midnight shadow"
                onClick={(event) => {
                  event.stopPropagation();
                  setSecretVisible(true);
                }}
                aria-label="Reveal extra photograph"
              >
                this
              </button>
            ) : null}
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {secretVisible ? (
          <motion.div className="mx-auto mt-12 max-w-md rounded-lg border border-lavender/35 bg-lavender/12 p-5 text-center shadow-glow" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <p className="font-handwriting text-3xl text-lavender">extra photograph unlocked</p>
            <img src={siteContent.gallery[0]?.secretSrc || FALLBACK_IMAGE} onError={handleImageFallback} alt="Secret extra memory" className="mt-4 aspect-[4/3] w-full rounded-md object-cover" />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {active ? (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/82 px-5 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true">
            <div className="relative w-full max-w-3xl">
              <button className="absolute -top-12 right-0 rounded-full bg-white/10 p-3 text-cream" onClick={() => setActiveIndex(null)} aria-label="Close lightbox">
                <X size={20} />
              </button>
              <img src={active.src} onError={handleImageFallback} alt={active.alt} className="max-h-[72vh] w-full rounded-lg object-contain shadow-paper" />
              <p className="mt-4 text-center font-handwriting text-3xl text-cream">{active.caption}</p>
              <div className="mt-5 flex justify-center gap-4">
                <button className="rounded-full bg-white/10 p-3 text-cream" onClick={() => move(-1)} aria-label="Previous photo">
                  <ArrowLeft />
                </button>
                <button className="rounded-full bg-white/10 p-3 text-cream" onClick={() => move(1)} aria-label="Next photo">
                  <ArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
