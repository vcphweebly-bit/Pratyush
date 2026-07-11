import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteContent } from "../data/content";
import { handleImageFallback } from "../utils/assetFallbacks";

type HeroProps = {
  onMoonSecret: () => void;
  finalOpened: boolean;
};

export function Hero({ onMoonSecret, finalOpened }: HeroProps) {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 py-24 text-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="font-handwriting text-3xl text-sky">Born on {siteContent.recipient.birthDateLabel}</p>
          <h1 className="mt-4 whitespace-pre-line font-serifSoft text-5xl leading-none sm:text-7xl">{siteContent.hero.title}</h1>
          <p className="mt-7 whitespace-pre-line text-xl leading-9 text-silver sm:text-2xl">{siteContent.hero.subtitle}</p>
          {finalOpened ? (
            <p className="mt-5 max-w-lg font-handwriting text-2xl text-lavender">{siteContent.easterEggs.alreadySeen}</p>
          ) : null}
          <p className="mt-8 max-w-md font-handwriting text-2xl text-cream/82">{siteContent.sender.signature}</p>
        </motion.div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          {siteContent.hero.image ? (
            <img
              src={siteContent.hero.image}
              onError={handleImageFallback}
              alt={`${siteContent.recipient.name} memory`}
              className="absolute bottom-2 right-0 z-20 aspect-[3/4] w-32 rotate-6 rounded-sm border-4 border-cream object-cover shadow-paper sm:w-40"
              loading="eager"
            />
          ) : null}
          <button
            className="absolute left-1/2 top-1/2 z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_32%_28%,#FFF9EE,#DDF2FF_45%,#89C7F5_70%,rgba(137,199,245,.08)_72%)] shadow-[0_0_80px_rgba(137,199,245,.45)] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-sky sm:h-52 sm:w-52"
            onClick={onMoonSecret}
            aria-label="Moon"
          />
          <div className="absolute inset-0 rounded-full border border-sky/10" />
          <div className="absolute inset-10 rounded-full border border-cream/10" />
          {Array.from({ length: 16 }, (_, index) => (
            <span
              key={index}
              className="absolute h-1.5 w-1.5 rounded-full bg-cream shadow-glow"
              style={{
                left: `${50 + Math.cos(index * 0.72) * (32 + (index % 4) * 5)}%`,
                top: `${50 + Math.sin(index * 0.72) * (32 + (index % 4) * 5)}%`
              }}
            />
          ))}
        </div>
      </div>
      <button
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-silver/65"
        onClick={() => document.getElementById("stars")?.scrollIntoView({ behavior: "smooth" })}
      >
        Scroll
        <ChevronDown className="animate-bob" size={18} />
      </button>
    </section>
  );
}
