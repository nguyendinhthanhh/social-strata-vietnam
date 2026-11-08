"use client";

import React from "react";
import { ArrowUp, BookOpen, ShieldCheck } from "lucide-react";

interface FooterProps {
  onOpenSourceModal: (sourceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSourceModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-carbon text-chalk border-t border-subtle/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-charcoal-deep">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-vermilion text-white flex items-center justify-center font-serif font-black text-base">
                VN
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight text-white">
                VIỆT NAM ĐA TẦNG
              </h3>
            </div>
            <p className="font-serif italic text-light-muted text-sm max-w-lg leading-relaxed">
              &quot;Không gian Triển lãm Số Chuyên đề: Cơ cấu Xã hội – Giai cấp và Liên minh Giai cấp trong Thời kỳ Quá độ lên Chủ nghĩa Xã hội ở Việt Nam.&quot;
            </p>
            <div className="space-y-1 text-xs text-text-light-muted font-mono">
              <p>Học phần: Chủ nghĩa xã hội khoa học (MLN131) — Chủ đề 07, Chương V</p>
              <p>Môi trường học thuật: FPT University</p>
              <p>Tiêu chuẩn tương phản: WCAG 2.1 Level AAA / AA Editorial Palette</p>
            </div>
          </div>

          {/* Quick links & references */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-kicker text-citron font-semibold">
              Hệ thống Phân cảnh
            </h4>
            <ul className="space-y-1.5 text-xs text-light-muted">
              <li>
                <a href="#scene-01" className="hover:text-white transition-colors">
                  01. Bức tranh Xã hội Việt Nam
                </a>
              </li>
              <li>
                <a href="#scene-02" className="hover:text-white transition-colors">
                  02. Định nghĩa &amp; Tam giác Quan hệ
                </a>
              </li>
              <li>
                <a href="#scene-03" className="hover:text-white transition-colors">
                  03. Ba Quy luật Biến đổi
                </a>
              </li>
              <li>
                <a href="#scene-04" className="hover:text-white transition-colors">
                  04. Hồ sơ 6 Lực lượng Xã hội
                </a>
              </li>
              <li>
                <a href="#scene-05" className="hover:text-white transition-colors">
                  05. Hạt gạo Liên minh
                </a>
              </li>
              <li>
                <a href="#scene-06" className="hover:text-white transition-colors">
                  06. Đúc kết Nhận thức &amp; Quiz
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Integrity & Tools */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-kicker text-citron font-semibold">
              Kiểm định &amp; Minh bạch
            </h4>
            <div className="space-y-2 text-xs text-light-muted">
              <p className="flex items-start gap-1.5">
                <ShieldCheck className="w-4 h-4 text-citron flex-shrink-0 mt-0.5" />
                <span>100% nội dung đối chiếu chặt chẽ với hệ thống Slide bài giảng chuẩn MLN131 và Văn kiện Đại hội XIII.</span>
              </p>
              <p className="text-[11px] font-mono text-stone-400">
                18 Tác phẩm Phóng sự &amp; Tư liệu Slide giảng dạy có bản quyền xác thực rõ ràng.
              </p>
              <button
                type="button"
                onClick={() => onOpenSourceModal()}
                className="w-full mt-2 py-2 px-3 bg-charcoal-deep hover:bg-stone-800 text-chalk rounded-sm text-xs font-mono font-medium flex items-center justify-center gap-2 border border-subtle/30 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-citron" />
                Tra cứu 33 mã nguồn trích dẫn
              </button>
            </div>
          </div>
        </div>

        {/* Legal & copyright note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-light-muted font-body">
          <p className="text-center sm:text-left">
            © 2026 VIỆT NAM ĐA TẦNG. Triển lãm số học thuật phục vụ mục đích giáo dục phi thương mại theo Luật Sở hữu trí tuệ Việt Nam.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-charcoal-deep hover:bg-stone-800 text-chalk rounded-sm border border-subtle/30 text-xs transition-colors"
            aria-label="Cuộn về đầu trang"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5 text-citron" />
          </button>
        </div>
      </div>
    </footer>
  );
};
