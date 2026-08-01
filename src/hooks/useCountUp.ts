import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  prefix?: string;
  suffix?: string;
  enabled?: boolean;
}

export function useCountUp({ end, duration = 2000, start = 0, prefix = '', suffix = '', enabled = true }: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const frameRef = useRef<number>(0);
  const hasAnimated = useRef(false);

  const startAnimation = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const range = end - start;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(start + range * eased);

      setCount(currentValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  }, [end, duration, start]);

  useEffect(() => {
    if (enabled && !hasAnimated.current) {
      startAnimation();
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [enabled, startAnimation]);

  return `${prefix}${count}${suffix}`;
}
