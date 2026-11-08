"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  BookOpen,
  Eye,
  EyeOff,
  Type,
  ChevronRight,
  Sparkles,
  Layers,
  Sun,
  Moon,
} from "lucide-react";

interface NavbarProps {
  onOpenSourceModal: (sourceId?: string) => void;
}

const FONT_SIZES = ["text-size-sm", "text-size-md", "text-size-lg"] as const;
const FONT_SIZE_LABELS = ["A-", "A", "A+"] as const;
const FONT_SIZE_DESCRIPTIONS = [
  "Cỡ chữ nhỏ (15px)",
  "Cỡ chữ chuẩn (16px)",
  "Cỡ chữ lớn (18px)",
] as const;

const NAV_ITEMS = [
  {
    id: "scene-01",
    label: "01. Giới thiệu",
    short: "01",
    title: "Bức tranh",
    fullTitle: "Phân cảnh 01: Bức tranh Xã hội",
  },
  {
    id: "scene-02",
    label: "02. Tam giác Quan hệ",
    short: "02",
    title: "Tọa độ",
    fullTitle: "Phân cảnh 02: Giải mã Tọa độ & Tam giác Quan hệ",
  },
  {
    id: "scene-03",
    label: "03. Ba Quy luật",
    short: "03",
    title: "Biến chuyển",
    fullTitle: "Phân cảnh 03: Ba Quy luật Biến chuyển",
  },
  {
    id: "scene-04",
    label: "04. 6 Lực lượng",
    short: "04",
    title: "6 Lực lượng",
    fullTitle: "Phân cảnh 04: Lát cắt Đương đại — 6 Lực lượng",
  },
  {
    id: "scene-05",
    label: "05. Hạt gạo Liên minh",
    short: "05",
    title: "Hạt gạo",
    fullTitle: "Phân cảnh 05: Hạt gạo Liên minh — Chuỗi Giá trị",
  },
  {
    id: "scene-06",
    label: "06. Đúc kết & Quiz",
    short: "06",
    title: "Quiz",
    fullTitle: "Phân cảnh 06: Đúc kết Nhận thức & Trắc nghiệm",
  },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenSourceModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSizeIndex, setFontSizeIndex] = useState(1); // 0: sm, 1: md, 2: lg
  const [activeSection, setActiveSection] = useState("scene-01");

  const fontSizes = FONT_SIZES;
  const fontSizeLabels = FONT_SIZE_LABELS;
  const fontSizeDescriptions = FONT_SIZE_DESCRIPTIONS;
  const navItems = NAV_ITEMS;

  // Reading progress and active section tracker
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollY > 40);

      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setReadingProgress(Math.min(100, Math.max(0, progress)));

      const sections = [
        "scene-01",
        "scene-02",
        "scene-03",
        "scene-04",
        "scene-05",
        "scene-06",
      ];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const applyFontSize = useCallback((idx: number) => {
    fontSizes.forEach((cls) => document.documentElement.classList.remove(cls));
    document.documentElement.classList.add(fontSizes[idx]);
  }, [fontSizes]);

  // Initialize preferences
  useEffect(() => {
    const storedMotion = localStorage.getItem("vndt-reduced-motion");
    const systemPrefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shouldReduce = storedMotion !== null ? storedMotion === "true" : systemPrefersReduced;
    setReducedMotion(shouldReduce);
    if (shouldReduce) {
      document.documentElement.classList.add("reduced-motion");
    } else {
      document.documentElement.classList.remove("reduced-motion");
    }

    const storedSize = localStorage.getItem("vndt-font-size");
    if (storedSize) {
      const idx = parseInt(storedSize, 10);
      if (!isNaN(idx) && idx >= 0 && idx < fontSizes.length) {
        setFontSizeIndex(idx);
        applyFontSize(idx);
      }
    }

    const storedTheme = localStorage.getItem("vndt-theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (systemPrefersDark) {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    }
  }, [applyFontSize, fontSizes.length]);

  const toggleTheme = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    localStorage.setItem("vndt-theme", nextMode ? "dark" : "light");
    if (nextMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleReducedMotion = () => {
    const nextState = !reducedMotion;
    setReducedMotion(nextState);
    localStorage.setItem("vndt-reduced-motion", String(nextState));
    if (nextState) {
      document.documentElement.classList.add("reduced-motion");
    } else {
      document.documentElement.classList.remove("reduced-motion");
    }
  };

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === "scene-01") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "#scene-01");
      setActiveSection("scene-01");
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });

      window.history.pushState(null, "", `#${id}`);
      setActiveSection(id);
    }
  }, []);

  const handleMobileNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      if (id === "scene-01") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "#scene-01");
        setActiveSection("scene-01");
        return;
      }
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 64;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });

        window.history.pushState(null, "", `#${id}`);
        setActiveSection(id);
      }
    }, 120);
  }, []);

  const cycleFontSize = () => {
    const nextIdx = (fontSizeIndex + 1) % fontSizes.length;
    setFontSizeIndex(nextIdx);
    applyFontSize(nextIdx);
    localStorage.setItem("vndt-font-size", String(nextIdx));
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-chalk/90 backdrop-blur-md shadow-sm border-b border-subtle/80 py-1"
          : "bg-chalk border-b border-subtle py-2.5"
      }`}
    >
      {/* Precision Exhibition Reading Progress Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-stone-warm overflow-hidden"
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Tiến độ đọc bài triển lãm"
      >
        <div
          className="h-full bg-vermilion transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-14 sm:h-16">
          {/* Left: Distinctive Exhibition Identity Block with Larger Typographic Scale */}
          <a
            href="#scene-01"
            onClick={(e) => scrollToSection(e, "scene-01")}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-vermilion rounded-sm py-1 flex-shrink-0"
            aria-label="Trang chủ VIỆT NAM ĐA TẦNG — Triển lãm số MLN131"
          >
            {/* Geometric Exhibition Emblem */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-carbon dark:bg-stone-800 text-chalk flex items-center justify-center font-serif font-black text-sm tracking-wider border border-carbon dark:border-stone-700 group-hover:bg-vermilion group-hover:border-vermilion transition-colors duration-200 shadow-sm flex-shrink-0">
              <span>VĐ</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-citron ring-2 ring-chalk dark:ring-carbon" />
            </div>

            <div className="flex flex-col flex-shrink-0 whitespace-nowrap">
              <span className="font-display font-black text-base sm:text-lg lg:text-xl tracking-tight leading-none text-carbon dark:text-chalk group-hover:text-vermilion transition-colors whitespace-nowrap">
                VIỆT NAM ĐA TẦNG
              </span>
              <span className="text-xs sm:text-[13px] font-mono text-text-muted dark:text-stone-400 uppercase tracking-kicker mt-1 flex items-center gap-1.5 whitespace-nowrap">
                <span>MLN131</span>
                <span className="text-stone-400 dark:text-stone-600">/</span>
                <span className="text-vermilion font-semibold">CHỦ ĐỀ 07</span>
              </span>
            </div>
          </a>

          {/* Center: Curatorial Story-Progress Navigation with Larger Font (Desktop >= 1024px) */}
          <nav
            className="hidden lg:flex items-center bg-stone-warm/70 dark:bg-stone-900/60 border border-subtle/80 dark:border-stone-700/80 rounded-sm p-1.5 gap-1 font-mono flex-shrink-0"
            aria-label="Tiến trình tham quan 6 phân cảnh"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`relative px-3 sm:px-3.5 py-1.5 rounded-sm transition-all duration-200 flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-vermilion whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "text-chalk font-semibold z-10"
                      : "text-text-muted dark:text-stone-400 hover:text-carbon dark:hover:text-chalk hover:bg-stone-warm/80 dark:hover:bg-stone-800"
                  }`}
                  title={item.fullTitle || `${item.label}: ${item.title}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="exhibition-active-pill"
                      className="absolute inset-0 bg-carbon dark:bg-stone-800 rounded-sm shadow-sm pointer-events-none z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 text-xs sm:text-sm font-bold font-mono transition-colors ${isActive ? "text-citron" : "text-stone-400 dark:text-stone-500"}`}>
                    {item.short}
                  </span>
                  <span className={`relative z-10 font-sans text-sm sm:text-[15px] font-medium whitespace-nowrap transition-colors ${isActive ? "text-chalk font-semibold" : ""}`}>
                    {item.title}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right: Clean Exhibition Theme Control */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Desktop and Tablet Theme Toggle (>= 640px) */}
            <button
              type="button"
              onClick={toggleTheme}
              className={`hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-sm border transition-all duration-200 text-sm font-sans font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-vermilion whitespace-nowrap shadow-xs flex-shrink-0 ${
                isDarkMode
                  ? "bg-slate-800/90 border-stone-700 text-citron hover:bg-slate-700"
                  : "bg-white border-subtle text-carbon hover:bg-stone-warm hover:text-vermilion"
              }`}
              title={
                isDarkMode
                  ? "Chế độ hiển thị: Ban đêm (Tối) — Bấm để chuyển sang Ban ngày (Sáng)"
                  : "Chế độ hiển thị: Ban ngày (Sáng) — Bấm để chuyển sang Ban đêm (Tối)"
              }
              aria-label={`Chuyển đổi giao diện Sáng / Tối. Hiện tại: ${
                isDarkMode ? "Chế độ Tối (Ban đêm)" : "Chế độ Sáng (Ban ngày)"
              }`}
            >
              {isDarkMode ? (
                <>
                  <Moon className="w-4 h-4 text-citron flex-shrink-0" />
                  <span className="font-mono text-xs text-stone-300">Giao diện</span>
                  <span className="font-bold text-citron">Tối</span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="font-mono text-xs text-text-muted">Giao diện</span>
                  <span className="font-bold text-carbon">Sáng</span>
                </>
              )}
            </button>

            {/* Mobile Quick Theme Toggle (< 640px) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="sm:hidden p-2 rounded-sm bg-white dark:bg-slate-800 border border-subtle dark:border-stone-700 text-carbon hover:bg-stone-warm focus:outline-none focus-visible:ring-2 focus-visible:ring-vermilion flex-shrink-0"
              title="Chuyển đổi giao diện Sáng / Tối"
              aria-label={`Chuyển đổi giao diện Sáng / Tối. Hiện tại: ${
                isDarkMode ? "Chế độ Tối (Ban đêm)" : "Chế độ Sáng (Ban ngày)"
              }`}
            >
              {isDarkMode ? (
                <Moon className="w-4 h-4 text-citron flex-shrink-0" />
              ) : (
                <Sun className="w-4 h-4 text-amber-500 flex-shrink-0" />
              )}
            </button>

            {/* Mobile Exhibition Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-sm bg-white dark:bg-slate-800 border border-subtle dark:border-stone-700 text-carbon hover:bg-stone-warm focus:outline-none focus-visible:ring-2 focus-visible:ring-vermilion flex-shrink-0"
              aria-expanded={mobileMenuOpen}
              aria-label="Mở danh mục điều hướng phân cảnh di động"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Exhibition Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-t border-subtle bg-chalk/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-lg"
          >
            <div className="flex items-center justify-between text-xs font-mono text-text-muted pb-2 border-b border-subtle/60">
              <span className="uppercase tracking-kicker font-semibold text-vermilion">
                Lộ trình 6 Phân cảnh Triển lãm
              </span>
              <span>{Math.round(readingProgress)}% Hoàn thành</span>
            </div>

            {/* Mobile Quick Setting: Theme Toggle */}
            <div className="py-1">
              <button
                type="button"
                onClick={toggleTheme}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-sm border border-subtle bg-white text-carbon hover:bg-stone-warm transition-colors font-sans text-xs sm:text-sm font-medium"
                aria-label="Chuyển đổi giao diện Sáng / Tối"
              >
                {isDarkMode ? (
                  <>
                    <Moon className="w-4 h-4 text-citron" />
                    <span>Giao diện: <strong>Phòng trưng bày Ban đêm (Tối)</strong></span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span>Giao diện: <strong>Ban ngày (Sáng)</strong></span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleMobileNavClick(e, item.id)}
                    className={`flex items-center justify-between p-2.5 rounded-sm border transition-all ${
                      isActive
                        ? "bg-carbon text-chalk border-carbon font-semibold"
                        : "bg-white text-carbon border-subtle hover:bg-stone-warm"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-xs font-bold ${isActive ? "text-citron" : "text-vermilion"}`}>
                        {item.short}
                      </span>
                      <span className="font-display text-sm">{item.fullTitle || item.label}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-citron" : "text-stone-400"}`} />
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-subtle flex items-center justify-between text-xs text-text-muted font-mono">
              <span>Đại học FPT • MLN131</span>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSourceModal();
                }}
                className="text-vermilion font-semibold hover:underline flex items-center gap-1"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Tra cứu 33 Nguồn</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
