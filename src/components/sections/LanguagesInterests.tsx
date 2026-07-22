import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { languages, interests } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DotRating } from '@/components/ui/DotRating';

export function LanguagesInterests() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Languages */}
          <div>
            <SectionHeading subtitle="Languages" title="Languages I speak" center={false} />
            <div className="glass-card p-7 flex flex-col gap-5">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base font-semibold">{lang.name}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{lang.level}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <SectionHeading subtitle="Interests" title="Things I love" center={false} />
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, i) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass text-sm font-medium hover:bg-accent-500/10 hover:text-accent-600 dark:hover:text-accent-400 transition-colors cursor-default"
                >
                  <Heart size={14} className="text-accent-500" /> {interest}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
