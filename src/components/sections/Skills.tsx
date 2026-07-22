import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layout, Server, Database, Code2, Wrench, Sparkles, type LucideIcon,
} from 'lucide-react';
import { skillCategories, type SkillCategory } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DotRating } from '@/components/ui/DotRating';
import { cn } from '@/utils/cn';

const iconMap: Record<string, LucideIcon> = {
  Layout, Server, Database, Code2, Wrench, Sparkles,
};

export function Skills() {
  const [active, setActive] = useState<string>('all');

  const filtered: SkillCategory[] =
    active === 'all' ? skillCategories : skillCategories.filter((c) => c.id === active);

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <SectionHeading
          subtitle="Skills"
          title="Technologies I work with"
          description="A snapshot of my technical toolkit across the stack."
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <FilterChip label="All" active={active === 'all'} onClick={() => setActive('all')} />
          {skillCategories.map((c) => (
            <FilterChip
              key={c.id}
              label={c.label}
              active={active === c.id}
              onClick={() => setActive(c.id)}
            />
          ))}
        </div>

        {/* Cards */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((cat) => {
              const Icon = iconMap[cat.icon] ?? Sparkles;
              return (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6 }}
                  className="glass-card p-6 hover:shadow-accent-500/10"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500/20 to-blue-500/20 text-accent-600 dark:text-accent-400">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-bold">{cat.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
  {cat.skills.map((s) => (
    <span
      key={s.name}
      className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium"
    >
      {s.name}
    </span>
  ))}
</div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 active:scale-95',
        active
          ? 'bg-gradient-to-r from-accent-500 to-blue-600 text-white shadow-lg shadow-accent-500/30'
          : 'glass hover:bg-white/80 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300',
      )}
    >
      {label}
    </button>
  );
}
