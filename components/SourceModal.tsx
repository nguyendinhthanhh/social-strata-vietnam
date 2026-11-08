"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { SOURCE_CATALOG } from "@/lib/source-data";
import { Search, X, BookOpen, ExternalLink, Filter } from "lucide-react";

interface SourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSourceId?: string | null;
}

export const SourceModal: React.FC<SourceModalProps> = ({
  isOpen,
  onClose,
  initialSourceId,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeSourceId, setActiveSourceId] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (initialSourceId && SOURCE_CATALOG[initialSourceId]) {
        setActiveSourceId(initialSourceId);
      } else {
        setActiveSourceId(Object.keys(SOURCE_CATALOG)[0] || null);
      }
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, initialSourceId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const sourceEntries = useMemo(() => {
    return Object.entries(SOURCE_CATALOG);
  }, []);

  const filteredSources = useMemo(() => {
    return sourceEntries.filter(([id, data]) => {
      const matchesSearch =
        id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.citation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.shortSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.type.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "ALL" ||
        (selectedCategory === "BAI_GIANG" && data.type.includes("BAI_GIANG")) ||
        (selectedCategory === "VAN_KIEN" && data.type.includes("VAN_KIEN")) ||
        (selectedCategory === "MINH_HOA" &&
          (data.type.includes("MINH_HOA") || data.type.includes("DU_LIEU")));

      return matchesSearch && matchesCategory;
    });
  }, [sourceEntries, searchTerm, selectedCategory]);

  const activeSourceData = activeSourceId ? SOURCE_CATALOG[activeSourceId] : null;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-carbon/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="source-modal-title"
    >
      <div
        ref={modalRef}
        className="w-full max-w-4xl max-h-[90vh] bg-chalk border border-subtle rounded-md shadow-elevated flex flex-col overflow-hidden text-carbon"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-subtle bg-stone-warm">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-vermilion" aria-hidden="true" />
            <div>
              <h2
                id="source-modal-title"
                className="font-display text-lg sm:text-xl font-bold text-carbon"
              >
                Từ điển Nguồn Học thuật & Minh họa
              </h2>
              <p className="text-xs sm:text-sm text-text-muted">
                Tra cứu đối chiếu 33 mã nguồn theo hồ sơ kiểm định MLN131
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-text-muted hover:text-carbon rounded-sm hover:bg-chalk transition-colors focus:ring-2 focus:ring-vermilion"
            aria-label="Đóng cửa sổ tra cứu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar */}
        <div className="p-4 border-b border-subtle bg-chalk flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm theo mã nguồn (vd: C-18-05), từ khóa nội dung..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-subtle rounded-sm focus:outline-none focus:border-vermilion"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-text-muted hover:text-carbon"
              >
                Xóa
              </button>
            )}
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <Filter className="w-4 h-4 text-text-muted hidden sm:inline" />
            {[
              { id: "ALL", label: "Tất cả (33)" },
              { id: "BAI_GIANG", label: "Bài giảng MLN131" },
              { id: "VAN_KIEN", label: "Văn kiện & Luật" },
              { id: "MINH_HOA", label: "Minh họa & Dữ liệu" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 text-xs whitespace-nowrap rounded-sm border transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-carbon text-chalk border-carbon font-semibold"
                    : "bg-white text-text-muted border-subtle hover:bg-stone-warm"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Body: Split layout */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[350px]">
          {/* Source List Column */}
          <div className="md:col-span-5 border-r border-subtle overflow-y-auto max-h-[300px] md:max-h-[55vh] divide-y divide-subtle bg-stone-warm/30">
            {filteredSources.length === 0 ? (
              <div className="p-6 text-center text-text-muted text-sm">
                Không tìm thấy nguồn phù hợp với từ khóa &quot;{searchTerm}&quot;.
              </div>
            ) : (
              filteredSources.map(([id, item]) => {
                const isActive = activeSourceId === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveSourceId(id)}
                    className={`w-full text-left p-3 transition-colors flex flex-col gap-1 ${
                      isActive
                        ? "bg-chalk border-l-4 border-l-vermilion"
                        : "hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-vermilion">
                        [{id}]
                      </span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm ${
                          item.type.includes("BAI_GIANG")
                            ? "bg-stone-200 text-carbon"
                            : item.type.includes("VAN_KIEN")
                            ? "bg-amber-100 text-amber-900"
                            : "bg-emerald-100 text-emerald-900"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-carbon line-clamp-1">
                      {item.citation}
                    </p>
                    <p className="text-[11px] text-text-muted line-clamp-2">
                      {item.shortSummary}
                    </p>
                  </button>
                );
              })
            )}
          </div>

          {/* Active Detail Column */}
          <div className="md:col-span-7 p-4 sm:p-6 overflow-y-auto max-h-[300px] md:max-h-[55vh] bg-chalk">
            {activeSourceData && activeSourceId ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-base font-bold text-vermilion px-2.5 py-1 bg-stone-warm rounded-sm border border-subtle">
                    [{activeSourceId}]
                  </span>
                  <span className="text-xs font-mono px-2 py-1 bg-stone-warm text-carbon rounded-sm border border-subtle font-semibold">
                    Phân loại: {activeSourceData.type}
                  </span>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                    Trích dẫn học thuật chính thức
                  </h3>
                  <p className="text-base font-serif font-bold text-carbon">
                    {activeSourceData.citation}
                  </p>
                </div>

                <div className="p-3.5 bg-white border border-subtle rounded-sm">
                  <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                    Tóm lược nội dung kiểm định
                  </h3>
                  <p className="text-sm leading-relaxed text-carbon font-body">
                    {activeSourceData.shortSummary}
                  </p>
                </div>

                <div className="text-xs text-text-muted space-y-1.5 pt-2 border-t border-subtle">
                  <p>
                    <strong>Căn cứ lưu trữ:</strong> docs/SOURCE_LEDGER.md &amp; content/SOURCE_MAP.json
                  </p>
                  <p>
                    <strong>Nguyên tắc trích dẫn:</strong> Tuân thủ cam kết học thuật FPT University MLN131. Không trích dẫn võ đoán, mọi số liệu chính sách đều đối chiếu slide bài giảng và văn kiện chính thức.
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-text-muted text-sm">
                Chọn một nguồn từ danh sách bên trái để xem trích dẫn chi tiết.
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-subtle bg-stone-warm flex items-center justify-between text-xs text-text-muted">
          <span>Tổng số: {sourceEntries.length} nguồn tài liệu kiểm định</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-carbon text-chalk font-medium rounded-sm hover:bg-charcoal-deep transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
