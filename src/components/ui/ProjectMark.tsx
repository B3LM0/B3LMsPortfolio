import { useState } from 'react';
import type { Project } from '@/data/projects';
import { cn } from '@/utils/cn';

// First letter of the first two words, or the first two characters when the
// title is a single word.
function initialsOf(title: string): string {
  const words = title.replace(/[^a-z0-9\s]/gi, ' ').split(/\s+/).filter(Boolean);
  if (words.length === 0) return '?';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

// Project logo, or a coloured monogram when there is no logo or it fails to load.
export function ProjectMark({ project, className }: { project: Project; className?: string }) {
  const [failed, setFailed] = useState(false);

  if (!project.logo || failed) {
    return (
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br font-black text-white shadow-md',
          project.accent,
          className,
        )}
      >
        {initialsOf(project.title)}
      </span>
    );
  }

  return (
    <img
      src={project.logo}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn('shrink-0 rounded-xl bg-white object-cover shadow-md ring-1 ring-black/5', className)}
    />
  );
}
