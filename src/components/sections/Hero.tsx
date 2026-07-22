import { motion } from 'framer-motion';
import { Download, Mail, FolderGit2, MapPin, Github, Linkedin, ArrowDown } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { TypingText } from '@/components/ui/TypingText';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <AnimatedBackground />

      <div className="container-max section-padding grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm font-medium text-accent-600 dark:text-accent-400 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
            </span>
            Available for opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-balance"
          >
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 h-8"
          >
            <TypingText words={profile.titles} className="text-accent-600 dark:text-accent-400" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
          >
            {profile.shortIntro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href={profile.cvUrl} download className="btn-primary">
              <Download size={18} /> Download CV
            </a>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-ghost">
              <Mail size={18} /> Contact Me
            </button>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-ghost">
              <FolderGit2 size={18} /> View Projects
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-4 text-slate-500 dark:text-slate-400"
          >
            <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent-500 transition-colors">
              <Github size={22} />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent-500 transition-colors">
              <Linkedin size={22} />
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin size={16} /> {profile.location}
            </span>
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative animate-float">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-500/40 to-blue-500/40 blur-3xl scale-110" />
            {/* Ring */}
            <div className="absolute -inset-4 rounded-full border border-dashed border-accent-500/30 animate-spin-slow" />
            <div className="absolute -inset-8 rounded-full border border-accent-500/10" />
            {/* Avatar */}
           <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl">
  <img
    src={profile.avatarImage}
    alt={profile.name}
    className="w-full h-full object-cover"
  />
</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-accent-500 transition-colors"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}
