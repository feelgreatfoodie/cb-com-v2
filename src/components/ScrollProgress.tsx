'use client';

import { m, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <m.div
      className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left print:hidden"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, var(--accent-active), var(--accent-warm))',
      }}
    />
  );
}
