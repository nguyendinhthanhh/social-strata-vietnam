"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SourceBadge } from "./SourceBadge";
import { SceneTransition } from "./motion/MotionPrimitives";
import {
  Wheat,
  Microscope,
  Tractor,
  Factory,
  Ship,
  Sparkles,
  Flame,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Users,
  Layers,
  Network,
  Share2,
  Briefcase,
  GraduationCap,
  Store,
  HeartHandshake,
  Camera,
} from "lucide-react";

interface Scene5RiceChainProps {
  onOpenSourceModal: (sourceId?: string) => void;
}

export const Scene5RiceChain: React.FC<Scene5RiceChainProps> = ({
  onOpenSourceModal,
}) => {
  const shouldReduce = useReducedMotion();
  const [viewMode, setViewMode] = useState<"stages" | "forces">("stages");
  const [activeStep, setActiveStep] = useState(0);
  const [activeForceKey, setActiveForceKey] = useState<string>("phu-nu");

  const chainSteps = [
    {
      step: 1,
      num: "01",
      force: "Đội ngũ Trí thức",
      forceKey: "tri-thuc",
      stageTitle: "Nghiên cứu Giống & Đất",
      title: "Hàm lượng Tri thức trong Hạt mầm",
      icon: Microscope,
      sourceId: "C-20-07",
      actors: "Các nhà khoa học nông nghiệp, kỹ sư thổ nhưỡng và chuyên gia công nghệ sinh học.",
      action:
        "Mất hàng chục năm lai tạo thành công những bộ giống lúa thơm đặc sản (ST24, ST25, OM5451) có khả năng chịu mặn, chống chịu sâu bệnh và thích ứng biến đổi khí hậu; nghiên cứu quy trình tưới ngập - khô xen kẽ (AWD) và chế phẩm vi sinh phân hủy rơm rạ nhằm giảm thiểu phát thải khí metan.",
      significance:
        "Khoa học – công nghệ trở thành lực lượng sản xuất trực tiếp, đưa tri thức hiện đại hóa nền tảng nông nghiệp truyền thống.",
      womenYouthRole:
        "Các nữ nghiên cứu sinh di truyền học lội ruộng chọn dòng thuần; các kỹ sư trẻ vận hành thiết bị phân tích ADN vi sinh vật trong phòng thí nghiệm.",
      imageSrc: "/images/portrait_intellectual_slide.jpg",
      imageAlt: "Nhà khoa học nông nghiệp và kỹ sư lai tạo giống lúa",
      imageCaption: "Mắt xích 01: Hàm lượng tri thức cao trong nghiên cứu giống ST25 và thổ nhưỡng bền vững.",
    },
    {
      step: 2,
      num: "02",
      force: "Giai cấp Nông dân",
      forceKey: "nong-dan",
      stageTitle: "Canh tác & Hợp tác xã",
      title: "Chủ thể Canh tác trên Đất Sở hữu Toàn dân",
      icon: Tractor,
      sourceId: "C-20-06",
      actors: "Người nông dân trên đồng ruộng, xã viên các hợp tác xã nông nghiệp kiểu mới.",
      action:
        "Canh tác trên diện tích đất được Nhà nước bảo hộ Quyền sử dụng đất (QSDĐ) ổn định lâu dài [C-LAND-LAW]. Nông dân liên kết thành cánh đồng mẫu lớn, tuân thủ quy chuẩn VietGAP, ghi chép nhật ký số, áp dụng giải pháp '1 phải 5 giảm' để hạt thóc sạch, không tồn dư hóa chất.",
      significance:
        "Nông dân chuyển dịch tư duy từ 'sản xuất nông nghiệp thuần túy' sang 'kinh tế nông nghiệp', làm chủ tư liệu sản xuất và công nghệ xanh.",
      womenYouthRole:
        "Nữ nông dân điều phối quản lý tổ hợp tác và cân đối vật tư mùa vụ; thanh niên nông thôn lập tổ cơ giới hóa dịch vụ phục vụ toàn xã.",
      imageSrc: "/images/rice_field_paddy.jpg",
      imageAlt: "Cánh đồng lúa và nông dân canh tác VietGAP",
      imageCaption: "Mắt xích 02: Cánh đồng mẫu lớn, HTX kiểu mới và quy chuẩn canh tác VietGAP chất lượng cao.",
    },
    {
      step: 3,
      num: "03",
      force: "Giai cấp Công nhân",
      forceKey: "cong-nhan",
      stageTitle: "Chế biến & Logistics",
      title: "Cơ giới hóa, Chế biến sâu & Logistics Cảng biển",
      icon: Factory,
      sourceId: "C-20-05",
      actors: "Công nhân cơ khí nông nghiệp, công nhân chế biến lương thực và công nhân vận tải cảng biển.",
      action:
        "Điều khiển máy gặt đập liên hợp thu hoạch nhanh gọn; vận hành cụm lò sấy điện tuần hoàn, dây chuyền tách vỏ, tách màu quang học, đóng gói chân không bảo quản tiêu chuẩn quốc tế; lái xe đầu kéo container và cẩu bờ bốc dỡ hàng xuống tàu biển.",
      significance:
        "Công nghiệp hỗ trợ đắc lực cho nông nghiệp, biến hạt lúa thô thành sản phẩm hàng hóa công nghiệp có giá trị gia tăng cao và bảo quản bền vững.",
      womenYouthRole:
        "Nữ công nhân kiểm định vi sinh và vận hành máy quét mã vạch truy xuất nguồn gốc; công nhân trẻ lập trình hệ thống giám sát nhiệt độ tự động trong kho silô.",
      imageSrc: "/images/rice_harvest.jpg",
      imageAlt: "Cơ giới hóa nông nghiệp và vận hành thu hoạch",
      imageCaption: "Mắt xích 03: Cơ giới hóa thu hoạch, sấy lúa công nghiệp và chế biến sâu tiêu chuẩn xuất khẩu.",
    },
    {
      step: 4,
      num: "04",
      force: "Đội ngũ Doanh nhân",
      forceKey: "doanh-nhan",
      stageTitle: "Thương mại & Xuất khẩu",
      title: "Kết nối Nguồn lực, Quản trị Rủi ro & Xuất khẩu",
      icon: Ship,
      sourceId: "C-20-08",
      actors: "Các doanh nhân, giám đốc điều hành doanh nghiệp chế biến và xuất nhập khẩu nông sản.",
      action:
        "Ký kết hợp đồng liên kết bao tiêu lúa ngay từ đầu vụ; ứng trước giống, vốn và vật tư cho nông dân; đầu tư hệ thống kho dự trữ chiến lược; đăng ký bảo hộ nhãn hiệu gạo Việt Nam tại châu Âu, Nhật Bản, Bắc Mỹ và đàm phán các hợp đồng thương mại lớn.",
      significance:
        "Doanh nhân đóng vai trò nhạc trưởng chuỗi giá trị, đưa thành quả lao động của liên minh Công – Nông – Trí thức bước vào cuộc đua tranh toàn cầu.",
      womenYouthRole:
        "Nữ giám đốc xuất nhập khẩu trực tiếp đàm phán hợp đồng thương mại quốc tế; startup trẻ xây dựng nền tảng thương mại điện tử kết nối người tiêu dùng toàn cầu.",
      imageSrc: "/images/port_shipping.jpg",
      imageAlt: "Tàu container tại cảng quốc tế Hải Phòng xuất khẩu gạo",
      imageCaption: "Mắt xích 04: Cảng container xuất khẩu gạo Việt Nam vươn ra thị trường toàn cầu hơn 150 quốc gia.",
    },
  ];

  const socialForcesInRice = [
    {
      key: "cong-nhan",
      name: "Giai cấp Công nhân",
      icon: Briefcase,
      color: "text-vermilion",
      imageSrc: "/images/portrait_worker_slide.jpg",
      presence: "Cơ giới hóa đồng ruộng, chế biến sâu, logistics cảng",
      narrative:
        "Công nhân trực tiếp vận hành máy gặt đập, lò sấy, hệ thống bóc vỏ và đóng gói chân không xuất khẩu; vận hành cần cẩu cảng bốc xếp gạo lên tàu viễn dương.",
      linkedStages: ["Mắt xích 03 (Chế biến & Logistics)", "Mắt xích 04 (Logistics Cảng)"],
    },
    {
      key: "nong-dan",
      name: "Giai cấp Nông dân",
      icon: Tractor,
      color: "text-amber-700",
      imageSrc: "/images/portrait_farmer_slide.jpg",
      presence: "Chủ thể canh tác, quản trị ruộng đồng, bảo vệ hệ sinh thái",
      narrative:
        "Nông dân sử dụng đất đai theo quyền sử dụng đất (QSDĐ), trực tiếp xuống giống, quản lý nước, áp dụng VietGAP trên cánh đồng mẫu lớn của Hợp tác xã.",
      linkedStages: ["Mắt xích 02 (Canh tác & HTX)", "Mắt xích 01 (Khảo nghiệm giống)"],
    },
    {
      key: "tri-thuc",
      name: "Đội ngũ Trí thức",
      icon: Microscope,
      color: "text-sky-800",
      imageSrc: "/images/portrait_intellectual_slide.jpg",
      presence: "Nghiên cứu giống ST24/ST25, quy trình tưới giảm phát thải AWD",
      narrative:
        "Trí thức nghiên cứu bộ gen, phân lập giống lúa chịu mặn, chuyển giao quy trình vi sinh và giải pháp giảm khí thải metan đạt chuẩn tín chỉ carbon.",
      linkedStages: ["Mắt xích 01 (Nghiên cứu Giống)", "Mắt xích 02 (Chuyển giao Kỹ thuật)"],
    },
    {
      key: "doanh-nhan",
      name: "Đội ngũ Doanh nhân",
      icon: Ship,
      color: "text-emerald-800",
      imageSrc: "/images/portrait_entrepreneur_slide.jpg",
      presence: "Bao tiêu, vốn đầu tư, kho dự trữ, xúc tiến thương hiệu quốc tế",
      narrative:
        "Doanh nhân liên kết chuỗi giá trị, ứng vốn cho nông dân, xây dựng kho dự trữ hiện đại và quảng bá thương hiệu gạo Việt Nam tại hơn 150 quốc gia.",
      linkedStages: ["Mắt xích 04 (Thương mại Quốc tế)", "Mắt xích 02 (Hợp đồng Bao tiêu)"],
    },
    {
      key: "phu-nu",
      name: "Phụ nữ (Nhóm Giao thoa)",
      icon: Sparkles,
      color: "text-rose-700",
      imageSrc: "/images/portrait_women_slide.jpg",
      presence: "Hiện diện ở mọi khâu: nghiên cứu, tài chính HTX, KCS, đàm phán",
      narrative:
        "Phụ nữ đóng vai trò từ nhà nghiên cứu giống trong phòng lab, người quản trị tài chính hợp tác xã, chuyên viên kiểm định chất lượng (KCS) nhà máy đến nữ CEO xuất khẩu đàm phán hợp đồng quốc tế.",
      linkedStages: ["Xuyên suốt 4 mắt xích của chuỗi giá trị lúa gạo"],
    },
    {
      key: "thanh-nien",
      name: "Thanh niên (Nhóm Giao thoa)",
      icon: Flame,
      color: "text-orange-600",
      imageSrc: "/images/portrait_youth_slide.jpg",
      presence: "Lực lượng xung kích công nghệ: drone nông nghiệp, số hóa, startup",
      narrative:
        "Thanh niên là lực lượng xung kích điều khiển thiết bị bay không người lái (drone) sạ lúa, lập trình kho thông minh và khởi nghiệp nền tảng truy xuất nguồn gốc số.",
      linkedStages: ["Xuyên suốt 4 mắt xích với tư cách lực lượng xung kích đổi mới"],
    },
  ];

  const currentChain = chainSteps[activeStep];
  const activeForceData = socialForcesInRice.find((f) => f.key === activeForceKey)!;

  return (
    <section
      id="scene-05"
      aria-label="Phân cảnh 05: Hạt gạo Liên minh"
      className="py-16 sm:py-24 bg-chalk text-carbon border-b border-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="border-b border-subtle pb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-vermilion uppercase tracking-kicker">
              Phân cảnh 05 / Không gian Triển lãm
            </span>
            <span className="text-text-muted text-xs font-mono">• Mô hình Sư phạm Chuỗi Giá trị</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-carbon tracking-tight">
            Hạt gạo Liên minh
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-text-muted mt-2 max-w-3xl">
            Mô hình Sư phạm Chuỗi Giá trị Nông sản Việt — Khắc sâu bài học tương tác giữa 6 Lực lượng Xã hội và Bản chất Liên minh Kinh tế theo MLN131.
          </p>
        </div>

        {/* Conceptual Alliance Context Banner */}
        <div className="p-5 sm:p-6 bg-stone-warm border-l-4 border-l-vermilion border-y border-r border-subtle rounded-sm shadow-paper-subtle space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-subtle pb-2">
            <span className="font-mono text-xs font-bold uppercase text-vermilion flex items-center gap-1.5">
              <Network className="w-4 h-4 text-vermilion" />
              Bản chất Lý luận: Liên minh trên Lĩnh vực Kinh tế là Cơ sở Vật chất – Kỹ thuật của Liên minh
            </span>
            <div className="flex items-center gap-1.5">
              <SourceBadge sourceId="C-19-09" onClick={onOpenSourceModal} />
              <SourceBadge sourceId="C-20-12" onClick={onOpenSourceModal} />
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-body">
            Liên minh kinh tế trong thời kỳ quá độ không chỉ là khẩu hiệu chính trị trừu tượng, mà xuất phát từ <strong>nhu cầu và lợi ích kinh tế khách quan</strong> giữa các ngành công nghiệp, nông nghiệp, dịch vụ và khoa học – công nghệ. Một hạt gạo ra đời là kết tinh của chuỗi giá trị liên thông giữa <strong>Trí thức – Nông dân – Công nhân – Doanh nhân</strong>, với sự tham gia không thể thiếu của <strong>Phụ nữ và Thanh niên</strong> trong từng công đoạn.
          </p>
        </div>

        {/* View Mode Switcher: By Stages vs By Social Forces */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-1.5 p-1 bg-stone-warm rounded-sm border border-subtle text-xs font-mono">
            <button
              type="button"
              onClick={() => setViewMode("stages")}
              className={`px-3 py-1.5 rounded-sm transition-colors flex items-center gap-1.5 ${
                viewMode === "stages"
                  ? "bg-carbon text-citron font-bold shadow-xs"
                  : "text-text-muted hover:text-carbon"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Theo 4 Mắt xích Chuỗi Giá trị</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("forces")}
              className={`px-3 py-1.5 rounded-sm transition-colors flex items-center gap-1.5 ${
                viewMode === "forces"
                  ? "bg-carbon text-citron font-bold shadow-xs"
                  : "text-text-muted hover:text-carbon"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Theo 6 Lực lượng Xã hội (Social Linkage)</span>
            </button>
          </div>

          <span className="text-xs font-mono text-text-muted">
            {viewMode === "stages" ? "Khám phá quy trình 4 giai đoạn" : "Khám phá sự liên kết của 6 lực lượng"}
          </span>
        </div>

        {/* MODE 1: 4 STAGES VALUE CHAIN VIEW */}
        {viewMode === "stages" && (
          <div className="space-y-6">
            {/* Visual 4-Step Stepper Header */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {chainSteps.map((item, idx) => {
                const isSelected = activeStep === idx;
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.step}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveStep(idx)}
                    whileHover={shouldReduce ? {} : { y: -2 }}
                    className={`p-4 rounded-sm border text-left transition-all relative flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-vermilion ${
                      isSelected
                        ? "bg-carbon text-chalk border-carbon shadow-md"
                        : "bg-white text-carbon border-subtle hover:bg-stone-warm/60"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`font-mono text-xs font-bold ${
                            isSelected ? "text-citron" : "text-text-muted"
                          }`}
                        >
                          MẮT XÍCH {item.num}
                        </span>
                        <Icon className={`w-4 h-4 ${isSelected ? "text-citron" : "text-text-muted"}`} />
                      </div>
                      <span className="font-display font-bold text-base block">
                        {item.force}
                      </span>
                      <span className={`text-xs block mt-1 ${isSelected ? "text-stone-300" : "text-text-muted"}`}>
                        {item.stageTitle}
                      </span>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                      <span className={isSelected ? "text-citron" : "text-stone-400"}>
                        {isSelected ? "Đang chọn" : "Bấm để xem"}
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? "text-citron" : "text-stone-400"}`} />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Stage Detail Card with Photographic Support */}
            <div className="bg-white border border-subtle rounded-sm shadow-paper-subtle p-6 sm:p-8 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentChain.step}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-subtle pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-carbon text-citron font-mono font-bold text-xs rounded-sm">
                          GIAI ĐOẠN {currentChain.num}
                        </span>
                        <span className="font-mono text-xs text-vermilion font-semibold">
                          {currentChain.force}
                        </span>
                      </div>
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-carbon">
                        {currentChain.title}
                      </h3>
                    </div>
                    <SourceBadge sourceId={currentChain.sourceId} onClick={onOpenSourceModal} />
                  </div>

                  {/* Main Grid: Info Left + Photo Right */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 space-y-4 font-body text-sm text-stone-700 leading-relaxed">
                      <div>
                        <span className="font-mono text-xs font-bold uppercase text-carbon block mb-1">
                          Chủ thể thực hiện trực tiếp:
                        </span>
                        <p className="italic text-stone-800 bg-stone-warm/50 p-2.5 rounded-sm border border-subtle/50">
                          {currentChain.actors}
                        </p>
                      </div>

                      <div>
                        <span className="font-mono text-xs font-bold uppercase text-carbon block mb-1">
                          Hành động &amp; Quy trình chuyên môn:
                        </span>
                        <p>{currentChain.action}</p>
                      </div>

                      <div className="p-3 bg-chalk rounded-sm border-l-4 border-l-citron border-y border-r border-subtle">
                        <span className="font-mono text-xs font-bold uppercase text-carbon block mb-1">
                          Ý nghĩa trong liên minh kinh tế:
                        </span>
                        <p className="text-stone-800">{currentChain.significance}</p>
                      </div>
                    </div>

                    {/* Right: Authentic Documentary Photo & Demographics */}
                    <div className="lg:col-span-5 space-y-4">
                      <figure className="overflow-hidden rounded-sm border border-subtle bg-carbon shadow-sm">
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={currentChain.imageSrc}
                            alt={currentChain.imageAlt}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            loading="eager"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-carbon/75 via-transparent to-transparent pointer-events-none" />
                          <span className="absolute bottom-2 left-2 text-[10px] font-mono text-citron bg-black/75 px-2 py-0.5 rounded">
                            Thực tế chuỗi giá trị
                          </span>
                        </div>
                        <figcaption className="p-2.5 bg-stone-warm/90 border-t border-subtle/50 text-xs font-mono text-stone-700 leading-snug">
                          {currentChain.imageCaption}
                        </figcaption>
                      </figure>

                      {/* Women & Youth Presence in this stage */}
                      <div className="bg-stone-warm/60 p-4 rounded-sm border border-subtle space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-vermilion uppercase">
                          <Sparkles className="w-4 h-4 text-vermilion" />
                          <span>Sự Hiện diện của Phụ nữ &amp; Thanh niên</span>
                        </div>
                        <p className="font-body text-xs text-stone-700 leading-relaxed italic">
                          &ldquo;{currentChain.womenYouthRole}&rdquo;
                        </p>
                        <div className="text-[10px] font-mono text-text-muted border-t border-subtle/60 pt-2">
                          Minh chứng cho tính chất giao thoa của 2 nhóm nhân khẩu học.
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* MODE 2: 6 SOCIAL FORCES LINKAGE NETWORK VIEW */}
        {viewMode === "forces" && (
          <div className="space-y-6">
            {/* Force Selector Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {socialForcesInRice.map((force) => {
                const isSelected = activeForceKey === force.key;
                const Icon = force.icon;
                return (
                  <button
                    key={force.key}
                    type="button"
                    onClick={() => setActiveForceKey(force.key)}
                    className={`p-3 rounded-sm border text-left transition-all flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-vermilion ${
                      isSelected
                        ? "bg-carbon text-chalk border-carbon shadow-md ring-2 ring-carbon"
                        : "bg-white text-carbon border-subtle hover:bg-stone-warm"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-4 h-4 ${isSelected ? "text-citron" : force.color}`} />
                      <span className="text-[10px] font-mono text-stone-400">#link</span>
                    </div>
                    <span className="font-display font-bold text-xs sm:text-sm leading-tight">
                      {force.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Social Linkage Detailed Matrix Box */}
            <div className="bg-white border-2 border-carbon rounded-sm p-6 sm:p-8 shadow-paper-subtle">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeForceData.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-subtle pb-4">
                    <div>
                      <span className="font-mono text-xs font-bold uppercase text-citron bg-carbon px-2 py-0.5 rounded-sm">
                        LỰC LƯỢNG KẾT NỐI
                      </span>
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-carbon mt-1">
                        {activeForceData.name} trong Chuỗi Giá trị Hạt gạo
                      </h3>
                      <p className="font-serif italic text-sm text-stone-600 mt-1">
                        {activeForceData.presence}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 self-start sm:self-center">
                      {activeForceData.linkedStages.map((stg, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-stone-warm text-carbon font-mono text-xs rounded-sm border border-subtle font-semibold"
                        >
                          {stg}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-8 p-4 bg-stone-warm/50 rounded-sm border border-subtle space-y-2">
                      <span className="font-mono text-xs font-bold uppercase text-carbon block">
                        Phân tích Liên kết Xã hội học:
                      </span>
                      <p className="font-body text-sm text-stone-800 leading-relaxed">
                        {activeForceData.narrative}
                      </p>
                    </div>
                    <div className="md:col-span-4 overflow-hidden rounded-sm border border-subtle aspect-[4/3]">
                      <img
                        src={activeForceData.imageSrc}
                        alt={activeForceData.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Academic Caution on Prime Minister Decision 1490/QĐ-TTg */}
        <div className="p-5 sm:p-6 bg-white border border-subtle rounded-sm shadow-paper-subtle space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-subtle pb-2">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-vermilion">
              <ShieldAlert className="w-4 h-4 text-vermilion" />
              <span>Minh bạch Học thuật: Quyết định 1490/QĐ-TTg của Thủ tướng Chính phủ</span>
            </div>
            <SourceBadge sourceId="C-RICE-ILLUS" onClick={onOpenSourceModal} />
          </div>
          <h4 className="font-display font-bold text-base text-carbon">
            Đề án 1 triệu Héc-ta Lúa Chất lượng cao và Phát thải thấp đến năm 2030
          </h4>
          <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-body">
            Mô hình sư phạm hạt gạo được đối chiếu với <strong>Đề án phát triển bền vững 1 triệu héc-ta chuyên canh lúa chất lượng cao và phát thải thấp gắn với tăng trưởng xanh vùng Đồng bằng sông Cửu Long đến năm 2030</strong> (ban hành theo Quyết định số 1490/QĐ-TTg ngày 27/11/2023).
          </p>
          <div className="p-3 bg-stone-warm/60 rounded-sm border border-subtle text-xs text-text-muted leading-relaxed font-mono">
            <strong>Cảnh báo sư phạm: Mục tiêu phấn đấu đến năm 2030</strong> — Mốc 1 triệu héc-ta và chỉ tiêu phát thải là mục tiêu chiến lược, không phải là kết quả thống kê đã hoàn tất. Sử dụng ví dụ này nhằm minh họa cho mối liên minh tự nhiên và tất yếu giữa các giai tầng trong sự nghiệp phát triển kinh tế xanh của đất nước.
          </div>
        </div>

        <div className="pt-6">
          <SceneTransition
            fromNumber="PHÂN CẢNH 05"
            toNumber="PHÂN CẢNH 06"
            label="Từ Chuỗi Giá trị Hạt gạo đến Đúc kết & Bài Trắc nghiệm Nhận thức"
          />
        </div>
      </div>
    </section>
  );
};
