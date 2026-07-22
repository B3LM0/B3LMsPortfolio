import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

type DotRatingProps = {
  value: number; // 0-100
  total?: number; // number of dots, default 5
  label?: string;
  sublabel?: string;
  className?: string;
};

export function DotRating({ value, total = 5, label, sublabel, className }: DotRatingProps) {
  const filled = Math.round((value / 100) * total);

  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      {label && <span className="text-sm font-semibold text-center">{label}</span>}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: i * 0.08, duration: 0.3, ease: 'backOut' }}
            className={cn(
              'w-2.5 h-2.5 rounded-full transition-colors',
              i < filled
                ? 'bg-gradient-to-br from-accent-500 to-blue-600 shadow-sm shadow-accent-500/40'
                : 'bg-slate-300/70 dark:bg-white/10',
            )}
          />
        ))}
      </div>
      {sublabel && <span className="text-xs text-slate-500 dark:text-slate-400">{sublabel}</span>}
    </div>
  );
}
