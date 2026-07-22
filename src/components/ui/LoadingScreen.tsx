import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-white dark:bg-[#0a0e17]"
    >
      <div className="flex flex-col items-center gap-5">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500 to-blue-600 blur-xl opacity-50 animate-pulse" />
          <div className="relative grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-blue-600 text-white shadow-2xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <Code2 size={32} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-sm font-semibold gradient-text">Boualem Ben Yahia</p>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                className="w-2 h-2 rounded-full bg-accent-500"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
