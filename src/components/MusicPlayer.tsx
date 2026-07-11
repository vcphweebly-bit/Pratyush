import { Music2, Play, Volume2, VolumeX } from "lucide-react";
import { siteContent } from "../data/content";
import { handleImageFallback } from "../utils/assetFallbacks";

type MusicPlayerProps = {
  isPlaying: boolean;
  isMuted: boolean;
  needsGesture: boolean;
  onPlay: () => void;
  onToggleMute: () => void;
};

export function MusicPlayer({ isPlaying, isMuted, needsGesture, onPlay, onToggleMute }: MusicPlayerProps) {
  const track = siteContent.songs[0];

  if (!track) {
    return null;
  }

  return (
    <section id="music" className="-mt-10 px-5 pb-14 text-cream">
      <div className="mx-auto max-w-sm rounded-lg border border-sky/20 bg-white/9 p-4 shadow-glow backdrop-blur">
        <div className="flex items-center gap-4">
          <div className="relative h-24 w-24 shrink-0 rounded-lg bg-cream p-2 shadow-paper">
            <div className={`h-full w-full rounded-full bg-[radial-gradient(circle,#07152E_0_12%,#DDF2FF_13%_18%,#102A56_19%_48%,#07152E_49%)] ${isPlaying && !isMuted ? "animate-spin-slow" : ""}`} />
            <img
              src={track.cover}
              onError={handleImageFallback}
              alt=""
              className="absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="min-w-0 flex-1 text-left">
            <p className="flex items-center gap-2 font-rounded text-xs uppercase tracking-[0.16em] text-sky">
              <Music2 size={14} />
              music room
            </p>
            <h3 className="mt-1 truncate font-serifSoft text-3xl">{track.title}</h3>
            <p className="text-sm text-silver/78">{track.artist}</p>
            <p className="mt-2 text-xs leading-5 text-silver/70">
              {needsGesture ? "Tap once to let it follow the journey." : isMuted ? "Ready, but muted." : "Playing softly from 0:31."}
            </p>
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <button className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-cream px-4 font-rounded font-bold text-midnight shadow-glow hover:bg-ice" onClick={onPlay}>
            <Play size={17} />
            Play
          </button>
          <button className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-sky/25 px-4 font-rounded text-sky hover:bg-white/10" onClick={onToggleMute}>
            {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>
      </div>
    </section>
  );
}
