import { useCallback, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { EasterEggs } from "./components/EasterEggs";
import { FinalLetter } from "./components/FinalLetter";
import { FinalSky } from "./components/FinalSky";
import { FloatingNavigation } from "./components/FloatingNavigation";
import { GiftBox } from "./components/GiftBox";
import { Hero } from "./components/Hero";
import { MemoryConstellation } from "./components/MemoryConstellation";
import { MemoryQuiz } from "./components/MemoryQuiz";
import { MusicPlayer } from "./components/MusicPlayer";
import { ObservationCards } from "./components/ObservationCards";
import { OpenWhenMessages } from "./components/OpenWhenMessages";
import { PolaroidGallery } from "./components/PolaroidGallery";
import { SecretEntry } from "./components/SecretEntry";
import { StarBackground } from "./components/StarBackground";
import { Timeline } from "./components/Timeline";
import { WelcomeEnvelope } from "./components/WelcomeEnvelope";
import { siteContent } from "./data/content";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { usePersistentMusic } from "./hooks/usePersistentMusic";

export default function App() {
  const [unlocked, setUnlocked] = useLocalStorage("little-universe-unlocked", false);
  const [welcomed, setWelcomed] = useLocalStorage("little-universe-welcomed", false);
  const [finalOpened, setFinalOpened] = useLocalStorage("little-universe-final-opened", false);
  const [moonClicks, setMoonClicks] = useState(0);
  const soundtrack = siteContent.songs[0];
  const music = usePersistentMusic({
    src: soundtrack?.file ?? `${import.meta.env.BASE_URL}audio/dooriyan.mp3`,
    startAtSeconds: soundtrack?.startAtSeconds ?? 31,
    volume: 0.42
  });

  useEffect(() => {
    const baseTitle = `${siteContent.recipient.name} | A Little Universe`;
    document.title = baseTitle;

    const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']") ?? document.createElement("link");
    favicon.rel = "icon";
    favicon.href = `data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#07152E"/><text x="50" y="61" text-anchor="middle" font-family="Georgia" font-size="36" fill="#DDF2FF">${siteContent.recipient.initials}</text></svg>`
    )}`;
    document.head.appendChild(favicon);

    const onVisibility = () => {
      document.title = document.hidden ? "Come back, there is more ✦" : baseTitle;
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const replay = () => {
    setWelcomed(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const markFinalOpened = useCallback(() => setFinalOpened(true), [setFinalOpened]);
  const markMoonFound = useCallback(() => setMoonClicks(0), []);
  const musicButton = (
    <>
      <button
        className="fixed left-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-sky/25 bg-midnight/75 text-sky shadow-glow backdrop-blur transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky"
        onClick={music.toggleMute}
        aria-label={music.isMuted ? "Unmute Dooriyan" : "Mute Dooriyan"}
      >
        {music.isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
      {music.needsGesture ? (
        <button
          className="fixed left-16 top-4 z-40 rounded-full border border-sky/20 bg-midnight/80 px-3 py-2 text-xs text-silver backdrop-blur"
          onClick={music.play}
        >
          tap for music
        </button>
      ) : null}
    </>
  );

  if (!unlocked) {
    return (
      <>
        {musicButton}
        <SecretEntry
          finalOpened={finalOpened}
          onUnlock={() => {
            setUnlocked(true);
            void music.play();
          }}
        />
      </>
    );
  }

  if (!welcomed) {
    return (
      <>
        {musicButton}
        <WelcomeEnvelope
          onBegin={() => {
            setWelcomed(true);
            void music.play();
          }}
        />
      </>
    );
  }

  return (
    <>
      <StarBackground />
      <FloatingNavigation />
      <EasterEggs moonClicks={moonClicks} onMoonFound={markMoonFound} />
      {musicButton}

      <main>
        <Hero finalOpened={finalOpened} onMoonSecret={() => setMoonClicks((value) => value + 1)} />
        <MusicPlayer isMuted={music.isMuted} isPlaying={music.isPlaying} needsGesture={music.needsGesture} onPlay={music.play} onToggleMute={music.toggleMute} />
        <MemoryConstellation />
        <Timeline />
        <PolaroidGallery />
        <ObservationCards />
        <OpenWhenMessages />
        <GiftBox />
        <MemoryQuiz />
        <FinalLetter />
        <FinalSky onOpened={markFinalOpened} onReplay={replay} />
      </main>
      <footer className="px-5 pb-10 text-center font-handwriting text-2xl text-silver/58">
        Made with memories, music, and an irresponsible number of stars.
      </footer>
    </>
  );
}
