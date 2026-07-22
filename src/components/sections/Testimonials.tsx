import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <SectionHeading
          subtitle="Testimonials"
          title="What people say"
          description="Kind words from supervisors and clients. (Easy to remove later.)"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-7 relative"
            >
              <Quote className="absolute top-5 right-5 text-accent-500/20" size={40} />
              <blockquote className="text-slate-600 dark:text-slate-300 leading-relaxed relative z-10">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-gradient-to-br from-accent-500 to-blue-600 text-white font-bold text-sm">
                  {t.avatarText}
                </span>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
