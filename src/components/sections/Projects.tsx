import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/utils/cn';

export function Projects() {
  const [query, setQuery] = useState('');
  const [tech, setTech] = useState<string>('all');

  const allTechs = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.technologies.forEach((t) => set.add(t)));
    return ['all', ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesTech = tech === 'all' || p.technologies.includes(tech);
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));
      return matchesTech && matchesQuery;
    });
  }, [query, tech]);

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeading
          subtitle="Projects"
          title="Things I've built"
          description="A selection of projects showcasing my full-stack work."
        />

        {/* Controls 
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-11 pr-4 py-3 rounded-xl glass text-sm outline-none focus:ring-2 focus:ring-accent-500/50 transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {allTechs.map((t) => (
              <button
                key={t}
                onClick={() => setTech(t)}
                className={cn(
                  'px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-300 active:scale-95',
                  tech === t
                    ? 'bg-gradient-to-r from-accent-500 to-blue-600 text-white shadow-lg shadow-accent-500/30'
                    : 'glass hover:bg-white/80 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300',
                )}
              >
                {t === 'all' ? 'All' : t}
              </button>
            ))}
          </div>
        </div>*/}

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="glass-card overflow-hidden group flex flex-col"
              >
                {/* Banner */}
                <div className={cn('relative h-32 bg-gradient-to-br', p.accent)}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-white font-bold text-lg drop-shadow leading-tight">{p.title}</h3>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {p.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                    {p.technologies.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-accent-500/10 text-accent-600 dark:text-accent-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium glass hover:bg-white/80 dark:hover:bg-white/10 transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-accent-500 to-blue-600 hover:from-accent-400 hover:to-blue-500 transition-all"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 dark:text-slate-400 mt-10">No projects match your search.</p>
        )}
      </div>
    </section>
  );
}
