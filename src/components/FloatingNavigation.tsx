import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const chapters = [
  { id: "home", label: "Home" },
  { id: "music", label: "Music" },
  { id: "stars", label: "Stars" },
  { id: "timeline", label: "Timeline" },
  { id: "memories", label: "Memories" },
  { id: "messages", label: "Messages" },
  { id: "letter", label: "Letter" }
];

export function FloatingNavigation() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(chapters[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setCurrent(visible.target.id);
        }
      },
      { threshold: [0.35, 0.55] }
    );

    chapters.forEach((chapter) => {
      const node = document.getElementById(chapter.id);
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <nav aria-label="Chapter navigation" className="fixed bottom-5 right-5 z-40 sm:bottom-auto sm:right-6 sm:top-1/2 sm:-translate-y-1/2">
      <button
        className="flex h-12 w-12 items-center justify-center rounded-full border border-sky/30 bg-midnight/75 text-cream shadow-glow backdrop-blur sm:hidden"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Open chapter menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <div
        className={`absolute bottom-16 right-0 w-44 rounded-lg border border-sky/20 bg-midnight/88 p-2 shadow-glow backdrop-blur transition sm:static sm:block sm:w-auto sm:bg-white/7 ${
          open ? "block" : "hidden"
        }`}
      >
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            className={`mb-1 flex min-h-10 w-full items-center gap-2 rounded-md px-3 text-left font-rounded text-sm transition last:mb-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky ${
              current === chapter.id ? "bg-sky/18 text-cream" : "text-silver/75 hover:bg-white/10 hover:text-cream"
            }`}
            onClick={() => goTo(chapter.id)}
          >
            <span className={`h-2 w-2 rounded-full ${current === chapter.id ? "bg-sky" : "bg-silver/35"}`} />
            <span className="hidden sm:inline">{chapter.label}</span>
            <span className="sm:hidden">{chapter.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
