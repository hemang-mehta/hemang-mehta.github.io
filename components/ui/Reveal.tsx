"use client";

import { motion, useAnimationControls, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const hidden = { opacity: 0, y: 14 };
const shown = { opacity: 1, y: 0 };

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (reduce || !ref.current) return;
    if (ref.current.getBoundingClientRect().top > window.innerHeight) {
      controls.set(hidden);
      setArmed(true);
    }
  }, [reduce, controls]);

  useEffect(() => {
    if (armed && inView) {
      controls.start({ ...shown, transition: { duration: 0.55, delay, ease: [0.21, 0.62, 0.34, 1] } });
    }
  }, [armed, inView, controls, delay]);

  return (
    <motion.div ref={ref} className={className} animate={controls}>
      {children}
    </motion.div>
  );
}
