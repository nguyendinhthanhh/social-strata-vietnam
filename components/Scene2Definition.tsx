"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SourceBadge } from "./SourceBadge";
import { SceneTransition } from "./motion/MotionPrimitives";
import {
  Layers,
  HelpCircle,
  ShieldAlert,
  CheckCircle2,
  Cpu,
  Landmark,
  Share2,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Info,
} from "lucide-react";

interface Scene2DefinitionProps {
  onOpenSourceModal: (sourceId?: string) => void;
}

export const Scene2Definition: React.FC<Scene2DefinitionProps> = ({
  onOpenSourceModal,
}) => {
  const [activeTriangleKey, setActiveTriangleKey] = useState<
    "ownership" | "management" | "status_distribution"
  >("ownership");

  const triangleRelations = [
    {
      key: "ownership" as const,
      num: "01",
      vertex: "top",
      label: "Quan hệ về Sở hữu Tư liệu Sản xuất",
      shortLabel: "1. Sở hữu TLSX",
      tagline: "Quyền sở hữu phương tiện sản xuất",
      icon: Landmark,
      color: "#C8372D", // Vermilion
      coreQuestion: "Ai nắm giữ phương tiện sản xuất chủ yếu của nền kinh tế?",
      summary:
        "Xác định vị thế của các giai cấp đối với những điều kiện vật chất thiết yếu để tiến hành sản xuất. Trong thời kỳ quá độ tại Việt Nam, sự tồn tại của nền kinh tế nhiều thành phần kéo theo nhiều hình thức sở hữu: sở hữu toàn dân, sở hữu tập thể và sở hữu tư nhân.",
      subPoints: [
        "Đất đai, tài nguyên khoáng sản, hạ tầng huyết mạch: Thuộc sở hữu toàn dân do Nhà nước đại diện chủ sở hữu và thống nhất quản lý.",
        "Tư liệu sản xuất công nghiệp, dịch vụ: Nhiều hình thức sở hữu đa dạng đan xen (kinh tế nhà nước giữ vai trò chủ đạo, kinh tế tập thể, kinh tế tư nhân là động lực quan trọng, và kinh tế có vốn FDI).",
      ],
      legalHighlight:
        "CĂN CỨ PHÁP LÝ & HỌC THUẬT QUAN TRỌNG VỀ ĐẤT ĐAI: Theo Điều 53 và Điều 54 Hiến pháp 2013 và Luật Đất đai: Đất đai là tài sản công thuộc sở hữu toàn dân do Nhà nước đại diện chủ sở hữu. Do đó, người nông dân Việt Nam KHÔNG CÓ quyền sở hữu tư nhân đối với ruộng đất, mà được Nhà nước công nhận Quyền sử dụng đất (QSDĐ) ổn định lâu dài. Phân biệt chính xác giữa 'sở hữu đất đai' và 'quyền sử dụng đất' là ranh giới lý luận bắt buộc trong môn học.",
      sourceIds: ["C-18-05", "C-LAND-LAW"],
      imageSrc: "/images/infrastructure_dam.jpg",
      imageAlt: "Công trình Thủy điện Hòa Bình - TLSX trọng yếu thuộc sở hữu toàn dân",
      imageCaption: "Thủy điện Hòa Bình: Hạ tầng năng lượng trọng yếu thuộc sở hữu toàn dân do Nhà nước thống nhất quản lý (Điều 53 Hiến pháp 2013).",
    },
    {
      key: "management" as const,
      num: "02",
      vertex: "bottom-left",
      label: "Quan hệ Tổ chức & Quản lý Sản xuất",
      shortLabel: "2. Tổ chức & Quản lý",
      tagline: "Phân công lao động & điều hành",
      icon: Cpu,
      color: "#C8D668", // Citron
      coreQuestion: "Ai điều hành, phối hợp và làm chủ chuỗi vận hành công nghệ và lao động?",
      summary:
        "Phản ánh việc phân công lao động xã hội và quyền hạn điều hành các công đoạn tạo ra của cải. Trong xã hội định hướng XHCN, mối quan hệ này không mang tính áp đặt bóc lột một chiều, mà là sự hợp tác kỹ thuật, công nghệ và quản trị giữa các lực lượng xã hội bình đẳng.",
      subPoints: [
        "Giai cấp công nhân trực tiếp làm chủ quy trình máy móc, tự động hóa và dây chuyền sản xuất công nghiệp hiện đại.",
        "Đội ngũ trí thức hoạch định giải pháp số, xây dựng tiêu chuẩn kỹ thuật và chuyển giao tiến bộ khoa học – công nghệ.",
        "Đội ngũ doanh nhân tổ chức chuỗi cung ứng, điều phối vốn và liên kết mạng lưới thị trường trong nước và quốc tế.",
        "Người nông dân đổi mới phương thức sản xuất thông qua Hợp tác xã kiểu mới, liên minh cánh đồng lớn và ứng dụng nông nghiệp công nghệ cao.",
      ],
      sourceIds: ["C-18-05"],
      imageSrc: "/images/factory_workers.jpg",
      imageAlt: "Công nhân và kỹ sư công nghiệp điều hành chuỗi sản xuất",
      imageCaption: "Lực lượng công nhân và chuyên gia kỹ thuật phối hợp làm chủ quy trình vận hành sản xuất hiện đại.",
    },
    {
      key: "status_distribution" as const,
      num: "03",
      vertex: "bottom-right",
      label: "Quan hệ Địa vị Chính trị – Xã hội & Phân phối",
      shortLabel: "3. Địa vị & Phân phối",
      tagline: "Vai trò lãnh đạo & hưởng thụ thành quả",
      icon: Share2,
      color: "#A62E2D", // Dark Red
      coreQuestion: "Ai giữ vai trò lãnh đạo xã hội và được thụ hưởng thành quả lao động như thế nào?",
      summary:
        "Thể hiện vị thế của mỗi giai cấp trong hệ thống chính trị và mức độ hưởng thụ giá trị do xã hội làm ra. Tại Việt Nam, giai cấp công nhân giữ địa vị lãnh đạo cách mạng thông qua đội tiền phong là Đảng Cộng sản Việt Nam.",
      subPoints: [
        "Giai cấp công nhân giữ vai trò lãnh đạo xã hội thông qua Đảng Cộng sản Việt Nam — đại diện cho lợi ích của giai cấp công nhân, nhân dân lao động và toàn dân tộc.",
        "Nguyên tắc phân phối kết hợp hài hòa: Phân phối chủ yếu theo kết quả lao động và hiệu quả kinh tế.",
        "Đồng thời phân phối theo mức đóng góp vốn, các nguồn lực khác và phân phối thông qua hệ thống an sinh xã hội, phúc lợi công cộng rộng khắp.",
      ],
      sourceIds: ["C-18-05", "C-20-05", "C-20-17"],
      imageSrc: "/images/scene2_structure_slide.jpg",
      imageAlt: "Tư liệu bài giảng MLN131 Tiết 18 Slide 13 về biến đổi CCXH-GC",
      imageCaption: "Tư liệu bài giảng Tiết 18 Slide 13: Vị trí lãnh đạo và nguyên tắc phân phối công bằng thời kỳ quá độ.",
    },
  ];

  const activeRelation = triangleRelations.find((r) => r.key === activeTriangleKey)!;
  const ActiveIcon = activeRelation.icon;

  return (
    <section
      id="scene-02"
      aria-label="Phân cảnh 02: Giải mã Tọa độ Xã hội"
      className="py-16 sm:py-24 bg-chalk text-carbon border-b border-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="border-b border-subtle pb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-vermilion uppercase tracking-kicker">
              Phân cảnh 02 / Không gian Triển lãm
            </span>
            <span className="text-text-muted text-xs font-mono">• Trạm Lý luận Nền tảng</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-carbon tracking-tight">
            Giải mã Tọa độ Xã hội
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-text-muted mt-2 max-w-3xl">
            Cơ cấu Xã hội – Giai cấp và Ba mối quan hệ nền tảng định hình vị thế của mỗi con người trong thời kỳ quá độ.
          </p>
        </div>

        {/* Part 1: Scientific Distinction between Social Structure & Social-Class Structure */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-kicker text-vermilion font-semibold">
              1. Phân biệt Khoa học
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-carbon">
              Phân biệt giữa Cơ cấu Xã hội &amp; Cơ cấu Xã hội – Giai cấp
            </h3>
            <p className="font-body text-sm sm:text-base text-stone-700 leading-relaxed">
              Để nhận diện đúng một chỉnh thể xã hội, lý luận Mác – Lênin phân định rõ hai cấp độ khái niệm: từ một không gian tổng thể đa chiều sang hạt nhân kinh tế – chính trị chi phối.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1: General Social Structure */}
            <div className="p-6 bg-white border border-subtle rounded-sm shadow-paper-subtle space-y-4">
              <div className="flex items-center justify-between border-b border-subtle pb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                  Bình diện Rộng (Tổng thể)
                </span>
                <SourceBadge sourceId="C-18-03" onClick={onOpenSourceModal} />
              </div>
              <h4 className="font-display font-bold text-xl text-carbon">
                Cơ cấu Xã hội (Social Structure)
              </h4>
              <p className="font-body text-sm text-stone-700 leading-relaxed italic border-l-2 border-subtle pl-3">
                &ldquo;Là những cộng đồng người cùng toàn bộ những mối quan hệ xã hội do sự tác động lẫn nhau của các cộng đồng ấy tạo nên.&rdquo;
              </p>
              <div className="space-y-2 pt-2 text-xs">
                <span className="font-mono text-text-muted font-semibold block uppercase">
                  5 Phân hệ Cấu thành Cơ bản [C-18-04]:
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono">
                  <span className="px-2 py-1 bg-stone-warm text-carbon rounded-sm">1. Dân tộc</span>
                  <span className="px-2 py-1 bg-stone-warm text-carbon rounded-sm">2. Dân cư</span>
                  <span className="px-2 py-1 bg-stone-warm text-carbon rounded-sm">3. Nghề nghiệp</span>
                  <span className="px-2 py-1 bg-stone-warm text-carbon rounded-sm">4. Tôn giáo</span>
                  <span className="px-2 py-1 bg-carbon text-citron font-bold rounded-sm">5. Giai cấp (Nòng cốt)</span>
                </div>
              </div>
            </div>

            {/* Box 2: Social-Class Structure */}
            <div className="p-6 bg-white border-2 border-vermilion/40 rounded-sm shadow-paper-subtle space-y-4">
              <div className="flex items-center justify-between border-b border-subtle pb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-vermilion">
                  Hạt nhân Chi phối (Bản chất)
                </span>
                <SourceBadge sourceId="C-18-05" onClick={onOpenSourceModal} />
              </div>
              <h4 className="font-display font-bold text-xl text-carbon">
                Cơ cấu Xã hội – Giai cấp (Social-Class Structure)
              </h4>
              <p className="font-body text-sm text-stone-700 leading-relaxed italic border-l-2 border-vermilion pl-3">
                &ldquo;Là hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định, thông qua những mối quan hệ về sở hữu tư liệu sản xuất, về tổ chức quản lý quá trình sản xuất, về địa vị chính trị – xã hội giữa các giai cấp và tầng lớp đó.&rdquo;
              </p>
              <div className="space-y-2 pt-2 text-xs">
                <span className="font-mono text-text-muted font-semibold block uppercase">
                  Bộ phận Cấu thành [C-18-06]:
                </span>
                <p className="text-stone-700 leading-relaxed">
                  Bao gồm các <strong>Giai cấp</strong> (Công nhân, Nông dân), các <strong>Tầng lớp</strong> (Trí thức, Doanh nhân, Tiểu chủ...), và các <strong>Nhóm xã hội</strong> tồn tại khách quan trong sự phân công lao động.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: SIGNATURE INTERACTIVE TRIANGLE DIAGRAM */}
        <div className="space-y-8 pt-4">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-kicker text-vermilion font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-vermilion" /> 2. Sơ đồ Tương tác Độc quyền (Interactive Conceptual Diagram)
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-carbon">
              Tam giác 3 Mối quan hệ cấu thành Cơ cấu Xã hội – Giai cấp
            </h3>
            <p className="font-body text-sm sm:text-base text-stone-700 leading-relaxed">
              Cơ cấu xã hội – giai cấp không hình thành từ định kiến hay thu nhập đơn thuần, mà được thiết lập và phân định thông qua <strong>3 mối quan hệ khách quan</strong>. Hãy bấm vào các đỉnh tam giác hoặc nhãn điều khiển để giải mã từng mối quan hệ.
            </p>
          </div>

          {/* Interactive Conceptual Area: Diagram on Left/Top, Detail on Right/Bottom */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white border border-subtle rounded-sm p-6 sm:p-8 shadow-paper-subtle">
            
            {/* Left Column: Visual Interactive Triangle Diagram (SVG + Framer Motion) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-stone-warm/50 rounded-sm border border-subtle">
              <div className="text-center mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block">
                  Mô hình Tam giác Tương quan Lý luận
                </span>
                <span className="text-xs font-serif italic text-stone-600">
                  Bấm vào 3 đỉnh để chuyển đổi phân tích
                </span>
              </div>

              {/* Responsive SVG Triangle Canvas */}
              <div className="relative w-full max-w-[260px] sm:max-w-[340px] aspect-square flex items-center justify-center mx-auto">
                <svg
                  viewBox="0 0 320 300"
                  className="w-full h-full select-none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="tri-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C8372D" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#C8D668" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="tri-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C8D668" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#A62E2D" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="tri-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A62E2D" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#C8372D" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>

                  {/* Connecting Triangle Edges */}
                  <polygon
                    points="160,40 50,240 270,240"
                    fill="rgba(18, 20, 22, 0.03)"
                    stroke="#D5D2C7"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />

                  {/* Active Highlight Lines based on key */}
                  {activeTriangleKey === "ownership" && (
                    <>
                      <line x1="160" y1="40" x2="50" y2="240" stroke="#C8372D" strokeWidth="3" />
                      <line x1="160" y1="40" x2="270" y2="240" stroke="#C8372D" strokeWidth="3" />
                    </>
                  )}
                  {activeTriangleKey === "management" && (
                    <>
                      <line x1="50" y1="240" x2="160" y2="40" stroke="#8A9924" strokeWidth="3" />
                      <line x1="50" y1="240" x2="270" y2="240" stroke="#8A9924" strokeWidth="3" />
                    </>
                  )}
                  {activeTriangleKey === "status_distribution" && (
                    <>
                      <line x1="270" y1="240" x2="160" y2="40" stroke="#A62E2D" strokeWidth="3" />
                      <line x1="270" y1="240" x2="50" y2="240" stroke="#A62E2D" strokeWidth="3" />
                    </>
                  )}

                  {/* Central Hub Core */}
                  <g className="cursor-default">
                    <circle cx="160" cy="173" r="38" fill="#121416" />
                    <text
                      x="160"
                      y="166"
                      textAnchor="middle"
                      fill="#C8D668"
                      fontSize="9"
                      fontWeight="bold"
                      fontFamily="monospace"
                      letterSpacing="0.05em"
                    >
                      CƠ CẤU XH-GC
                    </text>
                    <text
                      x="160"
                      y="182"
                      textAnchor="middle"
                      fill="#F7F6F2"
                      fontSize="8"
                      fontFamily="sans-serif"
                    >
                      Hạt nhân chi phối
                    </text>
                  </g>
                </svg>

                {/* Vertex 1 Button: TOP (Sở hữu TLSX) */}
                <button
                  type="button"
                  onClick={() => setActiveTriangleKey("ownership")}
                  className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 p-1.5 sm:p-2.5 rounded-full border-2 transition-all duration-200 flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-vermilion ${
                    activeTriangleKey === "ownership"
                      ? "bg-vermilion text-white border-carbon shadow-md scale-110"
                      : "bg-white text-carbon border-subtle hover:border-vermilion hover:scale-105"
                  }`}
                  aria-label="Quan hệ về Sở hữu Tư liệu Sản xuất"
                >
                  <Landmark className="w-4 h-4 sm:w-6 sm:h-6" />
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold mt-0.5 px-1 truncate sm:whitespace-nowrap">
                    Sở hữu TLSX
                  </span>
                </button>

                {/* Vertex 2 Button: BOTTOM-LEFT (Tổ chức & Quản lý) */}
                <button
                  type="button"
                  onClick={() => setActiveTriangleKey("management")}
                  className={`absolute bottom-0 left-0 sm:left-2 p-1.5 sm:p-2.5 rounded-full border-2 transition-all duration-200 flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-citron ${
                    activeTriangleKey === "management"
                      ? "bg-carbon text-citron border-citron shadow-md scale-110"
                      : "bg-white text-carbon border-subtle hover:border-carbon hover:scale-105"
                  }`}
                  aria-label="Quan hệ Tổ chức & Quản lý Sản xuất"
                >
                  <Cpu className="w-4 h-4 sm:w-6 sm:h-6" />
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold mt-0.5 px-0.5 max-w-[70px] sm:max-w-none text-center truncate sm:whitespace-nowrap">
                    Tổ chức &amp; Quản lý
                  </span>
                </button>

                {/* Vertex 3 Button: BOTTOM-RIGHT (Địa vị & Phân phối) */}
                <button
                  type="button"
                  onClick={() => setActiveTriangleKey("status_distribution")}
                  className={`absolute bottom-0 right-0 sm:right-2 p-1.5 sm:p-2.5 rounded-full border-2 transition-all duration-200 flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-red ${
                    activeTriangleKey === "status_distribution"
                      ? "bg-dark-red text-white border-carbon shadow-md scale-110"
                      : "bg-white text-carbon border-subtle hover:border-dark-red hover:scale-105"
                  }`}
                  aria-label="Quan hệ Địa vị Chính trị – Xã hội & Phân phối"
                >
                  <Share2 className="w-4 h-4 sm:w-6 sm:h-6" />
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold mt-0.5 px-0.5 max-w-[70px] sm:max-w-none text-center truncate sm:whitespace-nowrap">
                    Địa vị &amp; Phân phối
                  </span>
                </button>
              </div>

              {/* Fast selector buttons for mobile accessibility */}
              <div className="w-full mt-4 grid grid-cols-3 gap-1.5 pt-3 border-t border-subtle/60">
                {triangleRelations.map((rel) => {
                  const isSelected = activeTriangleKey === rel.key;
                  return (
                    <button
                      key={rel.key}
                      type="button"
                      onClick={() => setActiveTriangleKey(rel.key)}
                      className={`py-1.5 px-2 rounded-sm text-center text-[11px] font-mono font-bold transition-all ${
                        isSelected
                          ? "bg-carbon text-citron shadow-xs"
                          : "bg-white text-text-muted hover:text-carbon border border-subtle"
                      }`}
                    >
                      {rel.num}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Animated Explanatory Dossier */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRelation.key}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-5"
                >
                  {/* Badge & Identification */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-subtle pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-carbon text-citron font-mono font-bold text-xs flex items-center justify-center">
                        {activeRelation.num}
                      </span>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-vermilion">
                        {activeRelation.tagline}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {activeRelation.sourceIds.map((sid) => (
                        <SourceBadge
                          key={sid}
                          sourceId={sid}
                          onClick={onOpenSourceModal}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Title & Core Question */}
                  <div className="space-y-2">
                    <h4 className="font-display font-black text-2xl sm:text-3xl text-carbon">
                      {activeRelation.label}
                    </h4>
                    <div className="p-3 bg-stone-warm rounded-sm border-l-4 border-l-vermilion flex items-start gap-2 text-sm text-carbon">
                      <HelpCircle className="w-4 h-4 text-vermilion mt-0.5 flex-shrink-0" />
                      <span className="font-serif italic font-medium">
                        &ldquo;{activeRelation.coreQuestion}&rdquo;
                      </span>
                    </div>
                  </div>

                  {/* Summary Text */}
                  <p className="font-body text-sm sm:text-base text-stone-700 leading-relaxed">
                    {activeRelation.summary}
                  </p>

                  {/* Detailed Sub-points */}
                  <div className="space-y-2.5 pt-1">
                    <span className="text-xs font-mono font-semibold uppercase text-text-muted block">
                      Biểu hiện thực tế tại Việt Nam thời kỳ quá độ:
                    </span>
                    <ul className="space-y-2">
                      {activeRelation.subPoints.map((pt, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-carbon bg-chalk p-2.5 rounded-sm border border-subtle/60"
                        >
                          <CheckCircle2 className="w-4 h-4 text-vermilion flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Supporting Editorial Photographic Visual Panel */}
                  <div className="pt-2">
                    <figure className="overflow-hidden rounded-sm border border-subtle bg-carbon shadow-xs">
                      <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
                        <img
                          src={activeRelation.imageSrc}
                          alt={activeRelation.imageAlt}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-2 left-2 text-[10px] font-mono text-citron bg-black/70 px-2 py-0.5 rounded">
                          Tư liệu thực chứng
                        </span>
                      </div>
                      <figcaption className="p-2.5 bg-stone-warm/90 border-t border-subtle/50 text-xs font-mono text-stone-700 leading-snug">
                        {activeRelation.imageCaption}
                      </figcaption>
                    </figure>
                  </div>

                  {/* Legal Highlight on Land Law if ownership is selected */}
                  {activeRelation.legalHighlight && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-vermilion/5 border border-vermilion/30 rounded-sm space-y-2"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-vermilion uppercase">
                        <ShieldAlert className="w-4 h-4 text-vermilion" />
                        <span>Quy định Hiến pháp &amp; Luật Đất đai</span>
                      </div>
                      <p className="font-body text-xs text-stone-800 leading-relaxed">
                        {activeRelation.legalHighlight}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Part 3: 4 Reasons Why Social-Class Structure Dominates */}
        <div className="space-y-6 pt-6">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-kicker text-vermilion font-semibold">
              3. Vị trí Trọng yếu
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-carbon">
              Vì sao Cơ cấu Xã hội – Giai cấp giữ vị trí trung tâm và chi phối?
            </h3>
            <p className="font-body text-sm sm:text-base text-stone-700 leading-relaxed">
              Theo bài giảng MLN131 (Tiết 18, slide 8–10), CCXH-GC giữ vị trí quan trọng hàng đầu và chi phối toàn bộ cơ cấu xã hội bởi 4 căn nguyên cốt lõi:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-white border border-subtle rounded-sm shadow-paper-subtle space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-vermilion">CĂN NGUYÊN 01</span>
                  <SourceBadge sourceId="C-18-08" onClick={onOpenSourceModal} />
                </div>
                <h4 className="font-display font-bold text-base text-carbon">
                  Gắn liền với quyền lực chính trị, nhà nước &amp; kinh tế
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-body">
                  CCXH-GC liên quan trực tiếp đến các chính đảng, nhà nước, quyền sở hữu TLSX, tổ chức quản lý lao động và phân phối thu nhập của toàn xã hội.
                </p>
              </div>
              <div className="pt-2 border-t border-subtle text-[11px] font-mono text-text-muted">
                Ảnh hưởng trực tiếp kiến trúc thượng tầng
              </div>
            </div>

            <div className="p-5 bg-white border border-subtle rounded-sm shadow-paper-subtle space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-vermilion">CĂN NGUYÊN 02</span>
                  <SourceBadge sourceId="C-18-09" onClick={onOpenSourceModal} />
                </div>
                <h4 className="font-display font-bold text-base text-carbon">
                  Chi phối chiều hướng biến đổi của các cơ cấu khác
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-body">
                  Sự biến đổi của CCXH-GC tất yếu kéo theo sự biến đổi của cơ cấu dân tộc, dân cư, nghề nghiệp, tôn giáo và toàn thể các quan hệ xã hội.
                </p>
              </div>
              <div className="pt-2 border-t border-subtle text-[11px] font-mono text-text-muted">
                Quyết định vận động chỉnh thể
              </div>
            </div>

            <div className="p-5 bg-white border border-subtle rounded-sm shadow-paper-subtle space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-vermilion">CĂN NGUYÊN 03</span>
                  <SourceBadge sourceId="C-18-10" onClick={onOpenSourceModal} />
                </div>
                <h4 className="font-display font-bold text-base text-carbon">
                  Căn cứ cốt yếu để Đảng &amp; Nhà nước hoạch định chính sách
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-body">
                  Là cơ sở xuất phát điểm để xây dựng chính sách phát triển kinh tế, văn hóa, nâng cao an sinh và giải quyết các bài toán xã hội trong từng giai đoạn.
                </p>
              </div>
              <div className="pt-2 border-t border-subtle text-[11px] font-mono text-text-muted">
                Nền tảng hoạch định chiến lược
              </div>
            </div>

            <div className="p-5 bg-white border border-subtle rounded-sm shadow-paper-subtle space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-vermilion">CĂN NGUYÊN 04</span>
                  <SourceBadge sourceId="C-18-10" onClick={onOpenSourceModal} />
                </div>
                <h4 className="font-display font-bold text-base text-carbon">
                  Mối quan hệ tác động biện chứng hai chiều
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-body">
                  Mặc dù giữ vai trò chi phối, CCXH-GC không đứng biệt lập mà chịu sự tác động trở lại của cơ cấu dân số, dân tộc, tôn giáo và môi trường sinh thái.
                </p>
              </div>
              <div className="pt-2 border-t border-subtle text-[11px] font-mono text-text-muted">
                Tương tác khách quan đa chiều
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <SceneTransition
            fromNumber="PHÂN CẢNH 02"
            toNumber="PHÂN CẢNH 03"
            label="Từ Tọa độ Cấu trúc đến Ba Quy luật Vận động Biến chuyển"
          />
        </div>
      </div>
    </section>
  );
};
