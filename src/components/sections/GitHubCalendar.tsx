import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

// Deterministic placeholder contribution calendar.
function generateGrid(): number[][] {
  const weeks = 52;
  const days = 7;
  return Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => {
      const seed = (w * 7 + d) * 9301 + 49297;
      const r = (seed % 233280) / 233280;
      if (r < 0.35) return 0;
      if (r < 0.6) return 1;
      if (r < 0.8) return 2;
      if (r < 0.93) return 3;
      return 4;
    }),
  );
}

const levelColors = [
  'bg-slate-200/60 dark:bg-white/5',
  'bg-accent-500/30',
  'bg-accent-500/55',
  'bg-accent-500/80',
  'bg-accent-500',
];

export function GitHubCalendar() {
  const grid = useMemo(() => generateGrid(), []);

  return (
    <section className="section-padding">
      <div className="container-max">
        <SectionHeading
          subtitle="Activity"
          title="GitHub contributions"
          description="A snapshot of my coding activity over the past year. (Placeholder)"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 overflow-x-auto scrollbar-hide"
        >
          <div className="flex items-center gap-2 mb-4 text-slate-600 dark:text-slate-300">
            <Github size={18} className="text-accent-500" />
            <span className="font-semibold">@boualem-benyahia</span>
          </div>

          <div className="flex gap-1 min-w-max">
            {grid.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1">
                {week.map((level, di) => (
                  <motion.span
                    key={di}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (wi * 7 + di) * 0.0015, duration: 0.2 }}
                    className={`w-2.5 h-2.5 rounded-sm ${levelColors[level]}`}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end gap-1.5 mt-4 text-xs text-slate-500 dark:text-slate-400">
            <span>Less</span>
            {levelColors.map((c, i) => (
              <span key={i} className={`w-2.5 h-2.5 rounded-sm ${c}`} />
            ))}
            <span>More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
