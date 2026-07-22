import { motion } from 'framer-motion';
import { Cloud, Award, BadgeCheck, type LucideIcon } from 'lucide-react';
import { certifications } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';

const iconMap: Record<string, LucideIcon> = { Cloud, Award };

export function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-max">
        <SectionHeading
          subtitle="Certifications"
          title="Credentials & certifications"
          description="Continuous learning through industry-recognized certifications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] ?? Award;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 relative overflow-hidden group"
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-accent-500/10 blur-2xl group-hover:bg-accent-500/20 transition-colors" />
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-accent-500/20 to-blue-500/20 text-accent-600 dark:text-accent-400">
                    <Icon size={22} />
                  </span>
                  <BadgeCheck className="text-emerald-500" size={18} />
                </div>
                <h3 className="font-bold leading-snug">{cert.title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                <p className="mt-3 text-xs font-semibold text-accent-600 dark:text-accent-400">{cert.year}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
