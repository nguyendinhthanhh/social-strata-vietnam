"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  HelpCircle,
  ShieldAlert,
  Layers,
  Users,
  Factory,
  Sprout,
  GraduationCap,
  Briefcase,
  Flame,
  Store,
  HeartHandshake,
  BookOpen,
} from "lucide-react";
import {
  MATCHING_TASKS,
  SOCIAL_FORCE_GROUPS,
  MATCHING_GAME_CONFIG,
} from "@/lib/matchingGameData";
import {
  SocialForceId,
  MatchingTaskItem,
  SocialForceGroup,
} from "@/lib/matchingGameTypes";
import { SourceBadge } from "@/components/SourceBadge";

interface RoleMatchingGameProps {
  onOpenSourceModal?: (sourceId?: string) => void;
  onProceedToScene05?: () => void;
}

export const RoleMatchingGame: React.FC<RoleMatchingGameProps> = ({
  onOpenSourceModal,
  onProceedToScene05,
}) => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [selectedGroupId, setSelectedGroupId] = useState<SocialForceId | null>(null);
  const [taskAttempts, setTaskAttempts] = useState<Record<string, number>>({});
  const [completedTasks, setCompletedTasks] = useState<
    Record<
      string,
      {
        selectedGroupId: SocialForceId;
        attempts: number;
        scoreAwarded: number;
      }
    >
  >({});
  const [totalScore, setTotalScore] = useState(0);
  const [matchState, setMatchState] = useState<"IDLE" | "CORRECT" | "INCORRECT">("IDLE");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [distractorExplanation, setDistractorExplanation] = useState<string>("");
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [showKeywords, setShowKeywords] = useState(false);

  const tasks = MATCHING_TASKS;
  const currentTask: MatchingTaskItem = tasks[currentTaskIndex];
  const isLastTask = currentTaskIndex === tasks.length - 1;

  const getForceIcon = (id: SocialForceId) => {
    switch (id) {
      case "cong-nhan":
        return Factory;
      case "nong-dan":
        return Sprout;
      case "tri-thuc":
        return GraduationCap;
      case "doanh-nhan":
        return Store;
      case "phu-nu":
        return Users;
      case "thanh-nien":
        return Flame;
      case "lien-minh":
        return Layers;
      default:
        return Users;
    }
  };

  // Handle matching attempt
  const handleAttemptMatch = (groupId: SocialForceId) => {
    if (matchState === "CORRECT") return;

    setSelectedGroupId(groupId);
    const taskId = currentTask.id;
    const previousAttempts = taskAttempts[taskId] || 0;
    const currentAttempt = previousAttempts + 1;

    setTaskAttempts((prev) => ({
      ...prev,
      [taskId]: currentAttempt,
    }));

    if (groupId === currentTask.targetActorId) {
      // Correct Match
      let points = MATCHING_GAME_CONFIG.scoring.firstAttempt;
      if (currentAttempt === 2) {
        points = MATCHING_GAME_CONFIG.scoring.secondAttempt;
      } else if (currentAttempt >= 3) {
        points = MATCHING_GAME_CONFIG.scoring.thirdPlusAttempt;
      }

      setMatchState("CORRECT");
      setTotalScore((prev) => prev + points);
      setCompletedTasks((prev) => ({
        ...prev,
        [taskId]: {
          selectedGroupId: groupId,
          attempts: currentAttempt,
          scoreAwarded: points,
        },
      }));
      setFeedbackMessage(`Chính xác! Bạn được cộng +${points} điểm.`);
      setDistractorExplanation("");
    } else {
      // Incorrect Match: Extract specific pedagogical whyNotOthers rationale
      setMatchState("INCORRECT");
      const specificDistractorWhy = currentTask.whyNotOthers?.[groupId];
      const selectedGroup = SOCIAL_FORCE_GROUPS.find((g) => g.id === groupId);

      if (specificDistractorWhy) {
        setDistractorExplanation(
          `Vì sao chưa phải ${selectedGroup?.name}? ${specificDistractorWhy}`
        );
      } else {
        setDistractorExplanation(
          `Lực lượng ${selectedGroup?.name} chưa phản ánh đúng vị thế đặc trưng trong nhiệm vụ này. Hãy đọc kỹ các từ khóa nhận diện và thử lại!`
        );
      }
      setFeedbackMessage("Chưa chính xác • Hãy phân tích lại và thử lại!");
    }
  };

  const handleNextTask = () => {
    if (isLastTask) {
      // Finish game and award completion bonus
      setTotalScore((prev) => prev + MATCHING_GAME_CONFIG.scoring.completionBonus);
      setIsGameFinished(true);
    } else {
      setCurrentTaskIndex((prev) => prev + 1);
      setSelectedGroupId(null);
      setMatchState("IDLE");
      setFeedbackMessage("");
      setDistractorExplanation("");
      setShowKeywords(false);
    }
  };

  const handleResetGame = () => {
    setCurrentTaskIndex(0);
    setSelectedGroupId(null);
    setTaskAttempts({});
    setCompletedTasks({});
    setTotalScore(0);
    setMatchState("IDLE");
    setFeedbackMessage("");
    setDistractorExplanation("");
    setIsGameFinished(false);
    setShowKeywords(false);
  };

  // Completion Screen
  if (isGameFinished) {
    const totalPossible = MATCHING_GAME_CONFIG.scoring.maxPossibleScore;
    const percentage = Math.round((totalScore / totalPossible) * 100);

    let rankTitle = "Hoàn Thành Xuất Sắc — Bậc Thầy Giải Mã Giai Tầng";
    let rankColor = "text-citron";
    if (percentage < 70) {
      rankTitle = "Hoàn Thành Tốt — Cần Rèn Luyện Thêm Kiến Thức";
      rankColor = "text-amber-400";
    }

    return (
      <div
        data-testid="matching-game-completion"
        className="bg-carbon text-chalk rounded-md border border-white/10 shadow-2xl p-6 sm:p-10 space-y-8 animate-fadeIn"
      >
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex p-3 rounded-full bg-citron/20 text-citron mb-2">
            <Trophy className="w-10 h-10 animate-bounce" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-citron font-bold block">
            Hoàn tất 7 Mảnh ghép Xã hội
          </span>
          <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
            CHÚC MỪNG BẠN ĐÃ GIẢI MÃ THÀNH CÔNG!
          </h3>
          <p className={`font-mono text-sm sm:text-base font-bold ${rankColor}`}>
            {rankTitle}
          </p>
          <div className="inline-block py-2 px-6 rounded bg-charcoal-deep border border-white/10 mt-2">
            <span className="text-xs font-mono text-stone-400 block">Tổng điểm đạt được:</span>
            <span className="font-mono text-3xl sm:text-4xl font-black text-citron">
              {totalScore} <span className="text-base text-stone-400">/ {totalPossible} đ</span>
            </span>
            <span className="text-[11px] font-mono text-citron/80 block mt-0.5">
              (Đã bao gồm +100đ thưởng hoàn thành tất cả nhiệm vụ)
            </span>
          </div>
        </div>

        {/* Task Breakdown Table */}
        <div className="bg-charcoal-deep rounded-sm p-4 sm:p-6 border border-white/10 space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-stone-300 font-bold block pb-2 border-b border-white/10">
            Chi tiết 7 Nhiệm vụ Định vị Giai tầng
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {tasks.map((task) => {
              const res = completedTasks[task.id];
              const group = SOCIAL_FORCE_GROUPS.find((g) => g.id === task.targetActorId);
              return (
                <div
                  key={task.id}
                  className="p-3 rounded bg-black/40 border border-white/10 flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-stone-400">#{task.order}</span>
                      <span className="font-bold text-white font-sans">{group?.name}</span>
                    </div>
                    <p className="text-[11px] text-stone-300 line-clamp-1">{task.missionTitle}</p>
                    <span className="font-mono text-[10px] text-stone-400 block">
                      Số lần thử: <strong>{res?.attempts || 1}</strong>
                    </span>
                  </div>
                  <span className="font-mono font-bold text-citron text-sm flex-shrink-0">
                    +{res?.scoreAwarded || 100}đ
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-white/10">
          <button
            type="button"
            onClick={handleResetGame}
            className="w-full sm:w-auto px-6 py-3 rounded-sm border border-white/20 text-stone-300 hover:bg-white/10 font-mono text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Chơi lại từ đầu</span>
          </button>
          <button
            type="button"
            onClick={() => {
              if (onProceedToScene05) {
                onProceedToScene05();
              } else {
                const el = document.getElementById("scene-05");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="w-full sm:w-auto px-8 py-3 rounded-sm bg-vermilion text-white hover:bg-dark-red font-mono text-xs sm:text-sm font-bold transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <span>Tiếp tục: Khám phá Chuỗi Hạt gạo Liên minh (#scene-05)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Active Game Canvas
  return (
    <div
      data-testid="role-matching-game"
      className="bg-carbon text-chalk rounded-md border border-white/10 shadow-2xl p-4 sm:p-6 md:p-8 space-y-6"
    >
      {/* Game Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-citron text-carbon flex items-center justify-center font-serif font-black text-sm shadow-sm flex-shrink-0">
            <Sparkles className="w-5 h-5 text-carbon" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-citron font-bold">
                Thử Thách Tương Tác • Phân Cảnh 04
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-stone-300 font-mono">
                {currentTaskIndex + 1} / {tasks.length}
              </span>
            </div>
            <h3 className="font-display font-black text-lg sm:text-xl md:text-2xl text-white">
              GHÉP VAI TRÒ — NHỮNG MẢNH GHÉP XÃ HỘI
            </h3>
          </div>
        </div>

        {/* Live Score Display */}
        <div className="flex items-center gap-3">
          <div className="text-right bg-charcoal-deep px-3 py-1.5 rounded-sm border border-white/10">
            <span className="text-[10px] font-mono text-stone-400 block uppercase tracking-wider">
              Điểm tích lũy:
            </span>
            <span className="font-mono text-xl sm:text-2xl font-black text-citron">
              {totalScore} <span className="text-xs text-stone-400 font-normal">đ</span>
            </span>
          </div>
          <button
            type="button"
            onClick={handleResetGame}
            className="p-2 rounded-sm border border-white/10 text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Làm mới trò chơi"
            aria-label="Làm mới trò chơi"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Dots Indicator */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {tasks.map((t, idx) => {
          const isDone = Boolean(completedTasks[t.id]);
          const isCurrent = idx === currentTaskIndex;
          return (
            <div
              key={t.id}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isCurrent
                  ? "w-8 bg-citron"
                  : isDone
                  ? "w-4 bg-emerald-500"
                  : "w-3 bg-white/20"
              }`}
              title={`Nhiệm vụ ${idx + 1}: ${t.missionTitle}`}
            />
          );
        })}
      </div>

      {/* Central Task Exhibition Card — Asymmetrical Layout */}
      <div className="bg-charcoal-deep rounded-md p-4 sm:p-6 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column (Content & Story) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-sm bg-citron/20 text-citron font-mono text-xs font-bold uppercase tracking-wider">
              Nhiệm vụ {currentTask.order} • {currentTask.missionCode}
            </span>
            <SourceBadge
              sourceId={currentTask.sourceReference.primarySourceId}
              onClick={onOpenSourceModal}
            />
          </div>

          <div className="space-y-1.5">
            <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block">
              {currentTask.missionTitle}
            </span>
            <h4 className="font-display font-black text-xl sm:text-2xl text-white leading-snug">
              &ldquo;{currentTask.scenarioPrompt}&rdquo;
            </h4>
          </div>

          {/* Demographic Intersection Warning Note for Women & Youth */}
          {(currentTask.targetActorId === "phu-nu" ||
            currentTask.targetActorId === "thanh-nien") && (
            <div className="p-3 bg-amber-950/40 border border-amber-600/40 rounded-sm text-xs text-amber-200 leading-relaxed flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Lưu ý học thuật bắt buộc:</strong> {currentTask.targetActorId === "phu-nu"
                  ? "Phụ nữ là nhóm nhân khẩu học xã hội phân loại theo giới tính, mang tính chất giao thoa (intersectionality) trong mọi giai cấp, không phải giai cấp kinh tế độc lập."
                  : "Thanh niên là nhóm nhân khẩu học xã hội theo độ tuổi (16–30 tuổi theo Luật Thanh niên 2020), hiện diện giao thoa trong mọi giai cấp, không phải giai cấp kinh tế độc lập."}
              </span>
            </div>
          )}

          {/* Collapsible Distinctive Keywords */}
          <div>
            <button
              type="button"
              onClick={() => setShowKeywords(!showKeywords)}
              className="text-xs font-mono text-stone-400 hover:text-citron flex items-center gap-1.5 transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{showKeywords ? "Ẩn từ khóa nhận diện" : "Xem từ khóa nhận diện học thuật"}</span>
            </button>
            {showKeywords && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-2 p-3 bg-black/40 border border-white/10 rounded text-xs text-stone-300 font-sans space-y-1.5"
              >
                <span className="font-mono text-[10px] text-citron font-bold uppercase block">
                  Từ khóa đặc trưng từ Văn kiện &amp; Giáo trình:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentTask.distinctiveKeywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-white/10 text-stone-200 text-[11px] font-mono"
                    >
                      • {kw}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Right Column (Authentic Documentary Photograph) */}
        <div className="lg:col-span-5 space-y-2">
          <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden border border-white/10 bg-black/50 shadow-md">
            <Image
              src={currentTask.imageSrc}
              alt={currentTask.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2 left-2 right-2 text-[11px] font-sans text-stone-200 line-clamp-2 leading-tight">
              {currentTask.imageCaption}
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 px-1">
            <span>Căn cứ: {currentTask.sourceReference.slideCitation}</span>
            <span className="text-citron">Tư liệu xác thực</span>
          </div>
        </div>
      </div>

      {/* Feedback Banner (Animated) */}
      <AnimatePresence>
        {matchState !== "IDLE" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`p-4 rounded-sm border ${
              matchState === "CORRECT"
                ? "bg-emerald-950/60 border-emerald-500 text-emerald-200"
                : "bg-red-950/60 border-red-500 text-red-200"
            } space-y-2`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold font-sans text-sm">
                {matchState === "CORRECT" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>{feedbackMessage}</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span>{feedbackMessage}</span>
                  </>
                )}
              </div>
              {matchState === "CORRECT" && (
                <button
                  type="button"
                  data-testid="matching-next-btn"
                  onClick={handleNextTask}
                  className="px-4 py-1.5 rounded bg-emerald-500 hover:bg-emerald-400 text-carbon font-mono text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <span>{isLastTask ? "Xem kết quả tổng kết" : "Nhiệm vụ tiếp theo"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* In-depth Academic Explanation when Correct */}
            {matchState === "CORRECT" && (
              <div className="pt-2 border-t border-emerald-500/30 text-xs text-stone-200 font-sans leading-relaxed space-y-1">
                <p>
                  <strong>Luận cứ lý luận:</strong> {currentTask.academicExplanation}
                </p>
                {currentTask.sourceReference.legalPolicyBasis && (
                  <p className="text-[11px] font-mono text-emerald-300/90">
                    ⚖ Căn cứ nghị quyết: {currentTask.sourceReference.legalPolicyBasis}
                  </p>
                )}
              </div>
            )}

            {/* Constructive WhyNotOthers Explanation when Incorrect */}
            {matchState === "INCORRECT" && (
              <div className="pt-2 border-t border-red-500/30 text-xs text-stone-200 font-sans leading-relaxed">
                <p className="text-amber-200">
                  💡 {distractorExplanation}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Force Groups Selection Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-stone-300 font-bold flex items-center gap-1.5">
            <Users className="w-4 h-4 text-citron" />
            Chọn lực lượng xã hội tương ứng với nhiệm vụ trên:
          </span>
          <span className="text-[11px] font-mono text-stone-400 hidden sm:inline">
            (Bấm vào một giai tầng để ghép kết quả)
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {SOCIAL_FORCE_GROUPS.map((group) => {
            const IconComponent = getForceIcon(group.id);
            const isSelected = selectedGroupId === group.id;
            const isTargetCorrect =
              matchState === "CORRECT" && currentTask.targetActorId === group.id;

            return (
              <motion.button
                key={group.id}
                data-testid={`matching-token-${group.id}`}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAttemptMatch(group.id)}
                disabled={matchState === "CORRECT"}
                className={`relative p-3 sm:p-3.5 rounded-sm border text-left transition-all duration-200 flex flex-col justify-between gap-2 min-h-[95px] sm:min-h-[110px] focus:outline-none focus-visible:ring-2 focus-visible:ring-citron ${
                  isTargetCorrect
                    ? "bg-emerald-950/80 border-emerald-400 ring-2 ring-emerald-400/50"
                    : isSelected
                    ? "bg-carbon border-citron ring-2 ring-citron/40 shadow-lg"
                    : "bg-charcoal-deep border-white/10 hover:border-white/30 hover:bg-black/50"
                } ${matchState === "CORRECT" && !isTargetCorrect ? "opacity-40" : "opacity-100"}`}
              >
                <div className="flex items-start justify-between gap-1 w-full">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${group.color}25`, color: group.color }}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-sm text-white block leading-tight">
                        {group.shortName}
                      </span>
                      {group.isDemographicGroup && (
                        <span className="text-[9px] font-mono px-1 rounded bg-white/10 text-citron inline-block mt-0.5">
                          Giao thoa
                        </span>
                      )}
                      {group.isAlliance && (
                        <span className="text-[9px] font-mono px-1 rounded bg-indigo-500/20 text-indigo-300 inline-block mt-0.5">
                          Liên minh
                        </span>
                      )}
                    </div>
                  </div>

                  {isTargetCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  )}
                </div>

                <p className="text-[10px] text-stone-400 line-clamp-2 leading-tight">
                  {group.summary}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
