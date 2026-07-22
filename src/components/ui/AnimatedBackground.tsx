import { useMemo } from 'react';

// Lightweight CSS particle/gradient background — no canvas, GPU-friendly.
type Particle = {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
};

export function AnimatedBackground() {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 28 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 1.5,
        delay: Math.random() * 6,
        duration: Math.random() * 8 + 8,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Gradient blobs */}
      <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-accent-500/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute top-1/3 -right-24 w-[26rem] h-[26rem] rounded-full bg-blue-500/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute -bottom-32 left-1/3 w-[24rem] h-[24rem] rounded-full bg-cyan-400/15 blur-[120px] animate-pulse-slow" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-accent-400/40 dark:bg-accent-300/40"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
