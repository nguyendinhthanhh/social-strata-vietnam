import {
  SocialForceId,
  SocialForceGroup,
  MatchingTaskItem,
  RoleMatchingConfig,
} from "./matchingGameTypes";
import rawData from "@/content/ROLE_MATCHING_TASKS.json";

const ACTOR_IMAGE_MAP: Record<SocialForceId, { imageSrc: string; color: string }> = {
  "cong-nhan": {
    imageSrc: "/images/portrait_worker_slide.jpg",
    color: "#C8372D",
  },
  "nong-dan": {
    imageSrc: "/images/portrait_farmer_slide.jpg",
    color: "#B45309",
  },
  "tri-thuc": {
    imageSrc: "/images/portrait_intellectual_slide.jpg",
    color: "#0369A1",
  },
  "doanh-nhan": {
    imageSrc: "/images/portrait_entrepreneur_slide.jpg",
    color: "#047857",
  },
  "phu-nu": {
    imageSrc: "/images/portrait_women_slide.jpg",
    color: "#BE123C",
  },
  "thanh-nien": {
    imageSrc: "/images/portrait_youth_slide.jpg",
    color: "#EA580C",
  },
  "lien-minh": {
    imageSrc: "/images/alliance_politics_slide.jpg",
    color: "#4F46E5",
  },
};

const TASK_IMAGE_MAP: Record<string, { imageSrc: string; imageAlt: string; imageCaption: string }> = {
  "task-01": {
    imageSrc: "/images/factory_workers.jpg",
    imageAlt: "Công nhân và kỹ sư công nghiệp trong dây chuyền sản xuất hiện đại",
    imageCaption: "Công nhân vận hành dây chuyền công nghiệp hiện đại: Lực lượng tiên phong của nền kinh tế độc lập tự chủ.",
  },
  "task-02": {
    imageSrc: "/images/rice_harvest.jpg",
    imageAlt: "Nông dân thu hoạch lúa mùa bội thu trên cánh đồng mẫu lớn",
    imageCaption: "Giai cấp nông dân: Chủ thể của quá trình phát triển nông nghiệp sinh thái và xây dựng nông thôn mới.",
  },
  "task-03": {
    imageSrc: "/images/portrait_intellectual_slide.jpg",
    imageAlt: "Đội ngũ trí thức Việt Nam nghiên cứu khoa học và phát triển công nghệ",
    imageCaption: "Đội ngũ trí thức: Lực lượng lao động sáng tạo đặc biệt quan trọng trong CNH, HĐH và kinh tế tri thức.",
  },
  "task-04": {
    imageSrc: "/images/portrait_entrepreneur_slide.jpg",
    imageAlt: "Đội ngũ doanh nhân Việt Nam trong hội nhập kinh tế quốc tế",
    imageCaption: "Đội ngũ doanh nhân: Tầng lớp xã hội đặc biệt tiên phong tổ chức sản xuất kinh doanh và tạo việc làm.",
  },
  "task-05": {
    imageSrc: "/images/worker_sewist.jpg",
    imageAlt: "Phụ nữ Việt Nam trong lao động sản xuất công nghiệp và đời sống xã hội",
    imageCaption: "Phụ nữ Việt Nam: Lực lượng xã hội đông đảo, giao thoa trong mọi giai cấp, bình đẳng giới và phát triển bền vững.",
  },
  "task-06": {
    imageSrc: "/images/students_university.jpg",
    imageAlt: "Thanh niên sinh viên Việt Nam trong học tập và nghiên cứu đổi mới sáng tạo",
    imageCaption: "Đội ngũ thanh niên: Rường cột của nước nhà, chủ nhân tương lai của đất nước, xung kích trong chuyển đổi số.",
  },
  "task-07": {
    imageSrc: "/images/alliance_politics_slide.jpg",
    imageAlt: "Tư liệu bài giảng MLN131 Tiết 20: Nội dung liên minh giai cấp, tầng lớp",
    imageCaption: "Khối liên minh giai cấp, tầng lớp: Nền tảng chính trị – xã hội vững chắc, kết hợp hài hòa lợi ích kinh tế.",
  },
};

export const SOCIAL_FORCE_GROUPS: SocialForceGroup[] = rawData.actors.map((actor: any) => ({
  id: actor.id as SocialForceId,
  name: actor.name,
  shortName: actor.shortName,
  category: actor.category,
  isDemographicGroup: actor.isDemographicGroup,
  isAlliance: actor.isAlliance,
  badgeColor: actor.badgeColor,
  iconKey: actor.iconKey,
  summary: actor.summary,
  color: ACTOR_IMAGE_MAP[actor.id as SocialForceId]?.color || "#121416",
  imageSrc: ACTOR_IMAGE_MAP[actor.id as SocialForceId]?.imageSrc || "/images/factory_workers.jpg",
}));

export const MATCHING_TASKS: MatchingTaskItem[] = rawData.tasks.map((task: any) => {
  const imgData = TASK_IMAGE_MAP[task.id] || {
    imageSrc: "/images/factory_workers.jpg",
    imageAlt: task.missionTitle,
    imageCaption: task.missionTitle,
  };

  return {
    id: task.id,
    order: task.order,
    targetActorId: task.targetActorId as SocialForceId,
    missionCode: task.missionCode,
    missionTitle: task.missionTitle,
    scenarioPrompt: task.scenarioPrompt,
    distinctiveKeywords: task.distinctiveKeywords,
    academicExplanation: task.academicExplanation,
    whyNotOthers: task.whyNotOthers,
    sourceReference: task.sourceReference,
    imageSrc: imgData.imageSrc,
    imageAlt: imgData.imageAlt,
    imageCaption: imgData.imageCaption,
  };
});

export const MATCHING_GAME_CONFIG: RoleMatchingConfig = {
  title: rawData.meta.title,
  subtitle: rawData.meta.subtitle,
  course: rawData.meta.course,
  chapter: rawData.meta.chapter,
  totalTasks: rawData.meta.totalTasks,
  scoring: {
    firstAttempt: 100,
    secondAttempt: 60,
    thirdPlusAttempt: 30,
    completionBonus: 100,
    maxPossibleScore: 800,
  },
};
