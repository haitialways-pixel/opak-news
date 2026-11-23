import { useEffect, useState } from "react";

/**
 * A clock that updates when the soonest future instant in `expiries` is reached.
 * Used so Nouveau/Nouvo (and other timed badges) drop in the browser without a redeploy or reload.
 */
export function useLiveNow(expiries: number[]): number {
  const [now, setNow] = useState(() => Date.now());
  const next = expiries.filter((t) => t > now).sort((a, b) => a - b)[0];

  useEffect(() => {
    if (next == null) return;
    const delay = Math.min(Math.max(next - Date.now(), 0) + 30, 2_000_000_000);
    const id = window.setTimeout(() => setNow(Date.now()), delay);
    return () => window.clearTimeout(id);
  }, [next]);

  return now;
}
