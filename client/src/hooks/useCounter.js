
import { useState, useEffect } from 'react';

/**
 * Animates a number from 0 to `target` over ~1.4s on mount.
 */
export function useCounter(target, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const steps = 50;
    const step = target / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

