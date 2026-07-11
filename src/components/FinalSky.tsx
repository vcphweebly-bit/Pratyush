import { useState } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { RotateCcw, Sparkles } from "lucide-react";
import { siteContent } from "../data/content";

type FinalSkyProps = {
  onOpened: () => void;
  onReplay: () => void;
};

export function FinalSky({ onOpened, onReplay }: FinalSkyProps) {
  const [revealed, setRevealed] = useState(false);
  const initials = siteContent.recipient.initials || siteContent.recipient.name.slice(0, 2).toUpperCase();

  const reveal = () => {
    setRevealed(true);
    onOpened();
    document.getElementById("final-sky")?.scrollIntoView({ behavior: "smooth" });
    confetti({
      particleCount: 55,
      spread: 75,
      scalar: 0.62,
      colors: ["#DDF2FF", "#89C7F5", "#D9E3F0"],
      origin: { y: 0.35 }
    });
  };

  return (
    <section id="final-sky" className="relative min-h-screen overflow-hidden px-5 py-24 text-center text-cream">
      {!revealed ? (
        <button className="mt-20 rounded-lg bg-cream px-8 py-4 font-rounded font-bold text-midnight shadow-glow hover:bg-ice" onClick={reveal}>
          One last thing
        </button>
      ) : (
        <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center">
          <div className="relative h-80 w-full">
            <motion.div className="shooting-star absolute left-0 top-12 h-px w-36 bg-gradient-to-r from-transparent via-cream to-transparent" initial={{ x: -200, y: 20, opacity: 0 }} animate={{ x: 900, y: 190, opacity: [0, 1, 0] }} transition={{ duration: 1.8, delay: 0.7 }} />
            {Array.from({ length: 36 }, (_, index) => (
              <motion.span
                key={index}
                className="absolute rounded-full bg-cream"
                style={{
                  left: `${10 + ((index * 23) % 80)}%`,
                  top: `${8 + ((index * 37) % 72)}%`,
                  width: `${2 + (index % 3)}px`,
                  height: `${2 + (index % 3)}px`
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.035 }}
              />
            ))}
            <motion.div className="absolute inset-0 flex items-center justify-center font-serifSoft text-8xl text-ice sm:text-9xl" initial={{ opacity: 0, filter: "blur(12px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ delay: 1.1, duration: 1 }}>
              {initials}
            </motion.div>
          </div>
          <motion.p className="mt-8 whitespace-pre-line font-serifSoft text-4xl leading-tight sm:text-5xl" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
            {siteContent.finalMessage}
          </motion.p>
          <motion.h2 className="mt-6 font-handwriting text-5xl text-sky" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}>
            {siteContent.recipient.occasion}, {siteContent.recipient.name}.
          </motion.h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-sky/25 px-5 py-3 font-rounded text-silver hover:bg-white/10" onClick={onReplay}>
              <RotateCcw size={18} />
              Restart journey
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-cream px-5 py-3 font-rounded font-bold text-midnight hover:bg-ice" onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}>
              <Sparkles size={18} />
              Replay our universe
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
