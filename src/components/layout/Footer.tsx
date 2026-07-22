import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { profile, navLinks } from '@/data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/60 dark:border-white/10 mt-10">
      <div className="container-max px-5 sm:px-8 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-3">
              <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500 to-blue-600 text-white">
                <Code2 size={18} />
              </span>
              <span className="gradient-text">{profile.name}</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              {profile.titles[0]} & {profile.titles[1]} — Future Data Scientist
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">Connect</h4>
            <div className="flex gap-3">
              <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid place-items-center w-10 h-10 rounded-xl glass hover:bg-accent-500/10 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                <Github size={18} />
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid place-items-center w-10 h-10 rounded-xl glass hover:bg-accent-500/10 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href={profile.social.email} aria-label="Email" className="grid place-items-center w-10 h-10 rounded-xl glass hover:bg-accent-500/10 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200/60 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; {year} {profile.name}</p>
         
        </div>
      </div>
    </footer>
  );
}
