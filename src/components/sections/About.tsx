import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { about } from '@/data/portfolio';
import { SectionHeading, FadeIn } from '@/components/ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionHeading
          subtitle="About Me"
          title="A bit about who I am"
          description="Get to know the person behind the code."
        />

        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          {/* Card */}
          <FadeIn className="lg:col-span-3" delay={0.1}>
            <div className="glass-card p-8 h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-accent-500 to-blue-600 text-white shadow-lg shadow-accent-500/30">
                  <Sparkles size={20} />
                </span>
                <h3 className="text-xl font-bold">Who I Am</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                {about.description}
              </p>
            </div>
          </FadeIn>

          {/* Highlights */}
          <FadeIn className="lg:col-span-2" delay={0.2}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-bold mb-5">What drives me</h3>
              <ul className="space-y-3">
                {about.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 shrink-0 text-accent-500" size={20} />
                    <span className="text-slate-600 dark:text-slate-300">{h}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
