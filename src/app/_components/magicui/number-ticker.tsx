"use client";

import { cn } from "@/lib/utils";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { CSSProperties, useEffect, useRef } from "react";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  style,
  setIsMounted,
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number; // delay in s
  style?: CSSProperties;
  setIsMounted?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    isInView &&
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            latest.toFixed(0)
          );
        }
      }),
    [springValue]
  );

  useEffect(() => {
    setTimeout(() => {
      setIsMounted && setIsMounted(true);
    }, 3500);
  }, []);

  return (
    <span
      className={cn(
        "inline-block tabular-nums text-black dark:text-white",
        className
      )}
      ref={ref}
      style={style}
    />
  );
}
