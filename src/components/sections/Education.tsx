import { motion } from 'framer-motion';
import { GraduationCap, Award, CalendarDays, MapPin } from 'lucide-react';
import { education } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-max">
        <SectionHeading
          subtitle="Education"
          title="My academic journey"
          description="The foundation of my software engineering path."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500 via-blue-500 to-transparent md:-translate-x-px" />

          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative pl-12 md:pl-0 mb-10 md:mb-0 md:grid md:grid-cols-2 md:gap-8 ${
                i % 2 === 0 ? '' : 'md:[&>*]:col-start-2'
              }`}
            >
              {/* Node */}
              <span className="absolute left-4 md:left-1/2 top-2  -translate-x-1/2 grid place-items-center w-8 h-8 rounded-full bg-gradient-to-br from-accent-500 to-blue-600 text-white shadow-lg shadow-accent-500/40 ring-4 ring-white dark:ring-[#0a0e17]">
                <GraduationCap size={16} />
              </span>

              <div className={`glass-card p-6 ${i % 2 === 0 ? 'md:text-right md:mr-8' : 'md:ml-8'}`}>
                <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-accent-500/15 text-accent-600 dark:text-accent-400">
                    <CalendarDays size={13} /> {edu.year}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <Award size={13} /> {edu.grade}
                  </span>
                </div>
                <h3 className="text-lg font-bold">{edu.degree}</h3>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-accent-600 dark:text-accent-400 font-medium">
                  <MapPin size={14} /> {edu.institution}
                </p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
