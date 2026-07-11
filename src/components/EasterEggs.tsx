import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { siteContent } from "../data/content";

type EasterEggsProps = {
  moonClicks: number;
  onMoonFound: () => void;
};

export function EasterEggs({ moonClicks, onMoonFound }: EasterEggsProps) {
  const [note, setNote] = useState<string | null>(null);

  useEffect(() => {
    if (moonClicks >= 5) {
      setNote(siteContent.easterEggs.moon);
      onMoonFound();
    }
  }, [moonClicks, onMoonFound]);

  useEffect(() => {
    let typed = "";
    const nickname = siteContent.recipient.nickname.toLowerCase();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.length !== 1 || !nickname) {
        return;
      }

      typed = `${typed}${event.key.toLowerCase()}`.slice(-nickname.length);
      if (typed === nickname) {
        setNote(siteContent.easterEggs.nickname);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {note ? (
        <motion.div className="fixed inset-x-5 top-5 z-[60] mx-auto max-w-md rounded-lg border border-lavender/40 bg-midnight/92 p-5 text-cream shadow-glow backdrop-blur" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
          <button className="absolute right-3 top-3 rounded-full p-2 text-silver" onClick={() => setNote(null)} aria-label="Close hidden note">
            <X size={18} />
          </button>
          <p className="pr-10 font-handwriting text-3xl text-lavender">hidden note</p>
          <p className="mt-3 whitespace-pre-line text-sm leading-7 text-silver">{note}</p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
