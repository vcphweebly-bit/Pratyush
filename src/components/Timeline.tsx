import { motion } from "framer-motion";
import { Heart, MessageCircle, Moon, Music2, Sparkles } from "lucide-react";
import { siteContent } from "../data/content";
import { handleImageFallback } from "../utils/assetFallbacks";
import { fadeUp, viewportOnce } from "../utils/animations";
import { SectionHeading } from "./SectionHeading";

const icons = {
  sparkles: Sparkles,
  message: MessageCircle,
  music: Music2,
  heart: Heart,
  moon: Moon
};

export function Timeline() {
  return (
    <section id="timeline" className="px-5 py-24 text-cream">
      <SectionHeading eyebrow="chapter two" title="Our Timeline">
        A few coordinates from the map so far. Replace them with the ones only you two understand.
      </SectionHeading>
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-sky/10 via-sky/45 to-sky/10 sm:left-1/2" />
        {siteContent.timeline.map((item, index) => {
          const Icon = icons[item.icon];
          const alignRight = index % 2 === 0;

          return (
            <motion.article
              key={`${item.date}-${item.title}`}
              className={`relative mb-10 pl-14 sm:w-1/2 sm:pl-0 ${alignRight ? "sm:ml-auto sm:pl-10" : "sm:pr-10"}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ duration: 0.5 }}
            >
              <div className={`absolute left-0 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-sky/30 bg-midnight text-sky shadow-glow sm:left-auto ${alignRight ? "sm:-left-5" : "sm:-right-5"}`}>
                <Icon size={18} />
              </div>
              <div className="rounded-lg border border-sky/18 bg-white/8 p-4 shadow-glow backdrop-blur">
                {item.image ? (
                  <img src={item.image} onError={handleImageFallback} alt="" className="mb-4 h-36 w-full rounded-md object-cover" loading="lazy" />
                ) : null}
                {item.date ? <p className="font-rounded text-xs uppercase tracking-[0.18em] text-sky">{item.date}</p> : null}
                <h3 className="mt-2 font-serifSoft text-3xl">{item.title}</h3>
                <p className="mt-2 font-handwriting text-2xl text-lavender">{item.label}</p>
                <p className="mt-3 text-sm leading-7 text-silver/82">{item.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
