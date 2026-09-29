import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
  { icon: Github, label: 'GitHub', value: 'B3LM0', href: profile.social.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'BENYAHIA Boualem', href: profile.social.linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <SectionHeading
          subtitle="Contact"
          title="Let's work together"
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="glass-card p-7 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-6">Get in touch</h3>
          <ul className="space-y-4">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                    <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-accent-500/20 to-blue-500/20 text-accent-600 dark:text-accent-400 group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </span>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
                      <div className="font-medium group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors break-all">{value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-accent-500/20 to-blue-500/20 text-accent-600 dark:text-accent-400">
                      <Icon size={20} />
                    </span>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
                      <div className="font-medium">{value}</div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
