import { useEffect, useRef, useState } from 'react';

type TypingTextProps = {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
};

export function TypingText({
  words,
  className,
  typeSpeed = 90,
  deleteSpeed = 45,
  holdTime = 1600,
}: TypingTextProps) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    if (!deleting && text === current) {
      timeoutRef.current = window.setTimeout(() => setDeleting(true), holdTime);
      return () => window.clearTimeout(timeoutRef.current);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
      return;
    }

    const nextChar = deleting
      ? current.substring(0, text.length - 1)
      : current.substring(0, text.length + 1);

    timeoutRef.current = window.setTimeout(
      () => setText(nextChar),
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => window.clearTimeout(timeoutRef.current);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, holdTime]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[1em] ml-1 bg-accent-500 animate-pulse align-middle" />
    </span>
  );
}
