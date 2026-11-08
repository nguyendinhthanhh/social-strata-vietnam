"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SourceBadge } from "./SourceBadge";
import { SceneTransition } from "./motion/MotionPrimitives";
import {
  TrendingUp,
  Layers,
  Scale,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Sparkles,
  ChevronRight,
} from "lucide-react";

interface Scene3LawsProps {
  onOpenSourceModal: (sourceId?: string) => void;
}

export const Scene3Laws: React.FC<Scene3LawsProps> = ({ onOpenSourceModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  const laws = [
    {
      step: 1,
      num: "01",
      title: "Biến đổi gắn liền & bị quy định bởi Cơ cấu Kinh tế",
      badgeText: "Quy luật 1",
      sourceId: "C-18-11",
      icon: TrendingUp,
      headline:
        "Cơ sở kinh tế quyết định cơ cấu giai cấp: Khi nền kinh tế chuyển dịch, cơ cấu giai tầng tất yếu đổi thay.",
      coreLogic: [
        "Trong triết học Mác – Lênin, cơ sở kinh tế luôn đóng vai trò quyết định kiến trúc thượng tầng và cơ cấu xã hội.",
        "Khi phương thức sản xuất biến đổi, cơ cấu kinh tế (bao gồm ngành nghề, các thành phần kinh tế và cơ chế vận hành) chuyển dịch, thì cơ cấu xã hội – giai cấp tất yếu phải chuyển động tương ứng.",
      ],
      practicalVietnam:
        "Tại Việt Nam, quá trình CNH, HĐH và hội nhập quốc tế đã chuyển dịch tỷ trọng kinh tế từ nông nghiệp thuần túy sang công nghiệp chế tạo, logistics và kinh tế số. Kéo theo đó, tỷ lệ lao động nông nghiệp giảm dần, trong khi số lượng công nhân kỹ thuật cao và chuyên gia công nghệ gia tăng nhanh chóng.",
      diagram: {
        from: "Cơ cấu Kinh tế chuyển dịch (Nông nghiệp -> Công nghiệp, Dịch vụ, Số hóa)",
        arrow: "Quy định tất yếu",
        to: "Cơ cấu Giai cấp biến đổi (Giảm tỷ trọng nông dân, tăng công nhân công nghệ & dịch vụ)",
      },
      imageSrc: "/images/worker_sewist.jpg",
      imageAlt: "Nữ công nhân ngành may mặc công nghiệp Việt Nam",
      imageCaption: "Quy luật 01: Sự phát triển của công nghiệp chế tạo và dịch vụ thu hút hàng triệu lao động chuyển dịch từ nông thôn vào giai cấp công nhân.",
    },
    {
      step: 2,
      num: "02",
      title: "Biến đổi phức tạp, đa dạng, làm xuất hiện các Tầng lớp mới",
      badgeText: "Quy luật 2",
      sourceId: "C-18-12",
      icon: Layers,
      headline:
        "Kinh tế thị trường nhiều thành phần giải phóng sức sản xuất và phân hóa phong phú các tầng lớp xã hội.",
      coreLogic: [
        "Sự chuyển đổi từ cơ chế kế hoạch hóa tập trung bao cấp sang nền kinh tế thị trường định hướng XHCN với nhiều hình thức sở hữu (nhà nước, tập thể, tư nhân, FDI) đã phá vỡ tính đơn nhất cũ của xã hội.",
        "Sự phân công lao động xã hội phát triển sâu rộng tạo tiền đề cho sự xuất hiện của những tầng lớp xã hội hoàn toàn mới.",
      ],
      practicalVietnam:
        "Xã hội Việt Nam trở nên năng động hơn với sự ra đời và lớn mạnh của đội ngũ doanh nhân tư nhân, các chủ trang trại nông nghiệp công nghệ cao, chuyên gia tư vấn quản trị độc lập và hàng triệu lao động trong nền kinh tế nền tảng (gig economy). Sự biến đổi này tạo động lực tăng trưởng nhưng cũng đòi hỏi chính sách quản lý công bằng.",
      diagram: {
        from: "Kinh tế thị trường nhiều thành phần (Nhà nước, Tập thể, Tư nhân, Vốn FDI)",
        arrow: "Giải phóng sức sản xuất",
        to: "Xuất hiện & phát triển mạnh: Đội ngũ Doanh nhân, Chuyên gia độc lập, Lao động tự do",
      },
      imageSrc: "/images/portrait_entrepreneur_slide.jpg",
      imageAlt: "Đội ngũ Doanh nhân Việt Nam trong nền kinh tế thị trường",
      imageCaption: "Quy luật 02: Nền kinh tế nhiều thành phần giải phóng sức sản xuất, thúc đẩy sự hình thành và lớn mạnh của đội ngũ doanh nhân hiện đại.",
    },
    {
      step: 3,
      num: "03",
      title: "Vừa đấu tranh vừa liên minh, hướng tới sự Xích lại gần nhau",
      badgeText: "Quy luật 3",
      sourceId: "C-18-13",
      icon: Scale,
      headline:
        "Quy luật biện chứng sâu sắc: Hợp tác vì mục tiêu chung, đồng thời đấu tranh giữ vững định hướng XHCN.",
      coreLogic: [
        "Tính chất liên minh: Các giai cấp nhân dân lao động (công nhân, nông dân, trí thức...) có lợi ích căn bản thống nhất: cùng hướng tới độc lập dân tộc và chủ nghĩa xã hội, giữ vững hòa bình, xây dựng đất nước phồn vinh.",
        "Tính chất đấu tranh: Đấu tranh giữa định hướng XHCN vì lợi ích chung và xu hướng tư bản tư lợi ích kỷ; bài trừ làm ăn phi pháp, trốn thuế, bóc lột quá mức, phá hoại môi trường và âm mưu chia rẽ khối đoàn kết.",
        "Sự xích lại gần nhau: Từng bước xóa mờ ranh giới về tư liệu sản xuất (kinh tế cổ phần, HTX kiểu mới), tính chất lao động ('trí thức hóa' công - nông) và tiếp cận an sinh xã hội công bằng.",
      ],
      practicalVietnam:
        "Dưới sự dẫn dắt của Đảng và Nhà nước, khoảng cách giữa các giai tầng đang dần được thu hẹp thông qua phát triển giáo dục nghề nghiệp, y tế toàn dân và xây dựng nông thôn mới nâng cao.",
      cautionNote:
        "CẢNH BÁO LÝ LUẬN NGHIÊM NGẶT: Luận điểm 'từng bước xóa bỏ bất bình đẳng xã hội dẫn đến sự xích lại gần nhau' là XU THẾ LÝ LUẬN VÀ MỤC TIÊU PHẤN ĐẤU LÂU DÀI, KHÔNG PHẢI HIỆN THỰC ĐÃ HOÀN TẤT. Trong thực tế kinh tế thị trường hiện nay, chênh lệch giàu nghèo và mức sống giữa các vùng miền vẫn tồn tại khách quan; người học tuyệt đối không được suy diễn rằng mọi bất bình đẳng đã được giải quyết xong.",
      diagram: {
        from: "Liên minh hợp tác (Lợi ích chung) + Đấu tranh (Bảo vệ định hướng XHCN)",
        arrow: "Xu thế lịch sử",
        to: "Từng bước xích lại gần nhau về TLSX, tính chất lao động & mức thụ hưởng văn hóa",
      },
      imageSrc: "/images/scene3_transition_slide.jpg",
      imageAlt: "Tư liệu bài giảng MLN131 Tiết 19 Slide 4 về liên minh giai cấp",
      imageCaption: "Quy luật 03: Tư liệu bài giảng Tiết 19 Slide 4 — Các giai tầng liên minh hợp tác vì mục tiêu độc lập dân tộc và CNXH, từng bước xích lại gần nhau.",
    },
  ];

  const currentLaw = laws[activeStep];
  const Icon = currentLaw.icon;

  return (
    <section
      id="scene-03"
      aria-label="Phân cảnh 03: Dòng chảy Biến chuyển"
      className="py-16 sm:py-24 bg-stone-warm/50 text-carbon border-b border-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="border-b border-subtle pb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-vermilion uppercase tracking-kicker">
              Phân cảnh 03 / Không gian Triển lãm
            </span>
            <span className="text-text-muted text-xs font-mono">• Trạm Vận động Biện chứng</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-carbon tracking-tight">
            Dòng chảy Biến chuyển
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-text-muted mt-2 max-w-3xl">
            Ba Quy luật Biến đổi của Cơ cấu Xã hội – Giai cấp trong Thời kỳ Quá độ lên Chủ nghĩa Xã hội ở Việt Nam.
          </p>
        </div>

        {/* Stepper Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="tablist">
          {laws.map((law, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <motion.button
                key={law.num}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                aria-controls={`law-panel-${idx}`}
                onClick={() => setActiveStep(idx)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 text-left rounded-sm border transition-all duration-200 flex flex-col justify-between min-h-[105px] focus:outline-none focus-visible:ring-2 focus-visible:ring-vermilion ${
                  isCurrent
                    ? "bg-carbon text-chalk border-carbon shadow-md"
                    : "bg-white text-carbon border-subtle hover:bg-stone-warm"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded-sm ${
                      isCurrent
                        ? "bg-charcoal-deep text-citron"
                        : "bg-stone-warm text-vermilion"
                    }`}
                  >
                    Quy luật {law.num}
                  </span>
                  <span
                    className={`text-[11px] font-mono ${
                      isCurrent ? "text-light-muted" : "text-text-muted"
                    }`}
                  >
                    Bước {idx + 1}/3
                  </span>
                </div>
                <h3 className="font-display text-sm font-bold mt-2 line-clamp-2">
                  {law.title}
                </h3>
              </motion.button>
            );
          })}
        </div>

        {/* Active Law Content Panel with Smooth Animation */}
        <div
          id={`law-panel-${activeStep}`}
          role="tabpanel"
          className="bg-white border border-subtle rounded-sm shadow-paper-subtle p-6 sm:p-10 space-y-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLaw.step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Header Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-subtle pb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-vermilion px-2.5 py-0.5 bg-stone-warm rounded-sm">
                      {currentLaw.badgeText}
                    </span>
                    <SourceBadge
                      sourceId={currentLaw.sourceId}
                      onClick={onOpenSourceModal}
                    />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-carbon">
                    {currentLaw.title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-sm bg-stone-warm text-vermilion flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              {/* Headline Deck */}
              <div className="p-4 bg-stone-warm/60 border-l-4 border-l-vermilion rounded-sm">
                <p className="font-serif italic text-base sm:text-lg text-carbon font-semibold">
                  &ldquo;{currentLaw.headline}&rdquo;
                </p>
              </div>

              {/* Theoretical Logic vs Vietnam Practical Context */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Theoretical Logic */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-kicker text-text-muted font-bold flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-vermilion" /> Căn cứ lý luận Mác – Lênin
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-carbon font-body">
                    {currentLaw.coreLogic.map((logic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-vermilion font-bold">•</span>
                        <span className="leading-relaxed">{logic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Vietnam Practical Context */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-kicker text-text-muted font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-citron bg-carbon rounded-full p-0.5" /> Biểu hiện thực tiễn tại Việt Nam
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {currentLaw.practicalVietnam}
                  </p>
                </div>
              </div>

              {/* Supporting Photographic Composition */}
              <div className="overflow-hidden rounded-sm border border-subtle bg-carbon shadow-xs">
                <div className="relative aspect-[21/9] sm:aspect-[24/9] overflow-hidden">
                  <img
                    src={currentLaw.imageSrc}
                    alt={currentLaw.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-3 text-[10px] font-mono text-citron bg-black/75 px-2 py-0.5 rounded">
                    Thực tế Biến chuyển
                  </span>
                </div>
                <div className="p-3 bg-stone-warm/90 border-t border-subtle/50 text-xs font-mono text-stone-700 leading-snug">
                  {currentLaw.imageCaption}
                </div>
              </div>

              {/* Conceptual Diagram Flow */}
              <div className="p-4 sm:p-5 bg-chalk rounded-sm border border-subtle space-y-3">
                <span className="font-mono text-xs font-bold uppercase text-text-muted block">
                  Sơ đồ Vận động Quy luật:
                </span>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center text-xs font-mono">
                  <div className="p-3 bg-white border border-subtle rounded-sm w-full sm:w-5/12 text-carbon">
                    {currentLaw.diagram.from}
                  </div>
                  <div className="flex items-center gap-1 text-vermilion font-bold whitespace-nowrap">
                    <span className="hidden sm:inline">———</span>
                    <span>{currentLaw.diagram.arrow}</span>
                    <span>→</span>
                  </div>
                  <div className="p-3 bg-carbon text-citron rounded-sm w-full sm:w-5/12 font-bold shadow-xs">
                    {currentLaw.diagram.to}
                  </div>
                </div>
              </div>

              {/* Strict Academic Caution if Present (Law 3) */}
              {currentLaw.cautionNote && (
                <div className="p-4 bg-vermilion/5 border border-vermilion/30 rounded-sm space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-vermilion uppercase">
                    <AlertTriangle className="w-4 h-4 text-vermilion" />
                    <span>Lưu ý Học thuật Bắt buộc về Xóa bỏ Bất bình đẳng</span>
                  </div>
                  <p className="font-body text-xs text-stone-800 leading-relaxed">
                    {currentLaw.cautionNote}
                  </p>
                </div>
              )}

              {/* Stepper Footer Action */}
              <div className="pt-4 border-t border-subtle flex items-center justify-between">
                <div>
                  {activeStep > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveStep(activeStep - 1)}
                      className="px-3.5 py-1.5 bg-white border border-subtle text-carbon hover:bg-stone-warm rounded-sm text-xs font-mono font-medium transition-colors"
                    >
                      ← Quy luật trước
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-text-muted hidden sm:inline">
                    Bước {activeStep + 1} / 3 Quy luật vận động
                  </span>
                  {activeStep < 2 ? (
                    <button
                      type="button"
                      onClick={() => setActiveStep(activeStep + 1)}
                      className="px-4 py-1.5 bg-carbon text-citron hover:bg-black rounded-sm text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <span>Quy luật tiếp theo</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <a
                      href="#scene-04"
                      className="px-4 py-1.5 bg-vermilion text-white hover:bg-dark-red rounded-sm text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <span>Chuyển sang 6 Lực lượng (Scene 04)</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="pt-6">
          <SceneTransition
            fromNumber="PHÂN CẢNH 03"
            toNumber="PHÂN CẢNH 04"
            label="Từ Ba Quy luật Biến chuyển đến Lát cắt 6 Lực lượng Xã hội"
          />
        </div>
      </div>
    </section>
  );
};
