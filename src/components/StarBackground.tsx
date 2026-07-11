import { memo } from "react";

type StarBackgroundProps = {
  density?: "soft" | "rich";
};

export const StarBackground = memo(function StarBackground({ density = "rich" }: StarBackgroundProps) {
  const stars = Array.from({ length: density === "rich" ? 82 : 42 }, (_, index) => ({
    id: index,
    left: `${(index * 47) % 100}%`,
    top: `${(index * 31) % 100}%`,
    delay: `${(index % 9) * 0.45}s`,
    size: `${1 + (index % 4) * 0.65}px`
  }));

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-midnight" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(36,87,167,0.46),transparent_42%),radial-gradient(circle_at_20%_80%,rgba(200,184,255,0.15),transparent_28%),linear-gradient(180deg,#07152E_0%,#102A56_58%,#07152E_100%)]" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-sky/10 blur-3xl" />
      {stars.map((star) => (
        <span
          key={star.id}
          className="star-dot absolute rounded-full bg-cream"
          style={{ left: star.left, top: star.top, width: star.size, height: star.size, animationDelay: star.delay }}
        />
      ))}
    </div>
  );
});
