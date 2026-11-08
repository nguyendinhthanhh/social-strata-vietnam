"use client";

import React from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";
import { SourceBadge } from "./SourceBadge";
import { SceneTransition } from "./motion/MotionPrimitives";
import {
  ArrowDown,
  Layers,
  BookMarked,
  Sparkles,
  Compass,
  ChevronDown,
  ExternalLink,
  Camera,
  MapPin,
} from "lucide-react";

interface Scene1HeroProps {
  onOpenSourceModal: (sourceId?: string) => void;
}

export const Scene1Hero: React.FC<Scene1HeroProps> = ({ onOpenSourceModal }) => {
  const shouldReduce = useReducedMotion();

  const stations = [
    { num: "01", title: "Bức tranh Xã hội", href: "#scene-01", desc: "Định vị tri thức & ánh nhìn đa chiều" },
    { num: "02", title: "Giải mã Tọa độ", href: "#scene-02", desc: "Tam giác 3 quan hệ cấu thành CCXH-GC" },
    { num: "03", title: "Dòng chảy Biến chuyển", href: "#scene-03", desc: "Ba quy luật vận động trong TKQĐ" },
    { num: "04", title: "Lát cắt Đương đại", href: "#scene-04", desc: "Hồ sơ 6 lực lượng xã hội tiêu biểu" },
    { num: "05", title: "Hạt gạo Liên minh", href: "#scene-05", desc: "Mô hình sư phạm chuỗi giá trị nông sản" },
    { num: "06", title: "Đúc kết & Thử thách", href: "#scene-06", desc: "3 kết luận & trắc nghiệm 5 câu tương tác" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="scene-01"
      aria-label="Phân cảnh 01: Bức tranh Xã hội Việt Nam"
      className="relative bg-carbon text-chalk pt-20 pb-16 md:pt-28 md:pb-28 overflow-hidden border-b border-charcoal-deep"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-25"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 w-full h-full stroke-white/[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" strokeWidth="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vermilion/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12 md:space-y-16"
        >
          {/* Top Meta Bar */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="font-mono text-xs font-semibold tracking-kicker uppercase px-2.5 py-1 bg-charcoal-deep text-citron rounded-sm border border-subtle/20 flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-citron animate-pulse" />
                MLN131 / CHỦ ĐỀ 07 / CHƯƠNG V
              </span>
              <span className="text-xs font-mono text-light-muted flex items-center gap-1.5 bg-charcoal-deep/60 px-2 py-1 rounded-sm border border-white/5">
                <Layers className="w-3.5 h-3.5 text-citron" /> Không gian Triển lãm Số Chuyên đề
              </span>
            </div>
            <div className="text-[11px] font-mono text-stone-400 hidden sm:flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-vermilion" />
              <span>Cơ cấu Xã hội – Giai cấp & Liên minh Thời kỳ Quá độ</span>
            </div>
          </motion.div>

          {/* Hero Main Grid: Typography Left + 3-Layer Photographic Collage Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Editorial Display Typography & Guiding Inquiry */}
            <motion.div variants={itemVariants} className="lg:col-span-6 xl:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-vermilion uppercase tracking-widest block">
                  TRIỂN LÃM TRỰC QUAN
                </span>
                <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tight leading-[1.04] text-white">
                  VIỆT NAM <br />
                  <span className="text-citron italic font-serif relative inline-block">
                    ĐA TẦNG
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-citron via-citron/80 to-transparent rounded-full"
                    />
                  </span>
                </h1>
              </div>

              {/* Subtitle / Editorial Deck */}
              <p className="font-serif italic text-base sm:text-lg md:text-xl text-stone-300 leading-relaxed border-l-2 border-vermilion pl-4 sm:pl-5">
                Mỗi con người mang một vị trí. Mỗi lực lượng nắm giữ một vai trò. Nhưng diện mạo của một quốc gia không được định hình bởi những mảnh ghép rời rạc, mà bởi những mối liên hệ kinh tế, chính trị và xã hội đan bện sâu sắc giữa các giai tầng trong dòng chảy thời đại.
              </p>

              {/* Guiding Inquiry Box with Distinct Visual Polish */}
              <div className="p-4 sm:p-5 bg-charcoal-deep border-l-4 border-l-citron border-y border-r border-subtle/25 rounded-sm shadow-paper-subtle relative overflow-hidden group">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold uppercase text-citron">
                  <BookMarked className="w-4 h-4" />
                  <span>Câu hỏi Định hướng (Guiding Inquiry)</span>
                </div>
                <blockquote className="font-display italic text-sm sm:text-base text-chalk leading-snug">
                  &ldquo;Nếu xã hội không đơn thuần là bảng danh mục nghề nghiệp hay tập hợp số đông dân cư, điều gì thực sự quyết định vị thế, mối liên kết và vận mệnh của các giai cấp trong thời kỳ quá độ?&rdquo;
                </blockquote>
              </div>
            </motion.div>

            {/* Right Column: 3-Layer Documentary Photographic Collage */}
            <motion.div variants={itemVariants} className="lg:col-span-6 xl:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] max-w-xl mx-auto">
                {/* Layer 1: Background Panorama (Skyline) */}
                <motion.div
                  initial={shouldReduce ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute inset-0 rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-charcoal-deep"
                >
                  <img
                    src="/images/hero_skyline.jpg"
                    alt="Toàn cảnh đô thị hiện đại TP. Hồ Chí Minh"
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/30 to-transparent pointer-events-none" />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-black/75 backdrop-blur-xs text-[10px] font-mono text-chalk border border-white/10 rounded">
                    Không gian kinh tế đô thị hiện đại
                  </div>
                </motion.div>

                {/* Layer 2: Overlapping Midground (Industrial Workers) */}
                <motion.div
                  initial={shouldReduce ? { opacity: 1 } : { opacity: 0, x: 20, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 w-3/5 aspect-[4/3] rounded-sm overflow-hidden border-2 border-carbon shadow-2xl bg-carbon"
                >
                  <img
                    src="/images/factory_workers.jpg"
                    alt="Công nhân và kỹ sư công nghiệp trong dây chuyền sản xuất"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-citron font-semibold truncate">
                    Giai cấp Công nhân • Tiên phong CNH
                  </div>
                </motion.div>

                {/* Layer 3: Accent Foreground Vignette (Rice Harvest / Agriculture) */}
                <motion.div
                  initial={shouldReduce ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="absolute -top-4 -right-3 sm:-top-6 sm:-right-4 w-2/5 aspect-video rounded-sm overflow-hidden border-2 border-carbon shadow-2xl bg-carbon"
                >
                  <img
                    src="/images/rice_harvest.jpg"
                    alt="Nông dân thu hoạch lúa mùa"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-1.5 left-1.5 text-[9px] font-mono text-chalk font-semibold truncate">
                    Nông dân & Nông nghiệp
                  </div>
                </motion.div>
              </div>

              {/* Documentary Caption Attribution */}
              <div className="mt-10 sm:mt-12 text-center lg:text-right">
                <span className="text-[11px] font-mono text-light-muted inline-flex items-center gap-1.5">
                  <Camera className="w-3 h-3 text-citron" />
                  <span>Ảnh tư liệu: Đô thị, Nhà máy công nghiệp & Thu hoạch nông nghiệp (Wikimedia Commons CC)</span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* Curatorial Prologue: Academic Narrative */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-10 border-t border-charcoal-deep"
          >
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-kicker text-citron font-semibold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" /> Lời Mở dẫn (Curatorial Prologue)
              </span>
              <p className="font-serif text-sm text-light-muted mt-2">
                Khởi đầu từ ánh nhìn đa chiều về một cấu trúc đang vận động không ngừng trong lòng đất nước.
              </p>
            </div>
            <div className="md:col-span-8 space-y-4 font-body text-sm sm:text-base text-stone-200 leading-relaxed">
              <p>
                Mỗi sớm mai trên dải đất hình chữ S, nhịp sống cất lên từ hàng triệu thanh âm: tiếng máy dập gầm vang nơi khu công nghiệp ven biển, tiếng chân bước trên những thửa ruộng phù sa Tây Nam Bộ, tiếng gõ phím miệt mài trong các phòng lab công nghệ cao, tiếng trao đổi của giới kinh doanh kết nối các chuyến hàng vượt đại dương, và tiếng chuông giảng đường nơi thế hệ trẻ tích lũy tri thức.
              </p>
              <p>
                Trong góc nhìn thông thường, người ta dễ hình dung xã hội như một đám đông ngẫu nhiên được phân tách bởi thu nhập hay tên gọi ghi trên bảng hiệu doanh nghiệp. Nhưng với lăng kính của <strong className="text-white">Chủ nghĩa xã hội khoa học</strong>, đằng sau muôn vàn sinh kế đời thường ấy là một <strong className="text-white">hệ thống cơ cấu xã hội – giai cấp khách quan</strong>{" "}
                <SourceBadge sourceId="C-18-05" onClick={onOpenSourceModal} inline />, vận động theo những quy luật nội tại gắn liền với sự biến đổi của nền kinh tế thị trường định hướng xã hội chủ nghĩa{" "}
                <SourceBadge sourceId="C-18-11" onClick={onOpenSourceModal} inline />{" "}
                <SourceBadge sourceId="C-20-03" onClick={onOpenSourceModal} inline />.
              </p>
              <p>
                Không gian triển lãm số này là một hành trình thị giác và tư duy: đi từ những khái niệm cốt lõi đến những lát cắt đời sống chân thực, để thấu suốt vì sao sự nghiệp xây dựng một nước Việt Nam độc lập, dân giàu, nước mạnh, dân chủ, công bằng, văn minh lại đòi hỏi sức mạnh cộng hưởng bền chặt của toàn thể các giai cấp, tầng lớp nhân dân lao động dưới sự lãnh đạo của Đảng Cộng sản{" "}
                <SourceBadge sourceId="C-19-05" onClick={onOpenSourceModal} inline />{" "}
                <SourceBadge sourceId="C-19-08" onClick={onOpenSourceModal} inline />.
              </p>
            </div>
          </motion.div>

          {/* 6 Exhibition Stations Nav Cards with Rich Hover Interactions */}
          <motion.div variants={itemVariants} className="pt-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-citron rounded-full" />
                <span className="font-mono text-xs uppercase tracking-kicker text-citron font-semibold">
                  Mục lục Phân cảnh (Exhibition Stations)
                </span>
              </div>
              <span className="text-xs font-mono text-light-muted">
                6 Trạm dừng tri thức
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stations.map((station) => (
                <motion.a
                  key={station.num}
                  href={station.href}
                  whileHover={shouldReduce ? {} : { y: -4, borderColor: "rgba(200, 214, 104, 0.6)" }}
                  whileTap={shouldReduce ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="group p-5 bg-charcoal-deep border border-subtle/30 rounded-sm hover:bg-stone-900 transition-colors shadow-paper-subtle flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-citron"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-citron bg-carbon px-2 py-0.5 rounded border border-white/5">
                        Trạm {station.num}
                      </span>
                      <ChevronDown className="w-4 h-4 text-stone-500 group-hover:text-citron -rotate-90 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-citron transition-colors">
                      {station.title}
                    </h3>
                    <p className="font-body text-xs text-light-muted mt-2 leading-relaxed">
                      {station.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-stone-400 group-hover:text-white transition-colors">
                    <span>Khám phá trạm</span>
                    <span className="text-citron font-bold">→</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Cinematic Scroll Cue */}
          <motion.div
            variants={itemVariants}
            className="pt-6 flex flex-col items-center justify-center text-center"
          >
            <a
              href="#scene-02"
              className="inline-flex flex-col items-center gap-2 group text-light-muted hover:text-citron transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-citron rounded-sm p-2"
              aria-label="Cuộn xuống để bắt đầu phân cảnh 02: Giải mã Tọa độ Xã hội"
            >
              <span className="font-mono text-xs tracking-wider uppercase text-citron font-semibold">
                Bắt đầu hành trình khám phá
              </span>
              <motion.div
                animate={shouldReduce ? {} : { y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="w-8 h-8 rounded-full border border-subtle/40 bg-charcoal-deep flex items-center justify-center group-hover:border-citron transition-colors"
              >
                <ArrowDown className="w-4 h-4 text-citron" />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-12">
        <SceneTransition fromNumber="PHÂN CẢNH 01" toNumber="PHÂN CẢNH 02" label="Từ Hiện thực Đa tầng đến Tọa độ Lý luận" />
      </div>
    </section>
  );
};
