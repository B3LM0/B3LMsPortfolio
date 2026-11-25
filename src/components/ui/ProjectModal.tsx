import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  Lock,
  CheckCircle2,
  Sparkles,
  Calendar,
  Briefcase,
  Maximize2,
} from 'lucide-react';
import type { Project } from '@/data/projects';
import { ProjectMark } from '@/components/ui/ProjectMark';
import { cn } from '@/utils/cn';

type Props = {
  project: Project;
  onClose: () => void;
};

function Gallery({ project }: { project: Project }) {
  const shots = project.screenshots;
  const [index, setIndex] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + shots.length) % shots.length),
    [shots.length],
  );

  // Left / right arrows browse the screenshots.
  useEffect(() => {
    if (shots.length < 2) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, shots.length]);

  // Keep the active thumbnail visible.
  useEffect(() => {
    const thumb = thumbsRef.current?.children[index] as HTMLElement | undefined;
    thumb?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
  }, [index]);

  if (shots.length === 0) return null;
  const current = shots[index];

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900/80">
        <div className="relative aspect-[16/10]">
          <motion.img
            key={current.src}
            src={current.src}
            alt={`${project.title}: ${current.caption}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>

        <a
          href={current.src}
          target="_blank"
          rel="noreferrer"
          aria-label="Open the screenshot in full size"
          className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70 transition-colors"
        >
          <Maximize2 size={16} />
        </a>

        {shots.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      <div className="mt-2 flex items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
        <p aria-live="polite">{current.caption}</p>
        {shots.length > 1 && (
          <p className="shrink-0 tabular-nums">
            {index + 1} / {shots.length}
          </p>
        )}
      </div>

      {shots.length > 1 && (
        <div ref={thumbsRef} className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {shots.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show screenshot ${i + 1}: ${s.caption}`}
              aria-current={i === index}
              className={cn(
                'relative h-14 w-20 sm:h-16 sm:w-24 shrink-0 overflow-hidden rounded-lg border-2 bg-slate-100 dark:bg-slate-900 transition-all',
                i === index
                  ? 'border-accent-500 opacity-100'
                  : 'border-transparent opacity-60 hover:opacity-100',
              )}
            >
              <img src={s.src} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ProjectModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = `project-${project.id}-title`;

  // Lock the page scroll, focus the close button, close on Escape, and give
  // the focus back to the card that opened the window.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center bg-slate-950/70 backdrop-blur-sm sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        className="relative w-full sm:max-w-5xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto overscroll-contain rounded-t-3xl sm:rounded-3xl bg-white dark:bg-[#0f1420] shadow-2xl"
      >
        {/* Header (stays visible while scrolling) */}
        <div className="sticky top-0 z-10 border-b border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-[#0f1420]/90 backdrop-blur-xl">
          <div className={cn('h-1.5 w-full bg-gradient-to-r', project.accent)} />
          <div className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4">
            <ProjectMark project={project} className="h-11 w-11 sm:h-12 sm:w-12 text-base" />
            <div className="min-w-0 flex-1">
              <h3 id={titleId} className="text-lg sm:text-xl font-bold leading-tight truncate">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 truncate">
                {project.tagline}
              </p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full glass hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="px-4 sm:px-6 py-5 sm:py-6 space-y-8">
          {/* Meta */}
          <div className="flex flex-wrap gap-2 text-xs font-medium">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 bg-accent-500/10 text-accent-700 dark:text-accent-300">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300">
              <Calendar size={13} /> {project.year}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300">
              <Briefcase size={13} /> {project.context}
            </span>
          </div>

          <Gallery project={project} />

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Left: story */}
            <div className="lg:col-span-3 space-y-8">
              <section>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 mb-2">
                  About the project
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{project.description}</p>
              </section>

              <section>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 mb-3">
                  Key features
                </h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </section>

              {project.highlights.length > 0 && (
                <section>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 mb-3">
                    Technical highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <Sparkles size={16} className="mt-0.5 shrink-0 text-amber-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Right: stack and links */}
            <aside className="lg:col-span-2 space-y-6">
              <section className="glass rounded-2xl p-4 sm:p-5">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 mb-3">
                  Tech stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-accent-500/10 text-accent-700 dark:text-accent-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </section>

              <section className="flex flex-col gap-2">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary w-full">
                    <ExternalLink size={18} /> {project.liveLabel ?? 'Live demo'}
                  </a>
                )}
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost w-full">
                    <Github size={18} /> Source code
                  </a>
                ) : (
                  project.privateCodeNote && (
                    <p className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5">
                      <Lock size={16} /> {project.privateCodeNote}
                    </p>
                  )
                )}
              </section>
            </aside>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
