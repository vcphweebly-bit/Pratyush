import { useCallback, useEffect, useRef, useState } from "react";

type PersistentMusicOptions = {
  src: string;
  startAtSeconds: number;
  volume?: number;
};

export function usePersistentMusic({ src, startAtSeconds, volume = 0.42 }: PersistentMusicOptions) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (audio.currentTime < startAtSeconds) {
      audio.currentTime = startAtSeconds;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setNeedsGesture(false);
    } catch {
      setNeedsGesture(true);
    }
  }, [startAtSeconds]);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = volume;
    audio.currentTime = startAtSeconds;
    audioRef.current = audio;

    const keepAfterIntro = () => {
      if (audio.currentTime < startAtSeconds) {
        audio.currentTime = startAtSeconds;
      }
    };

    audio.addEventListener("timeupdate", keepAfterIntro);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", keepAfterIntro);
      audioRef.current = null;
    };
  }, [src, startAtSeconds, volume]);

  useEffect(() => {
    void play();
  }, [play]);

  useEffect(() => {
    if (!needsGesture) {
      return;
    }

    const start = () => {
      void play();
    };

    window.addEventListener("pointerdown", start, { once: true });
    window.addEventListener("keydown", start, { once: true });
    return () => {
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("keydown", start);
    };
  }, [needsGesture, play]);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
    if (audio.paused) {
      void play();
    }
  }, [play]);

  return {
    isPlaying,
    isMuted,
    needsGesture,
    play,
    toggleMute
  };
}
