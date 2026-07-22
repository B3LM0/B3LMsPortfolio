import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';

type Errors = { name?: string; email?: string; message?: string };

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
  { icon: Github, label: 'GitHub', value: 'B3LM0', href: profile.social.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'BENYAHIA Boualem', href: profile.social.linkedin },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    else if (form.name.trim().length < 2) e.name = 'Name is too short';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <SectionHeading
          subtitle="Contact"
          title="Let's work together"
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="glass-card p-7"
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

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="glass-card p-7 space-y-4"
            noValidate
          >
            <Field label="Name" error={errors.name}>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="input"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="input"
              />
            </Field>
            <Field label="Message" error={errors.message}>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={4}
                className="input resize-none"
              />
            </Field>

            <button type="submit" className="btn-primary w-full">
              <Send size={18} /> Send Message
            </button>

            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium"
              >
                <CheckCircle2 size={18} /> Message sent! I'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>

      {/* Local input styles */}
      <style>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(148,163,184,0.2);
          font-size: 0.875rem;
          outline: none;
          transition: all 0.2s;
        }
        .dark .input {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.1);
          color: #e2e8f0;
        }
        .input:focus {
          border-color: rgba(6,182,212,0.5);
          box-shadow: 0 0 0 3px rgba(6,182,212,0.15);
        }
        .input::placeholder { color: #94a3b8; }
      `}</style>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
          <AlertCircle size={13} /> {error}
        </p>
      )}
    </div>
  );
}
