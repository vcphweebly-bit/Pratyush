import type { SyntheticEvent } from "react";

export const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='650' viewBox='0 0 900 650'%3E%3Cdefs%3E%3CradialGradient id='g' cx='50%25' cy='28%25' r='80%25'%3E%3Cstop stop-color='%2389C7F5' offset='0'/%3E%3Cstop stop-color='%232457A7' offset='.42'/%3E%3Cstop stop-color='%2307152E' offset='1'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='900' height='650' fill='url(%23g)'/%3E%3Cg fill='%23FFF9EE' opacity='.75'%3E%3Ccircle cx='132' cy='102' r='3'/%3E%3Ccircle cx='726' cy='88' r='2'/%3E%3Ccircle cx='621' cy='238' r='2.5'/%3E%3Ccircle cx='269' cy='224' r='1.8'/%3E%3Ccircle cx='792' cy='376' r='2.2'/%3E%3Ccircle cx='193' cy='481' r='2.5'/%3E%3C/g%3E%3Ctext x='50%25' y='51%25' text-anchor='middle' fill='%23FFF9EE' font-family='Georgia,serif' font-size='34'%3E%5BADD PHOTO HERE%5D%3C/text%3E%3C/svg%3E";

export function handleImageFallback(event: SyntheticEvent<HTMLImageElement>) {
  const img = event.currentTarget;
  if (img.src !== FALLBACK_IMAGE) {
    img.src = FALLBACK_IMAGE;
  }
}

export function daysSince(dateValue: string) {
  const date = new Date(dateValue);

  if (!dateValue || Number.isNaN(date.getTime())) {
    return null;
  }

  const today = new Date();
  const start = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const end = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.max(0, Math.floor((end - start) / 86_400_000));
}
