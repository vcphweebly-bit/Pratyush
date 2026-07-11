import { useCallback, useEffect, useRef, useState } from "react";
import type { Song } from "../data/content";

export function useAudioPlayer(songs: Song[]) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.45);
  const [hasError, setHasError] = useState(false);

  const currentTrack = songs[trackIndex];
  const startAt = currentTrack?.startAtSeconds ?? 0;

  useEffect(() => {
    if (!currentTrack) {
      return;
    }

    const audio = new Audio(currentTrack.file);
    audio.preload = "metadata";
    audio.volume = volume;
    audioRef.current = audio;
    setProgress(startAt);
    setDuration(0);
    setHasError(false);

    const updateProgress = () => setProgress(audio.currentTime);
    const updateDuration = () => {
      setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);
      if (startAt > 0 && audio.currentTime < startAt) {
        audio.currentTime = startAt;
        setProgress(startAt);
      }
    };
    const onEnded = () => setTrackIndex((index) => (songs.length ? (index + 1) % songs.length : 0));
    const onError = () => {
      setHasError(true);
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
    };
  }, [currentTrack, songs.length, startAt, trackIndex, volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const play = useCallback(async () => {
    if (!audioRef.current || hasError) {
      return;
    }

    try {
      if (startAt > 0 && audioRef.current.currentTime < startAt) {
        audioRef.current.currentTime = startAt;
        setProgress(startAt);
      }
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setHasError(true);
      setIsPlaying(false);
    }
  }, [hasError, startAt]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      void play();
    }
  }, [isPlaying, pause, play]);

  const next = useCallback(() => {
    setTrackIndex((index) => (songs.length ? (index + 1) % songs.length : 0));
    setIsPlaying(false);
  }, [songs.length]);

  const previous = useCallback(() => {
    setTrackIndex((index) => (songs.length ? (index - 1 + songs.length) % songs.length : 0));
    setIsPlaying(false);
  }, [songs.length]);

  const seek = useCallback((time: number) => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.currentTime = time;
    setProgress(time);
  }, []);

  return {
    currentTrack,
    trackIndex,
    isPlaying,
    progress,
    duration,
    volume,
    hasError,
    setVolume,
    toggle,
    next,
    previous,
    seek
  };
}
