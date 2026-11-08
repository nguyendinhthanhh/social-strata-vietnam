"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QUIZ_QUESTIONS } from "@/lib/quiz-data";
import { SourceBadge } from "./SourceBadge";
import { GameHub } from "./game/GameHub";
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  BookOpen,
  Award,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Trophy,
} from "lucide-react";

interface Scene6TakeawayQuizProps {
  onOpenSourceModal: (sourceId?: string) => void;
}

export const Scene6TakeawayQuiz: React.FC<Scene6TakeawayQuizProps> = ({
  onOpenSourceModal,
}) => {
  const [activeQuizMode, setActiveQuizMode] = useState<"SOLO" | "LIVE_CHALLENGE">("SOLO");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{
    [questionId: string]: { selected: string; isCorrect: boolean };
  }>({});
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("joinRoom") || sessionStorage.getItem("vndt_game_player")) {
        setActiveQuizMode("LIVE_CHALLENGE");
      }
    }
  }, []);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;

  const handleSelectOption = (optionId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(optionId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || isAnswerSubmitted) return;
    const isCorrect = selectedOption === currentQ.correctAnswer;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: { selected: selectedOption, isCorrect },
    }));
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setUserAnswers({});
    setQuizFinished(false);
  };

  const correctCount = Object.values(userAnswers).filter(
    (ans) => ans.isCorrect
  ).length;

  return (
    <section
      id="scene-06"
      aria-label="Phân cảnh 06: Đúc kết Nhận thức & Thử thách Tương tác"
      className="py-16 sm:py-24 bg-stone-warm/40 text-carbon border-b border-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="border-b border-subtle pb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-vermilion uppercase tracking-kicker">
              Phân cảnh 06 / Không gian Triển lãm
            </span>
            <span className="text-text-muted text-xs font-mono">• Đúc kết &amp; Kiểm tra Nhận thức</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-carbon tracking-tight">
            Đúc kết Nhận thức &amp; Thử thách
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-text-muted mt-2 max-w-3xl">
            Khắc sâu bản chất lý luận Chủ nghĩa xã hội khoa học — Thử sức với 5 câu hỏi trắc nghiệm tương tác chuẩn môn học MLN131.
          </p>
        </div>

        {/* Part 1: Three Core Key Takeaways */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-kicker text-vermilion font-semibold">
              1. Ba Kết luận Then chốt
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-carbon">
              Những bài học cốt lõi từ Chương V (Chủ đề 07)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-subtle rounded-sm shadow-paper-subtle space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-subtle pb-2">
                  <span className="font-mono text-xs font-bold text-vermilion">KẾT LUẬN 01</span>
                  <SourceBadge sourceId="C-18-05" onClick={onOpenSourceModal} />
                </div>
                <h4 className="font-display font-bold text-lg text-carbon">
                  CCXH-GC là hạt nhân chi phối diện mạo xã hội
                </h4>
                <p className="font-body text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Không thể hiểu đúng xã hội nếu chỉ phân tách ngẫu nhiên theo nghề nghiệp. Cơ cấu xã hội – giai cấp, thông qua 3 mối quan hệ kinh tế – chính trị (sở hữu TLSX, tổ chức quản lý, địa vị và phân phối), giữ vị trí trung tâm, chi phối các cơ cấu khác và là căn cứ tối thượng để hoạch định chính sách phát triển quốc gia.
                </p>
              </div>
              <div className="pt-2 border-t border-subtle text-[11px] font-mono text-text-muted">
                Bản chất cấu trúc nền tảng
              </div>
            </div>

            <div className="p-6 bg-white border border-subtle rounded-sm shadow-paper-subtle space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-subtle pb-2">
                  <span className="font-mono text-xs font-bold text-vermilion">KẾT LUẬN 02</span>
                  <div className="flex gap-1">
                    <SourceBadge sourceId="C-18-11" onClick={onOpenSourceModal} />
                    <SourceBadge sourceId="C-18-12" onClick={onOpenSourceModal} />
                  </div>
                </div>
                <h4 className="font-display font-bold text-lg text-carbon">
                  Biến đổi giai tầng phản ánh kinh tế thị trường định hướng XHCN
                </h4>
                <p className="font-body text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Cơ cấu giai cấp luôn biến động cùng cơ cấu kinh tế. Nền kinh tế nhiều thành phần mở đường cho sự phát triển của đội ngũ doanh nhân (tư nhân), sự phân hóa đa dạng của người lao động; đồng thời đặt ra yêu cầu giữ vững định hướng xã hội chủ nghĩa để kinh tế phục vụ con người, không để phân hóa biến thành bất công giai cấp.
                </p>
              </div>
              <div className="pt-2 border-t border-subtle text-[11px] font-mono text-text-muted">
                Quy luật vận động khách quan
              </div>
            </div>

            <div className="p-6 bg-white border border-subtle rounded-sm shadow-paper-subtle space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-subtle pb-2">
                  <span className="font-mono text-xs font-bold text-vermilion">KẾT LUẬN 03</span>
                  <div className="flex gap-1">
                    <SourceBadge sourceId="C-19-08" onClick={onOpenSourceModal} />
                    <SourceBadge sourceId="C-20-05" onClick={onOpenSourceModal} />
                  </div>
                </div>
                <h4 className="font-display font-bold text-lg text-carbon">
                  Liên minh Giai cấp, Tầng lớp là cội nguồn sức mạnh phát triển
                </h4>
                <p className="font-body text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Dưới sự lãnh đạo của Đảng, liên minh Công – Nông – Trí thức, cùng sự tham gia của Doanh nhân, Phụ nữ và Thanh niên trên cả 3 trụ cột (kinh tế – chính trị – văn hóa xã hội) là nhân tố quyết định bảo vệ độc lập, đẩy lùi tiêu cực và huy động tối đa sức mạnh của toàn dân tộc cho mục tiêu dân giàu, nước mạnh, công bằng, văn minh.
                </p>
              </div>
              <div className="pt-2 border-t border-subtle text-[11px] font-mono text-text-muted">
                Động lực phát triển dân tộc
              </div>
            </div>
          </div>

          {/* Documentary Visual Vignette on National Unity & Alliance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <figure className="overflow-hidden rounded-sm border border-subtle bg-carbon shadow-xs">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src="/images/alliance_politics_slide.jpg"
                  alt="Tư liệu liên minh chính trị: Bảo vệ độc lập dân tộc và định hướng XHCN"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/75 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-citron bg-black/75 px-2 py-0.5 rounded">
                  Tư liệu Slide 14 Tiết 20
                </span>
              </div>
              <figcaption className="p-2.5 bg-stone-warm/90 border-t border-subtle/50 text-xs font-mono text-stone-700 leading-snug">
                Liên minh chính trị: Giữ vững độc lập dân tộc và định hướng XHCN dưới sự lãnh đạo của Đảng.
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-sm border border-subtle bg-carbon shadow-xs">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src="/images/alliance_culture_slide.jpg"
                  alt="Tư liệu liên minh văn hóa - xã hội: Khối Đại đoàn kết toàn dân tộc"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/75 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-citron bg-black/75 px-2 py-0.5 rounded">
                  Tư liệu Slide 16 Tiết 20
                </span>
              </div>
              <figcaption className="p-2.5 bg-stone-warm/90 border-t border-subtle/50 text-xs font-mono text-stone-700 leading-snug">
                Liên minh văn hóa - xã hội: Xây dựng con người toàn diện và củng cố khối Đại đoàn kết toàn dân tộc.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Part 2: Interactive Cognitive Challenge (Solo Practice vs Multiplayer Arena) */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <span className="font-mono text-xs uppercase tracking-kicker text-vermilion font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-vermilion" /> 2. Thử thách Nhận thức (Interactive Cognitive Challenge)
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-carbon">
                Kiểm tra Lý luận &amp; Đấu trường Tri thức
              </h3>
              <p className="font-body text-sm sm:text-base text-stone-700 leading-relaxed">
                Lựa chọn chế độ ôn tập độc lập cá nhân 5 câu hỏi chuẩn mực, hoặc tham gia Đấu trường Trực tiếp nhiều người chơi bằng điện thoại theo thời gian thực.
              </p>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-warm rounded-sm border border-subtle flex-shrink-0">
              <button
                type="button"
                onClick={() => setActiveQuizMode("SOLO")}
                className={`py-2 px-3.5 rounded-sm text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                  activeQuizMode === "SOLO"
                    ? "bg-carbon text-chalk shadow-sm"
                    : "text-stone-600 hover:text-carbon"
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Ôn tập Cá nhân (5 câu)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveQuizMode("LIVE_CHALLENGE")}
                className={`py-2 px-3.5 rounded-sm text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                  activeQuizMode === "LIVE_CHALLENGE"
                    ? "bg-vermilion text-white shadow-sm ring-1 ring-vermilion"
                    : "text-stone-600 hover:text-carbon"
                }`}
              >
                <Trophy className="w-3.5 h-3.5 text-amber-300" />
                <span>Cùng chơi • Đấu trường Tri thức</span>
                <span className="text-[10px] px-1 py-0.2 bg-citron text-carbon rounded font-black animate-pulse">
                  LIVE 12 CÂU
                </span>
              </button>
            </div>
          </div>

          {activeQuizMode === "LIVE_CHALLENGE" ? (
            <GameHub
              onBackToSolo={() => setActiveQuizMode("SOLO")}
              onOpenSourceModal={onOpenSourceModal}
            />
          ) : (
            <div className="bg-white border-2 border-carbon rounded-sm shadow-paper-subtle p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
            {!quizFinished ? (
              <div className="space-y-6">
                {/* Visual Step Progress Tracker (1, 2, 3, 4, 5) */}
                <div className="space-y-3 pb-4 border-b border-subtle">
                  <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                    <span className="uppercase tracking-wider font-semibold text-carbon">
                      Tiến độ kiểm tra: Câu hỏi {currentQuestionIndex + 1} / {totalQuestions}
                    </span>
                    <span className="text-vermilion font-bold">
                      {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%
                    </span>
                  </div>

                  {/* Step Indicators */}
                  <div className="grid grid-cols-5 gap-2">
                    {QUIZ_QUESTIONS.map((q, idx) => {
                      const answered = userAnswers[q.id];
                      const isCurrent = currentQuestionIndex === idx;

                      let statusClass = "bg-stone-warm text-stone-500 border-subtle";
                      if (answered) {
                        statusClass = answered.isCorrect
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-vermilion text-white border-vermilion";
                      } else if (isCurrent) {
                        statusClass = "bg-carbon text-citron border-carbon ring-2 ring-citron/50";
                      }

                      return (
                        <div
                          key={q.id}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            answered
                              ? answered.isCorrect
                                ? "bg-emerald-600"
                                : "bg-vermilion"
                              : isCurrent
                              ? "bg-carbon"
                              : "bg-stone-200"
                          }`}
                          title={`Câu ${idx + 1}`}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Animated Question Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQ.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* Question Header & Source */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2 py-0.5 bg-stone-warm text-carbon font-mono text-xs rounded-sm font-semibold">
                        Chủ đề: {currentQ.topic}
                      </span>
                      <SourceBadge
                        sourceId={currentQ.sourceId}
                        onClick={onOpenSourceModal}
                      />
                    </div>

                    <h4 className="font-display font-bold text-lg sm:text-xl text-carbon leading-snug">
                      {currentQ.question}
                    </h4>

                    {/* 4 Options Grid */}
                    <div className="space-y-3" role="radiogroup" aria-label="Các phương án trả lời">
                      {currentQ.options.map((opt) => {
                        const isSelected = selectedOption === opt.id;
                        const isCorrectOpt = opt.id === currentQ.correctAnswer;

                        let optClasses =
                          "p-4 rounded-sm border text-left transition-all flex items-start gap-3 w-full ";

                        if (!isAnswerSubmitted) {
                          optClasses += isSelected
                            ? "bg-carbon text-chalk border-carbon shadow-sm"
                            : "bg-chalk text-carbon border-subtle hover:bg-stone-warm hover:border-carbon/50";
                        } else {
                          // Answer submitted state
                          if (isCorrectOpt) {
                            optClasses +=
                              "bg-emerald-50 border-emerald-600 text-emerald-950 font-medium ring-1 ring-emerald-600";
                          } else if (isSelected && !isCorrectOpt) {
                            optClasses +=
                              "bg-rose-50 border-vermilion text-rose-950 ring-1 ring-vermilion";
                          } else {
                            optClasses += "bg-white text-stone-400 border-subtle/60 opacity-60";
                          }
                        }

                        return (
                          <motion.button
                            key={opt.id}
                            type="button"
                            role="radio"
                            aria-checked={isSelected}
                            onClick={() => handleSelectOption(opt.id)}
                            disabled={isAnswerSubmitted}
                            whileHover={!isAnswerSubmitted ? { x: 3 } : {}}
                            whileTap={!isAnswerSubmitted ? { scale: 0.99 } : {}}
                            className={optClasses}
                          >
                            <span
                              className={`w-6 h-6 rounded-sm font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                isSelected && !isAnswerSubmitted
                                  ? "bg-citron text-carbon"
                                  : isAnswerSubmitted && isCorrectOpt
                                  ? "bg-emerald-600 text-white"
                                  : isAnswerSubmitted && isSelected && !isCorrectOpt
                                  ? "bg-vermilion text-white"
                                  : "bg-white border border-subtle text-carbon"
                              }`}
                            >
                              {opt.id}
                            </span>
                            <span className="font-body text-xs sm:text-sm leading-relaxed flex-1">
                              {opt.text}
                            </span>
                            {isAnswerSubmitted && isCorrectOpt && (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                            )}
                            {isAnswerSubmitted && isSelected && !isCorrectOpt && (
                              <XCircle className="w-5 h-5 text-vermilion flex-shrink-0" />
                            )}
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* Animated Explanation Box (after submission) */}
                    <AnimatePresence>
                      {isAnswerSubmitted && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`p-5 rounded-sm border space-y-3 overflow-hidden ${
                            selectedOption === currentQ.correctAnswer
                              ? "bg-emerald-50/80 border-emerald-300"
                              : "bg-rose-50/80 border-vermilion/40"
                          }`}
                        >
                          <div className="flex items-center justify-between border-b border-subtle/40 pb-2">
                            <div className="flex items-center gap-2">
                              {selectedOption === currentQ.correctAnswer ? (
                                <>
                                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                  <span className="font-mono text-xs font-bold uppercase text-emerald-800">
                                    CHÍNH XÁC! Bạn đã nắm vững kiến thức bài học.
                                  </span>
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-5 h-5 text-vermilion" />
                                  <span className="font-mono text-xs font-bold uppercase text-vermilion">
                                    CHƯA CHÍNH XÁC! Hãy đọc kỹ giải thích dưới đây.
                                  </span>
                                </>
                              )}
                            </div>
                            <span className="text-xs font-mono text-text-muted">
                              Đáp án: <strong>{currentQ.correctAnswer}</strong>
                            </span>
                          </div>

                          <div className="space-y-2 text-xs sm:text-sm font-body text-stone-800 leading-relaxed">
                            <span className="font-mono text-xs font-bold uppercase block text-carbon">
                              Giải thích học thuật:
                            </span>
                            <p>{currentQ.explanation}</p>
                          </div>

                          <div className="pt-2 border-t border-subtle/40 flex items-center justify-between text-xs font-mono text-text-muted">
                            <span>Trích dẫn: {currentQ.sourceCitation}</span>
                            <button
                              type="button"
                              onClick={() => onOpenSourceModal(currentQ.sourceId)}
                              className="text-vermilion font-semibold hover:underline flex items-center gap-1"
                            >
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>Mở nguồn [{currentQ.sourceId}]</span>
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Action Controls: Submit or Next */}
                    <div className="pt-4 border-t border-subtle flex items-center justify-between">
                      <span className="text-xs font-mono text-text-muted">
                        {!isAnswerSubmitted
                          ? "Chọn một phương án và bấm 'Xác nhận câu trả lời'"
                          : "Đã kiểm tra kết quả"}
                      </span>

                      {!isAnswerSubmitted ? (
                        <button
                          type="button"
                          onClick={handleSubmitAnswer}
                          disabled={!selectedOption}
                          className={`px-5 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-vermilion ${
                            selectedOption
                              ? "bg-vermilion text-white hover:bg-dark-red shadow-sm cursor-pointer"
                              : "bg-stone-200 text-stone-400 cursor-not-allowed"
                          }`}
                        >
                          <span>Xác nhận câu trả lời</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleNextQuestion}
                          className="px-5 py-2 bg-carbon text-citron hover:bg-black rounded-sm text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-citron"
                        >
                          <span>
                            {currentQuestionIndex < totalQuestions - 1
                              ? "Câu hỏi tiếp theo"
                              : "Xem kết quả bài trắc nghiệm"}
                          </span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : (
              /* Quiz Finished Summary View */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-carbon text-citron mx-auto flex items-center justify-center shadow-md">
                  <Trophy className="w-8 h-8 text-citron" />
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-kicker text-vermilion font-bold">
                    Hoàn thành bài kiểm tra nhận thức
                  </span>
                  <h4 className="font-display font-black text-3xl sm:text-4xl text-carbon">
                    Kết quả: {correctCount} / {totalQuestions} Câu đúng
                  </h4>
                  <p className="font-serif italic text-base text-stone-600 max-w-md mx-auto">
                    {correctCount === 5
                      ? "Xuất sắc! Bạn đã nắm vững toàn diện bản chất lý luận Chủ nghĩa xã hội khoa học Chương 5."
                      : correctCount >= 3
                      ? "Rất tốt! Bạn đã nắm vững các khái niệm cơ bản về Cơ cấu xã hội – giai cấp và Liên minh."
                      : "Cần xem lại bài! Hãy rà soát lại các phân cảnh 02, 03 và 04 để củng cố nền tảng lý luận."}
                  </p>
                </div>

                {/* Score breakdown bar */}
                <div className="max-w-xs mx-auto p-3 bg-stone-warm rounded-sm border border-subtle text-xs font-mono">
                  <div className="flex justify-between text-text-muted mb-1">
                    <span>Điểm số đạt được:</span>
                    <span className="font-bold text-carbon">
                      {Math.round((correctCount / totalQuestions) * 100)}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-vermilion"
                      style={{
                        width: `${(correctCount / totalQuestions) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleResetQuiz}
                    className="px-5 py-2.5 bg-carbon text-chalk hover:bg-black rounded-sm text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <RotateCcw className="w-4 h-4 text-citron" />
                    <span>Làm lại trắc nghiệm</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenSourceModal()}
                    className="px-5 py-2.5 bg-white border border-subtle text-carbon hover:bg-stone-warm rounded-sm text-xs font-mono font-medium transition-colors flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4 text-vermilion" />
                    <span>Tra cứu 33 Mã nguồn</span>
                  </button>
                </div>
              </motion.div>
            )}
          </div>
          )}
        </div>

        {/* Part 3: Academic Source Commitment & Media Rights */}
        <div className="p-6 bg-white border border-subtle rounded-sm shadow-paper-subtle space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-subtle pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-vermilion" />
              <span className="font-mono text-xs font-bold uppercase text-carbon">
                Minh bạch Trách nhiệm Học thuật &amp; Bản quyền Tư liệu
              </span>
            </div>
            <button
              type="button"
              onClick={() => onOpenSourceModal()}
              className="text-xs font-mono text-vermilion font-semibold hover:underline flex items-center gap-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Mở Từ điển 33 Nguồn</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-body text-stone-700">
            <div className="space-y-1 p-3 bg-stone-warm/50 rounded-sm border border-subtle/50">
              <span className="font-mono font-bold uppercase text-carbon block">
                1. Nguồn gốc Bài giảng Chính thức
              </span>
              <p>
                Toàn bộ định nghĩa, luận điểm và khung phân tích được đối soát trực tiếp từ bài giảng PPTX Tiết 18, 19, 20 của giảng viên bộ môn MLN131.
              </p>
            </div>
            <div className="space-y-1 p-3 bg-stone-warm/50 rounded-sm border border-subtle/50">
              <span className="font-mono font-bold uppercase text-carbon block">
                2. Văn kiện &amp; Pháp luật
              </span>
              <p>
                Tham chiếu Văn kiện Đại hội XIII của Đảng, Hiến pháp 2013 (Điều 53, 54 về Đất đai) và Luật Thanh niên 2020.
              </p>
            </div>
            <div className="space-y-1 p-3 bg-stone-warm/50 rounded-sm border border-subtle/50">
              <span className="font-mono font-bold uppercase text-carbon block">
                3. Đề án Chuỗi Lúa gạo 2030
              </span>
              <p>
                Quyết định 1490/QĐ-TTg ngày 27/11/2023 của Thủ tướng Chính phủ: mục tiêu phấn đấu đến năm 2030, không phải số liệu đã hoàn thành.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
