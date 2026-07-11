import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { KeyRound, Volume2, VolumeX } from "lucide-react";
import { siteContent } from "../data/content";
import { StarBackground } from "./StarBackground";

type SecretEntryProps = {
  onUnlock: () => void;
  finalOpened: boolean;
};

export function SecretEntry({ onUnlock, finalOpened }: SecretEntryProps) {
  const [code, setCode] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [ambienceEnabled, setAmbienceEnabled] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();

    if (code.trim() !== siteContent.secretCode) {
      setIsWrong(true);
      window.setTimeout(() => setIsWrong(false), 520);
      return;
    }

    setIsOpening(true);
    try {
      const audio = new Audio(`${import.meta.env.BASE_URL}audio/unlock.mp3`);
      audio.volume = 0.35;
      void audio.play();
    } catch {
      // Missing audio is expected in a fresh personalized project.
    }

    window.setTimeout(onUnlock, 920);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 text-cream">
      <StarBackground />
      <button
        className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-sky/25 bg-white/8 text-sky shadow-glow backdrop-blur transition hover:bg-white/14 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky"
        aria-label={ambienceEnabled ? "Turn ambience off" : "Turn ambience on"}
        onClick={() => setAmbienceEnabled((enabled) => !enabled)}
      >
        {ambienceEnabled ? <Volume2 size={19} /> : <VolumeX size={19} />}
      </button>

      <motion.section
        className="w-full max-w-md text-center"
        animate={isOpening ? { scale: 1.05, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <motion.div
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-sky/30 bg-white/8 shadow-glow backdrop-blur"
          animate={isOpening ? { rotate: 90, boxShadow: "0 0 90px rgba(221,242,255,.7)" } : { rotate: 0 }}
        >
          <KeyRound className="text-sky" size={34} />
        </motion.div>
        <p className="font-handwriting text-3xl text-sky sm:text-4xl">
          {finalOpened ? siteContent.easterEggs.alreadySeen : "A small universe has been waiting for you."}
        </p>
        <h1 className="mt-4 font-serifSoft text-4xl leading-tight sm:text-5xl">Enter the secret code.</h1>
        <form onSubmit={submit} className="mt-8">
          <motion.input
            aria-label="Secret code"
            className="h-14 w-full rounded-lg border border-sky/30 bg-white/10 px-5 text-center font-rounded text-lg tracking-[0.35em] text-cream outline-none backdrop-blur placeholder:text-silver/45 focus:border-sky focus:ring-4 focus:ring-sky/20"
            type="password"
            inputMode="numeric"
            autoComplete="off"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="••••"
            animate={isWrong ? { x: [-12, 12, -9, 9, 0] } : { x: 0 }}
            transition={{ duration: 0.36 }}
          />
          <button className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-cream px-6 font-rounded font-bold text-midnight shadow-glow transition hover:-translate-y-0.5 hover:bg-ice focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky">
            Unlock
          </button>
        </form>
        <AnimatePresence>
          {isWrong ? (
            <motion.p
              className="mt-4 text-sm text-lavender"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Not that one. The universe is being dramatic.
            </motion.p>
          ) : null}
        </AnimatePresence>
        {ambienceEnabled ? <p className="mt-5 text-xs text-silver/60">Imagine a very quiet music box here until you add audio.</p> : null}
      </motion.section>
    </main>
  );
}
