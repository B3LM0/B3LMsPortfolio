import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Github, CalendarDays, type LucideIcon } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';

const iconMap: Record<string, LucideIcon> = { Briefcase, GraduationCap, Github };

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <SectionHeading
          subtitle="Experience"
          title="Where I've applied my skills"
          description="Professional and academic experiences that shaped my journey."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => {
            const Icon = iconMap[exp.icon] ?? Briefcase;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-blue-600 text-white shadow-lg shadow-accent-500/30 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <CalendarDays size={13} /> {exp.period}
                  </span>
                </div>
                <h3 className="text-lg font-bold">{exp.role}</h3>
                <p className="text-sm text-accent-600 dark:text-accent-400 font-medium">{exp.organization}</p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
