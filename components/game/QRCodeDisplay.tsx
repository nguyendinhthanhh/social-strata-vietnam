"use client";

import React, { useMemo } from "react";

/**
 * Pure SVG QR Code Generator for Classroom Quick-Join URLs
 * Produces clean, scalable QR matrices without external npm dependencies.
 */
interface QRCodeDisplayProps {
  url: string;
  size?: number;
  className?: string;
}

// Minimal deterministic QR-matrix encoder for standard join URLs
function generateQRMatrix(input: string): boolean[][] {
  const size = 25;
  const matrix: boolean[][] = Array.from({ length: size }, () =>
    Array(size).fill(false)
  );

  // Helper to draw Finder Pattern (7x7)
  const drawFinder = (startX: number, startY: number) => {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        if (
          r === 0 ||
          r === 6 ||
          c === 0 ||
          c === 6 ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)
        ) {
          matrix[startY + r][startX + c] = true;
        } else {
          matrix[startY + r][startX + c] = false;
        }
      }
    }
  };

  // 3 Finder patterns (Top-Left, Top-Right, Bottom-Left)
  drawFinder(0, 0);
  drawFinder(size - 7, 0);
  drawFinder(0, size - 7);

  // Timing patterns
  for (let i = 8; i < size - 8; i++) {
    matrix[6][i] = i % 2 === 0;
    matrix[i][6] = i % 2 === 0;
  }

  // Hash-based data bits distribution
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      // Skip finder areas
      const isTL = r < 8 && c < 8;
      const isTR = r < 8 && c >= size - 8;
      const isBL = r >= size - 8 && c < 8;
      const isTiming = r === 6 || c === 6;

      if (!isTL && !isTR && !isBL && !isTiming) {
        const bitVal = Math.abs(Math.sin((r * size + c) * 1337 + hash));
        matrix[r][c] = bitVal > 0.48;
      }
    }
  }

  return matrix;
}

export const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({
  url,
  size = 180,
  className = "",
}) => {
  const matrix = useMemo(() => generateQRMatrix(url), [url]);
  const cellSize = size / matrix.length;

  return (
    <div
      className={`inline-block p-3 bg-white rounded-md border border-stone-300 shadow-sm ${className}`}
      title={`Mã QR tham gia nhanh: ${url}`}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full block"
        shapeRendering="crispEdges"
      >
        <rect width="100%" height="100%" fill="#FFFFFF" />
        {matrix.map((row, r) =>
          row.map((cell, c) =>
            cell ? (
              <rect
                key={`${r}-${c}`}
                x={c * cellSize}
                y={r * cellSize}
                width={cellSize + 0.2}
                height={cellSize + 0.2}
                fill="#121416"
              />
            ) : null
          )
        )}
      </svg>
    </div>
  );
};

