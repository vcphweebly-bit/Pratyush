import { useState } from "react";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { MailOpen, Sparkles } from "lucide-react";

type WelcomeEnvelopeProps = {
  onBegin: () => void;
};

export function WelcomeEnvelope({ onBegin }: WelcomeEnvelopeProps) {
  const [opened, setOpened] = useState(false);

  const open = () => {
    setOpened(true);
    confetti({
      particleCount: 42,
      spread: 58,
      scalar: 0.65,
      colors: ["#D9E3F0", "#DDF2FF", "#FFF9EE", "#89C7F5"],
      origin: { y: 0.58 }
    });
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 text-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(137,199,245,.2),transparent_34%),linear-gradient(180deg,#07152E,#102A56)]" />
      <section className="relative z-10 w-full max-w-lg text-center">
        <p className="font-handwriting text-3xl text-sky">This is not just a website.</p>
        <h1 className="mt-3 font-serifSoft text-4xl leading-tight sm:text-5xl">It is a tiny place made entirely for you.</h1>
        <button
          className="group relative mx-auto mt-10 block h-56 w-72 max-w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-sky"
          onClick={open}
          aria-label="Open the envelope"
        >
          <motion.div
            className="absolute inset-x-5 bottom-0 h-36 rounded-b-lg border border-cream/50 bg-cream shadow-paper"
            animate={opened ? { y: 18 } : { y: 0 }}
          />
          <motion.div
            className="absolute inset-x-8 bottom-10 h-28 rounded-lg bg-ice p-5 text-midnight shadow-paper"
            initial={{ y: 80, opacity: 0 }}
            animate={opened ? { y: -42, opacity: 1 } : { y: 45, opacity: 0 }}
            transition={{ type: "spring", stiffness: 130, damping: 18 }}
          >
            <MailOpen className="mx-auto text-royal" />
            <p className="mt-3 font-handwriting text-2xl">A note escaped.</p>
          </motion.div>
          <motion.div
            className="absolute inset-x-5 bottom-24 h-24 origin-bottom rounded-t-lg border border-cream/50 bg-[#F3DDBB]"
            style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
            animate={opened ? { rotateX: 180, y: -10 } : { rotateX: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            className="absolute inset-x-5 bottom-0 h-36 rounded-b-lg border border-cream/50 bg-[#FFE8C7]"
            style={{ clipPath: "polygon(0 0, 50% 48%, 100% 0, 100% 100%, 0 100%)" }}
          />
          <Sparkles className="absolute right-7 top-8 text-sky opacity-80 transition group-hover:scale-110" />
        </button>
        <AnimatePresence>
          {opened ? (
            <motion.button
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-cream px-8 font-rounded font-bold text-midnight shadow-glow transition hover:bg-ice focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onClick={onBegin}
            >
              Begin
            </motion.button>
          ) : null}
        </AnimatePresence>
      </section>
    </main>
  );
}
