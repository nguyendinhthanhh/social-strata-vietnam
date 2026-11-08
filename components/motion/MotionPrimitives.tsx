"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { getVietnameseWords, getVietnameseLines, normalizeVietnamese } from "@/lib/textUtils";

/**
 * 1. WordReveal: Unicode-aware word-by-word reveal that preserves Vietnamese diacritics
 */
export const WordReveal: React.FC<{
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}> = ({ text, className = "", wordClassName = "", delay = 0 }) => {
  const shouldReduce = useReducedMotion();
  const words = getVietnameseWords(text);

  if (shouldReduce) {
    return <span className={className}>{normalizeVietnamese(text)}</span>;
  }

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.04,
            delayChildren: delay,
          },
        },
      }}
      className={`inline-flex flex-wrap gap-x-[0.28em] gap-y-1 ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className={`inline-block whitespace-nowrap ${wordClassName}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

/**
 * 2. LineReveal: Line-by-line editorial reveal for paragraphs
 */
export const LineReveal: React.FC<{
  text: string;
  className?: string;
  lineClassName?: string;
  delay?: number;
}> = ({ text, className = "", lineClassName = "", delay = 0 }) => {
  const shouldReduce = useReducedMotion();
  const lines = getVietnameseLines(text);

  if (shouldReduce) {
    return <span className={className}>{normalizeVietnamese(text)}</span>;
  }

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
      className={`block space-y-1.5 ${className}`}
    >
      {lines.map((line, i) => (
        <motion.span
          key={`${line}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className={`block ${lineClassName}`}
        >
          {line}
        </motion.span>
      ))}
    </motion.span>
  );
};

/**
 * 1. RevealText: Reveals lines or words with deliberate editorial pacing
 */
interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const RevealText: React.FC<RevealTextProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
}) => {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  );
};

/**
 * 2. StaggeredReveal: Staggers child items on viewport entry
 */
interface StaggeredRevealProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export const StaggeredReveal: React.FC<StaggeredRevealProps> = ({
  children,
  staggerDelay = 0.12,
  className = "",
}) => {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * 3. ImageReveal: Editorial documentary photo reveal with subtle zoom & shadow
 */
interface ImageRevealProps {
  src: string;
  alt: string;
  caption?: string;
  author?: string;
  license?: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  caption,
  author,
  license,
  className = "",
  aspectRatio = "aspect-video",
  priority = false,
}) => {
  const shouldReduce = useReducedMotion();

  return (
    <figure className={`group overflow-hidden rounded-sm border border-subtle bg-carbon ${className}`}>
      <div className={`relative overflow-hidden ${aspectRatio}`}>
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          initial={shouldReduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full object-cover grayscale-[15%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-carbon/60 via-transparent to-transparent opacity-80" />
      </div>

      {(caption || author) && (
        <figcaption className="p-3 bg-stone-warm/80 border-t border-subtle/40 text-[11px] sm:text-xs font-mono text-stone-600 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 leading-snug">
          {caption && <span className="font-body text-stone-700 italic">{caption}</span>}
          {author && (
            <span className="text-[10px] uppercase tracking-wider text-text-muted shrink-0">
              [Tư liệu: {author} • {license || "Bản quyền xác thực"}]
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
};

/**
 * 4. AnimatedSection: Wraps a scene or major subsection
 */
interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = "",
}) => {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

/**
 * 5. InteractiveNode: Interactive button/node with physical spring feedback
 */
interface InteractiveNodeProps {
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const InteractiveNode: React.FC<InteractiveNodeProps> = ({
  children,
  onClick,
  isActive = false,
  className = "",
  ariaLabel,
}) => {
  const shouldReduce = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={shouldReduce ? {} : { scale: 1.03, y: -1 }}
      whileTap={shouldReduce ? {} : { scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={`${className} ${isActive ? "ring-2 ring-vermilion shadow-md" : ""}`}
    >
      {children}
    </motion.button>
  );
};

/**
 * 6. SceneTransition: Curatorial separator between scenes
 */
interface SceneTransitionProps {
  fromNumber: string;
  toNumber: string;
  label?: string;
}

export const SceneTransition: React.FC<SceneTransitionProps> = ({
  fromNumber,
  toNumber,
  label = "Chuyển tiếp phân cảnh trưng bày",
}) => {
  return (
    <div className="py-12 flex items-center justify-center gap-4 text-xs font-mono text-text-muted">
      <span className="w-12 h-px bg-subtle" />
      <span className="uppercase tracking-widest text-[10px] text-vermilion font-bold">
        {fromNumber} → {toNumber}
      </span>
      <span className="italic font-serif text-stone-500">{label}</span>
      <span className="w-12 h-px bg-subtle" />
    </div>
  );
};

