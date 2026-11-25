import { useCallback, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Images } from 'lucide-react';
import { projects, type Project, type ProjectCategory } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectMark } from '@/components/ui/ProjectMark';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { cn } from '@/utils/cn';

const CATEGORY_ORDER: ProjectCategory[] = ['Web', 'Mobile', 'Desktop', 'Data'];
const MAX_CARD_TECHS = 3;

function MiniCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const cover = project.screenshots[0]?.src;
  const extraTechs = project.technologies.length - MAX_CARD_TECHS;

  return (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -6 }}
      onClick={onOpen}
      aria-haspopup="dialog"
      aria-label={`${project.title}: ${project.tagline}. Open details`}
      className="glass-card group flex flex-col overflow-hidden text-left outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
    >
      {/* Cover: first screenshot over the project colour */}
      <div className={cn('relative h-24 sm:h-32 overflow-hidden bg-gradient-to-br', project.accent)}>
        {cover && (
          <img
            src={cover}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <span className="absolute top-2 right-2 rounded-full bg-black/55 px-2 py-0.5 text-[10px] sm:text-xs font-semibold text-white backdrop-blur">
          {project.category}
        </span>
        {project.screenshots.length > 1 && (
          <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-black/55 px-2 py-0.5 text-[10px] sm:text-xs font-medium text-white backdrop-blur">
            <Images size={12} /> {project.screenshots.length}
          </span>
        )}
        <ProjectMark project={project} className="absolute bottom-2 left-2 sm:left-3 h-8 w-8 sm:h-10 sm:w-10 text-xs sm:text-sm" />
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="font-bold text-sm sm:text-base leading-tight">{project.title}</h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-snug line-clamp-2">
          {project.tagline}
        </p>

        <div className="mt-3 hidden sm:flex flex-wrap gap-1">
          {project.technologies.slice(0, MAX_CARD_TECHS).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-accent-500/10 text-accent-700 dark:text-accent-300"
            >
              {t}
            </span>
          ))}
          {extraTechs > 0 && (
            <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400">
              +{extraTechs}
            </span>
          )}
        </div>

        <span className="mt-auto pt-3 inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-accent-600 dark:text-accent-400">
          View details
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </motion.button>
  );
}

export function Projects() {
  const [category, setCategory] = useState<ProjectCategory | 'All'>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  const filters = useMemo(() => {
    const counts = new Map<ProjectCategory, number>();
    projects.forEach((p) => counts.set(p.category, (counts.get(p.category) ?? 0) + 1));
    return [
      { id: 'All' as const, count: projects.length },
      ...CATEGORY_ORDER.filter((c) => counts.has(c)).map((c) => ({ id: c, count: counts.get(c)! })),
    ];
  }, []);

  const visible = useMemo(
    () => (category === 'All' ? projects : projects.filter((p) => p.category === category)),
    [category],
  );

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeading
          subtitle="Projects"
          title="Things I've built"
          description="Web, mobile and desktop applications. Click a project to see the details and screenshots."
        />

        <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setCategory(f.id)}
              aria-pressed={category === f.id}
              className={cn(
                'px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 active:scale-95',
                category === f.id
                  ? 'bg-gradient-to-r from-accent-500 to-blue-600 text-white shadow-lg shadow-accent-500/30'
                  : 'glass hover:bg-white/80 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300',
              )}
            >
              {f.id} <span className="opacity-70">({f.count})</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <MiniCard key={p.id} project={p} index={i} onOpen={() => setSelected(p)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal key={selected.id} project={selected} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
