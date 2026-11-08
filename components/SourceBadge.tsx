"use client";

import React from "react";
import { SOURCE_CATALOG } from "@/lib/source-data";

interface SourceBadgeProps {
  sourceId: string;
  onClick?: (sourceId: string) => void;
  className?: string;
  inline?: boolean;
}

export const SourceBadge: React.FC<SourceBadgeProps> = ({
  sourceId,
  onClick,
  className = "",
  inline = false,
}) => {
  const source = SOURCE_CATALOG[sourceId];
  const typeTag = source?.type || "[NGUON]";

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick(sourceId);
    }
  };

  const badgeContent = (
    <span
      className={`font-mono text-xs font-semibold px-2 py-0.5 rounded-sm transition-all duration-180 border ${
        typeTag.includes("BAI_GIANG")
          ? "bg-stone-warm text-dark-red border-border-subtle hover:bg-stone-200"
          : typeTag.includes("VAN_KIEN")
          ? "bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100"
          : "bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200"
      } ${className}`}
      title={source ? `${source.citation}: ${source.shortSummary}` : sourceId}
    >
      [{sourceId}]
    </span>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`inline-flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-vermilion rounded-sm ${
          inline ? "mx-1 align-baseline" : ""
        }`}
        aria-label={`Xem trích dẫn nguồn ${sourceId}`}
      >
        {badgeContent}
      </button>
    );
  }

  return inline ? <span className="mx-1 inline-block">{badgeContent}</span> : badgeContent;
};
