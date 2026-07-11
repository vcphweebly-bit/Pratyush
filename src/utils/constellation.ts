import type { Memory } from "../data/content";

export function nearestConnections(memories: Memory[]) {
  const visible = memories.filter((memory) => !memory.hidden);

  return visible.flatMap((memory, index) => {
    const next = visible[index + 1];
    const afterNext = visible[index + 2];
    return [next, index % 2 === 0 ? afterNext : undefined]
      .filter(Boolean)
      .map((target) => ({
        from: memory,
        to: target as Memory
      }));
  });
}
