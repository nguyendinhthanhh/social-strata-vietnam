"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SOCIAL_PROFILES } from "@/lib/profiles-data";
import { SourceBadge } from "./SourceBadge";
import { SceneTransition } from "./motion/MotionPrimitives";
import {
  Users,
  Compass,
  Award,
  Sparkles,
  Info,
  ShieldAlert,
  ChevronRight,
  Briefcase,
  Flame,
  GraduationCap,
  Store,
  HeartHandshake,
  CheckCircle2,
  Bookmark,
  Layers,
  Camera,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { RoleMatchingGame } from "./game/RoleMatchingGame";

interface Scene4ProfilesProps {
  onOpenSourceModal: (sourceId?: string) => void;
}

const PROFILE_IMAGES: Record<string, { src: string; caption: string; slide: string }> = {
  "cong-nhan": {
    src: "/images/portrait_worker_slide.jpg",
    caption: "Giai cấp công nhân Việt Nam: Tiên phong trong sự nghiệp công nghiệp hóa, hiện đại hóa và hội nhập quốc tế.",
    slide: "MLN131 Tiết 20 Slide 5",
  },
  "nong-dan": {
    src: "/images/portrait_farmer_slide.jpg",
    caption: "Giai cấp nông dân: Có vị trí chiến lược, chủ thể của quá trình phát triển nông nghiệp và xây dựng nông thôn mới.",
    slide: "MLN131 Tiết 20 Slide 6",
  },
  "tri-thuc": {
    src: "/images/portrait_intellectual_slide.jpg",
    caption: "Đội ngũ trí thức: Lực lượng lao động sáng tạo đặc biệt quan trọng, dẫn dắt đổi mới sáng tạo và chuyển giao công nghệ.",
    slide: "MLN131 Tiết 20 Slide 7",
  },
  "doanh-nhan": {
    src: "/images/portrait_entrepreneur_slide.jpg",
    caption: "Đội ngũ doanh nhân: Tầng lớp xã hội đặc biệt, động lực quan trọng phát triển kinh tế thị trường định hướng XHCN.",
    slide: "MLN131 Tiết 20 Slide 8",
  },
  "phu-nu": {
    src: "/images/portrait_women_slide.jpg",
    caption: "Phụ nữ Việt Nam: Nhóm xã hội phân loại theo giới tính, lực lượng đông đảo giao thoa trong mọi giai cấp.",
    slide: "MLN131 Tiết 20 Slide 9",
  },
  "thanh-nien": {
    src: "/images/portrait_youth_slide.jpg",
    caption: "Đội ngũ thanh niên: Rường cột của nước nhà, lực lượng xung kích giao thoa theo độ tuổi (16–30 tuổi theo Luật Thanh niên 2020).",
    slide: "MLN131 Tiết 20 Slide 10",
  },
};

export const Scene4Profiles: React.FC<Scene4ProfilesProps> = ({
  onOpenSourceModal,
}) => {
  const shouldReduce = useReducedMotion();
  const [activeProfileId, setActiveProfileId] = useState("cong-nhan");
  const [filterMode, setFilterMode] = useState<"all" | "classes" | "demographics">("all");
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);
  const [isMatchingGameOpen, setIsMatchingGameOpen] = useState(false);

  const filteredProfiles = SOCIAL_PROFILES.filter((p) => {
    if (filterMode === "classes") {
      return p.id !== "phu-nu" && p.id !== "thanh-nien";
    }
    if (filterMode === "demographics") {
      return p.id === "phu-nu" || p.id === "thanh-nien";
    }
    return true;
  });

  const activeProfile =
    SOCIAL_PROFILES.find((p) => p.id === activeProfileId) || SOCIAL_PROFILES[0];
  const activeImageData = PROFILE_IMAGES[activeProfile.id] || PROFILE_IMAGES["cong-nhan"];

  const getProfileIcon = (id: string) => {
    switch (id) {
      case "cong-nhan":
        return Briefcase;
      case "nong-dan":
        return HeartHandshake;
      case "tri-thuc":
        return GraduationCap;
      case "doanh-nhan":
        return Store;
      case "phu-nu":
        return Sparkles;
      case "thanh-nien":
        return Flame;
      default:
        return Users;
    }
  };

  const getForceBadgeColor = (id: string) => {
    switch (id) {
      case "cong-nhan":
        return "bg-vermilion text-white";
      case "nong-dan":
        return "bg-amber-700 text-white";
      case "tri-thuc":
        return "bg-sky-800 text-white";
      case "doanh-nhan":
        return "bg-emerald-800 text-white";
      case "phu-nu":
        return "bg-rose-700 text-white";
      case "thanh-nien":
        return "bg-orange-600 text-white";
      default:
        return "bg-carbon text-chalk";
    }
  };

  return (
    <section
      id="scene-04"
      aria-label="Phân cảnh 04: Lát cắt Đương đại"
      className="py-16 sm:py-24 bg-chalk text-carbon border-b border-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="border-b border-subtle pb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-vermilion uppercase tracking-kicker">
              Phân cảnh 04 / Không gian Triển lãm
            </span>
            <span className="text-text-muted text-xs font-mono">• Hồ sơ Nhân vật &amp; Giai tầng</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-carbon tracking-tight">
            Lát cắt Đương đại
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-text-muted mt-2 max-w-3xl">
            Hồ sơ 6 Lực lượng Xã hội Tiêu biểu trong Cơ cấu Xã hội Việt Nam — Phân tích Vị trí, Vai trò và Đóng góp theo Văn kiện Đại hội XIII.
          </p>
        </div>

        {/* Academic Demographics Banner with Visual Polish */}
        <div className="p-5 sm:p-6 bg-stone-warm border-l-4 border-l-vermilion border-y border-r border-subtle rounded-sm shadow-paper-subtle space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-vermilion">
            <Info className="w-4 h-4 text-vermilion flex-shrink-0" />
            <span>Phân định Bản chất Lý luận cốt lõi: 2 Nhóm Nhân khẩu học Giao thoa</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs sm:text-sm text-carbon">
            <div className="md:col-span-8 space-y-2">
              <p className="leading-relaxed">
                Trong cơ cấu xã hội Việt Nam, <strong>Phụ nữ</strong> (phân loại theo giới tính) và <strong>Thanh niên</strong> (từ 16 đến 30 tuổi theo Luật Thanh niên 2020){" "}
                <strong>KHÔNG PHẢI là những giai cấp kinh tế độc lập</strong>. Họ là những nhóm nhân khẩu học xã hội hiện diện giao thoa xuyên suốt trong lòng giai cấp công nhân, giai cấp nông dân, đội ngũ trí thức và đội ngũ doanh nhân{" "}
                <SourceBadge sourceId="C-20-09" onClick={onOpenSourceModal} inline />{" "}
                <SourceBadge sourceId="C-20-10" onClick={onOpenSourceModal} inline />{" "}
                <SourceBadge sourceId="C-LTN-2020" onClick={onOpenSourceModal} inline />.
              </p>
            </div>
            <div className="md:col-span-4 p-3 bg-white rounded-sm border border-subtle flex flex-col justify-center text-xs">
              <span className="font-mono text-text-muted font-semibold block mb-1">
                Nguyên tắc phân tầng lý luận:
              </span>
              <p className="italic text-text-muted">
                Giai cấp kinh tế được xác định theo quan hệ với TLSX; nhóm nhân khẩu học xác định theo giới tính và độ tuổi sinh học – xã hội.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-1.5 p-1 bg-stone-warm rounded-sm border border-subtle text-xs font-mono">
            <button
              type="button"
              onClick={() => setFilterMode("all")}
              className={`px-3 py-1.5 rounded-sm transition-colors ${
                filterMode === "all"
                  ? "bg-carbon text-citron font-bold shadow-xs"
                  : "text-text-muted hover:text-carbon"
              }`}
            >
              Tất cả 6 Lực lượng (6)
            </button>
            <button
              type="button"
              onClick={() => setFilterMode("classes")}
              className={`px-3 py-1.5 rounded-sm transition-colors ${
                filterMode === "classes"
                  ? "bg-carbon text-citron font-bold shadow-xs"
                  : "text-text-muted hover:text-carbon"
              }`}
            >
              4 Giai cấp &amp; Tầng lớp (4)
            </button>
            <button
              type="button"
              onClick={() => setFilterMode("demographics")}
              className={`px-3 py-1.5 rounded-sm transition-colors ${
                filterMode === "demographics"
                  ? "bg-carbon text-citron font-bold shadow-xs"
                  : "text-text-muted hover:text-carbon"
              }`}
            >
              2 Nhóm Giao thoa (2)
            </button>
          </div>

          <span className="text-xs font-mono text-text-muted hidden sm:inline">
            Đang hiển thị {filteredProfiles.length} / 6 lực lượng
          </span>
        </div>

        {/* 6 Portrait-Led Cards Grid / Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {filteredProfiles.map((p) => {
            const isSelected = activeProfileId === p.id;
            const Icon = getProfileIcon(p.id);
            const badgeColor = getForceBadgeColor(p.id);
            const isDemographic = p.id === "phu-nu" || p.id === "thanh-nien";
            const imgData = PROFILE_IMAGES[p.id];

            return (
              <motion.button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls="profile-dossier-panel"
                onClick={() => setActiveProfileId(p.id)}
                whileHover={shouldReduce ? {} : { y: -3 }}
                whileTap={shouldReduce ? {} : { scale: 0.97 }}
                className={`group rounded-sm border text-left transition-all overflow-hidden relative flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-vermilion ${
                  isSelected
                    ? "bg-white border-carbon ring-2 ring-carbon shadow-lg"
                    : "bg-white/80 border-subtle hover:border-carbon/50 hover:bg-white shadow-paper-subtle"
                }`}
              >
                {/* Active Indicator Top Tag */}
                {isSelected && (
                  <span className="absolute top-2 left-2 z-10 px-1.5 py-0.5 bg-carbon text-citron text-[9px] font-mono font-bold uppercase rounded shadow-xs">
                    Đang xem
                  </span>
                )}

                {/* Card Thumbnail Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-warm">
                  <img
                    src={imgData?.src || "/images/portrait_worker_slide.jpg"}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-transparent to-transparent" />
                  <span
                    className={`absolute bottom-2 right-2 w-6 h-6 rounded-sm flex items-center justify-center ${badgeColor}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-3 space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                    <span className="font-bold">#{p.number}</span>
                    <span
                      className={`text-[9px] px-1 py-0.2 rounded font-mono ${
                        isDemographic
                          ? "bg-vermilion/10 text-vermilion font-semibold"
                          : "bg-stone-warm text-stone-600"
                      }`}
                    >
                      {isDemographic ? "Giao thoa" : "Giai tầng"}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xs sm:text-sm text-carbon leading-snug truncate">
                    {p.name}
                  </h3>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Detailed Portrait Dossier Area: Asymmetric Editorial Magazine Spread */}
        <div
          id="profile-dossier-panel"
          role="tabpanel"
          aria-label={`Hồ sơ chi tiết: ${activeProfile.name}`}
          className="bg-white border border-subtle rounded-sm shadow-paper-subtle p-6 sm:p-8 lg:p-10 space-y-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProfile.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Profile Header Spread: Photo on Left, Title & Badges on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-subtle pb-8">
                {/* Left: Authentic Documentary Photo Panel */}
                <div className="lg:col-span-5">
                  <figure className="overflow-hidden rounded-sm border border-subtle bg-carbon shadow-md">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={activeImageData.src}
                        alt={activeProfile.name}
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-carbon/75 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-citron bg-black/75 px-2 py-0.5 rounded">
                        Tư liệu hình ảnh: {activeImageData.slide}
                      </div>
                    </div>
                    <figcaption className="p-3 bg-stone-warm/90 border-t border-subtle/50 text-xs font-mono text-stone-700 leading-snug">
                      {activeImageData.caption}
                    </figcaption>
                  </figure>
                </div>

                {/* Right: Editorial Identification & Sources */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-carbon text-citron rounded-sm">
                        LỰC LƯỢNG {activeProfile.number}
                      </span>
                      <span className="font-mono text-xs text-text-muted">
                        {activeProfile.category}
                      </span>
                      {activeProfile.id === "phu-nu" && (
                        <span className="font-mono text-xs text-vermilion bg-vermilion/10 px-2 py-0.5 rounded-sm font-semibold">
                          Giao thoa theo Giới tính
                        </span>
                      )}
                      {activeProfile.id === "thanh-nien" && (
                        <span className="font-mono text-xs text-orange-700 bg-orange-100 px-2 py-0.5 rounded-sm font-semibold">
                          Giao thoa theo Lứa tuổi (16–30)
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {activeProfile.sourceIds.map((sid) => (
                        <SourceBadge
                          key={sid}
                          sourceId={sid}
                          onClick={onOpenSourceModal}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-carbon tracking-tight">
                    {activeProfile.name}
                  </h3>

                  <p className="font-body italic font-medium text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed border-l-2 border-vermilion pl-4">
                    &ldquo;{activeProfile.subtitle}&rdquo;
                  </p>

                  <div className="p-4 bg-stone-warm/70 border border-subtle rounded-sm space-y-1.5">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-carbon">
                      <Bookmark className="w-4 h-4 text-vermilion" />
                      <span>Ví dụ Thực tiễn Sinh động trong Thời kỳ Đổi mới:</span>
                    </div>
                    <p className="font-body text-xs sm:text-sm text-stone-800 leading-relaxed italic">
                      &ldquo;{activeProfile.example}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Core Editorial Columns: Vị trí - Vai trò - Đóng góp */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. VỊ TRÍ (POSITION) */}
                <div className="p-5 bg-chalk rounded-sm border border-subtle space-y-3 flex flex-col justify-between shadow-xs">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-vermilion uppercase border-b border-subtle pb-2">
                      <span className="w-5 h-5 rounded-full bg-vermilion text-white flex items-center justify-center text-[10px]">
                        1
                      </span>
                      <span>Vị trí (Position)</span>
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-carbon">
                      {activeProfile.position.map((pos, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-vermilion font-bold mt-0.5">•</span>
                          <span>{pos}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-subtle text-[11px] font-mono text-text-muted">
                    Tọa độ trong hệ thống chính trị
                  </div>
                </div>

                {/* 2. VAI TRÒ (ROLE) */}
                <div className="p-5 bg-chalk rounded-sm border border-subtle space-y-3 flex flex-col justify-between shadow-xs">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-800 uppercase border-b border-subtle pb-2">
                      <span className="w-5 h-5 rounded-full bg-sky-800 text-white flex items-center justify-center text-[10px]">
                        2
                      </span>
                      <span>Vai trò (Role)</span>
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-carbon">
                      {activeProfile.role.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-sky-800 font-bold mt-0.5">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-subtle text-[11px] font-mono text-text-muted">
                    Chức năng trong phân công xã hội
                  </div>
                </div>

                {/* 3. ĐÓNG GÓP CỤ THỂ (CONTRIBUTION) */}
                <div className="p-5 bg-chalk rounded-sm border border-subtle space-y-3 flex flex-col justify-between shadow-xs">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase border-b border-subtle pb-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center text-[10px]">
                        3
                      </span>
                      <span>Đóng góp (Contribution)</span>
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-carbon">
                      {activeProfile.contribution.map((con, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-emerald-800 font-bold mt-0.5">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-subtle text-[11px] font-mono text-text-muted">
                    Sản phẩm &amp; giá trị đo lường được
                  </div>
                </div>
              </div>

              {/* Specific Academic & Legal Notes for Demographic Groups */}
              {activeProfile.id === "phu-nu" && (
                <div className="p-3.5 bg-rose-50 border border-rose-300 rounded-sm text-xs text-stone-800 leading-relaxed flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-vermilion flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Lưu ý học thuật &amp; Pháp lý bắt buộc:</strong> Phụ nữ là nhóm nhân khẩu học phân loại theo giới tính, giao thoa xuyên suốt các giai cấp, không phải giai cấp kinh tế độc lập.
                  </span>
                </div>
              )}

              {activeProfile.id === "thanh-nien" && (
                <div className="p-3.5 bg-orange-50 border border-orange-300 rounded-sm text-xs text-stone-800 leading-relaxed flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Lưu ý học thuật &amp; Pháp lý bắt buộc:</strong> Luật Thanh niên 2020 quy định thanh niên Việt Nam từ 16 đến 30 tuổi, là lực lượng xung kích giao thoa trên mọi lĩnh vực sản xuất, không phải giai cấp kinh tế độc lập.
                  </span>
                </div>
              )}

              {/* Expandable Storytelling Detail Experience */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsDetailExpanded(!isDetailExpanded)}
                  className="w-full py-3 px-4 bg-stone-warm hover:bg-stone-200/80 rounded-sm border border-subtle flex items-center justify-between text-xs font-mono font-bold text-carbon transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-vermilion" />
                    <span>Mở rộng phân tích sâu về bối cảnh thực tiễn và chính sách Đảng – Nhà nước</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isDetailExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isDetailExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-5 bg-white border-x border-b border-subtle rounded-b-sm space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed"
                    >
                      <h4 className="font-display font-bold text-base text-carbon">
                        Ý nghĩa Sư phạm trong Khối Liên minh Toàn dân tộc
                      </h4>
                      <p>
                        Trong công cuộc Đổi mới và hội nhập sâu rộng, sự đóng góp của {activeProfile.name} không tồn tại biệt lập. Sự gắn kết giữa lực lượng này với các giai tầng khác phản ánh bản chất liên minh Công – Nông – Trí thức mở rộng dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.
                      </p>
                      <p>
                        Chính sách của Nhà nước luôn hướng tới việc hoàn thiện thể chế, tạo môi trường thuận lợi để phát huy tối đa tiềm năng, đảm bảo công bằng xã hội và không ngừng nâng cao đời sống vật chất, tinh thần của nhân dân.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Interactive Workshop Teaser & Role Matching Game Entry */}
        <div id="role-matching-section" className="pt-8 border-t border-subtle space-y-6">
          {!isMatchingGameOpen ? (
            <div className="bg-carbon text-chalk rounded-md border border-white/10 p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 transition-all">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-citron/20 text-citron font-mono text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-citron" />
                  <span>THỬ THÁCH TƯƠNG TÁC • 7 NHIỆM VỤ ĐỊNH VỊ</span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  Bạn hiểu vai trò của các giai tầng đến đâu?
                </h3>
                <p className="text-sm font-serif text-stone-300 max-w-2xl leading-relaxed">
                  Vận dụng kiến thức lý luận MLN131 để định vị chính xác vị trí, vai trò và sứ mệnh lịch sử của 6 giai tầng xã hội cùng khối liên minh thông qua 7 lát cắt thực tiễn.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsMatchingGameOpen(true);
                  setTimeout(() => {
                    const el = document.getElementById("role-matching-section");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 120);
                }}
                className="px-8 py-3.5 rounded-sm bg-vermilion hover:bg-dark-red text-white font-mono text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg flex items-center gap-2 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-citron cursor-pointer"
              >
                <span>Bắt đầu ghép vai trò</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <RoleMatchingGame
              onOpenSourceModal={onOpenSourceModal}
              onProceedToScene05={() => {
                const el = document.getElementById("scene-05");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            />
          )}
        </div>

        <div className="pt-6">
          <SceneTransition
            fromNumber="PHÂN CẢNH 04"
            toNumber="PHÂN CẢNH 05"
            label="Từ 6 Lực lượng Xã hội đến Chuỗi Giá trị Hạt gạo Liên minh"
          />
        </div>
      </div>
    </section>
  );
};
