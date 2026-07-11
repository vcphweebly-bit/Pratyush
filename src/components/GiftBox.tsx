import { useRef, useState } from "react";
import { Download, Gift, Heart, Sparkles } from "lucide-react";
import { siteContent } from "../data/content";
import { handleImageFallback } from "../utils/assetFallbacks";
import { SectionHeading } from "./SectionHeading";

export function GiftBox() {
  const [step, setStep] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const labels = ["Remove the ribbon", "Open the box", "Reveal the gift"];

  const saveKeepsake = async () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    canvas.width = 1000;
    canvas.height = 650;
    const gradient = context.createLinearGradient(0, 0, 1000, 650);
    gradient.addColorStop(0, "#07152E");
    gradient.addColorStop(0.6, "#102A56");
    gradient.addColorStop(1, "#2457A7");
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "rgba(255, 249, 238, 0.94)";
    roundedRect(context, 70, 62, 860, 526, 34);
    context.fill();

    context.fillStyle = "#DDF2FF";
    roundedRect(context, 682, 88, 166, 44, 22);
    context.fill();

    context.fillStyle = "#102A56";
    context.font = "22px Georgia";
    context.fillText("secretly official", 700, 118);

    try {
      const image = await loadImage(siteContent.gift.image);
      context.save();
      context.beginPath();
      context.arc(230, 270, 105, 0, Math.PI * 2);
      context.clip();
      context.drawImage(image, 125, 165, 210, 210);
      context.restore();
      context.strokeStyle = "#2457A7";
      context.lineWidth = 12;
      context.beginPath();
      context.arc(230, 270, 112, 0, Math.PI * 2);
      context.stroke();
    } catch {
      context.fillStyle = "#DDF2FF";
      context.beginPath();
      context.arc(230, 270, 105, 0, Math.PI * 2);
      context.fill();
    }

    context.fillStyle = "#FFF9EE";
    context.fillText("*", 112, 122);
    context.fillText("*", 874, 538);

    context.fillStyle = "#07152E";
    context.font = "60px Georgia";
    context.fillText(siteContent.gift.couponTitle, 390, 220);
    context.font = "30px Georgia";
    wrapText(context, siteContent.gift.revealText.replace(/\n/g, " "), 390, 292, 440, 40);
    context.font = "27px Georgia";
    context.fillStyle = "#2457A7";
    wrapText(context, siteContent.gift.couponSubtitle, 390, 462, 440, 34);

    const link = document.createElement("a");
    link.download = "little-universe-keepsake.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <section className="px-5 py-24 text-cream">
      <SectionHeading eyebrow="chapter seven" title="A Small Interactive Gift">
        Three clicks. One tiny reveal. Keep it safe when it opens.
      </SectionHeading>
      <div className="mx-auto max-w-lg text-center">
        <button
          className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-sky"
          onClick={() => setStep((value) => Math.min(3, value + 1))}
          aria-label={labels[step] || "Gift revealed"}
        >
          <div className={`absolute h-40 w-56 rounded-lg bg-royal shadow-paper transition duration-500 ${step >= 2 ? "translate-y-8" : ""}`} />
          <div className={`absolute top-16 h-16 w-64 rounded-lg bg-sky shadow-paper transition duration-500 ${step >= 2 ? "-translate-y-10 rotate-[-8deg]" : ""}`} />
          <div className={`absolute h-56 w-9 bg-lavender transition duration-500 ${step >= 1 ? "opacity-0 scale-y-50" : ""}`} />
          <div className={`absolute h-9 w-64 bg-lavender transition duration-500 ${step >= 1 ? "opacity-0 scale-x-50" : ""}`} />
          <Gift className={`relative z-10 text-cream transition duration-500 ${step >= 3 ? "scale-125 text-lavender" : ""}`} size={54} />
        </button>
        <p className="mt-4 font-rounded text-sm uppercase tracking-[0.18em] text-sky">{labels[step] || "opened"}</p>
        {step >= 3 ? (
          <div className="mt-8 rounded-lg border border-sky/20 bg-white/8 p-6 shadow-glow backdrop-blur">
            <div className="paper-texture relative overflow-hidden rounded-lg bg-cream p-5 text-midnight shadow-paper">
              <div className="absolute right-4 top-4 rotate-6 rounded-full bg-lavender/80 px-3 py-1 font-handwriting text-xl">
                shh
              </div>
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-[10px] border-deepblue bg-ice shadow-glow">
                <img
                  src={siteContent.gift.image}
                  onError={handleImageFallback}
                  alt={`${siteContent.recipient.name} wish card`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex justify-center gap-2 text-royal">
                <Sparkles size={18} />
                <Heart size={18} fill="currentColor" />
                <Sparkles size={18} />
              </div>
              <h3 className="mt-2 font-handwriting text-5xl text-royal">{siteContent.gift.couponTitle}</h3>
              <p className="mt-4 whitespace-pre-line font-serifSoft text-3xl leading-10">{siteContent.gift.revealText}</p>
              <p className="mx-auto mt-5 max-w-sm rounded-lg border border-royal/20 bg-ice/70 p-4 text-sm leading-6 text-deepblue">
                {siteContent.gift.couponSubtitle}
              </p>
              <p className="mt-4 font-handwriting text-2xl text-royal">signed in suspiciously careful handwriting, Pratyush</p>
            </div>
            <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cream px-5 py-3 font-rounded font-bold text-midnight hover:bg-ice" onClick={saveKeepsake}>
              <Download size={18} />
              Keep this safe
            </button>
          </div>
        ) : null}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </section>
  );
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function roundedRect(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function wrapText(context: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
  const words = text.split(" ");
  let line = "";

  words.forEach((word) => {
    const testLine = `${line}${word} `;
    if (context.measureText(testLine).width > maxWidth && line) {
      context.fillText(line, x, y);
      line = `${word} `;
      y += lineHeight;
    } else {
      line = testLine;
    }
  });

  context.fillText(line, x, y);
}
