import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="font-handwriting text-2xl text-sky">{eyebrow}</p>
      <h2 className="mt-2 font-serifSoft text-4xl leading-tight text-cream sm:text-5xl">{title}</h2>
      {children ? <p className="mt-4 text-sm leading-7 text-silver/82 sm:text-base">{children}</p> : null}
    </div>
  );
}
