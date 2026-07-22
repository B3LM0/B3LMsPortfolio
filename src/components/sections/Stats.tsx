import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '@/data/portfolio';
import { useCountUp } from '@/hooks/useCountUp';

function StatItem({ label, value, suffix, start }: { label: string; value: number; suffix: string; start: boolean }) {
  const count = useCountUp(value, 1600, start);
  return (
    <div className="glass-card p-6 text-center">
      <div className="text-3xl md:text-4xl font-extrabold gradient-text">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">{label}</div>
    </div>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="px-5 sm:px-8 lg:px-12 py-12">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((s) => (
            <StatItem key={s.label} label={s.label} value={s.value} suffix={s.suffix} start={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
