/**
 * TypeScript Contracts for "GHÉP VAI TRÒ — NHỮNG MẢNH GHÉP XÃ HỘI"
 * Educational Mini-game in Scene 04 (VIỆT NAM ĐA TẦNG — MLN131)
 */

export type SocialForceId =
  | "cong-nhan"
  | "nong-dan"
  | "tri-thuc"
  | "doanh-nhan"
  | "phu-nu"
  | "thanh-nien"
  | "lien-minh";

export interface SocialForceGroup {
  id: SocialForceId;
  name: string;
  shortName: string;
  category: string;
  isDemographicGroup: boolean;
  isAlliance: boolean;
  badgeColor: string;
  iconKey: string;
  summary: string;
  color: string;
  imageSrc: string;
}

export interface MatchingTaskItem {
  id: string;
  order: number;
  targetActorId: SocialForceId;
  missionCode: string;
  missionTitle: string;
  scenarioPrompt: string;
  distinctiveKeywords: string[];
  academicExplanation: string;
  whyNotOthers?: Record<string, string>;
  sourceReference: {
    primarySourceId: string;
    additionalSourceIds?: string[];
    slideCitation: string;
    legalPolicyBasis?: string;
  };
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
}

export interface RoleMatchingConfig {
  title: string;
  subtitle: string;
  course: string;
  chapter: string;
  totalTasks: number;
  scoring: {
    firstAttempt: number;
    secondAttempt: number;
    thirdPlusAttempt: number;
    completionBonus: number;
    maxPossibleScore: number;
  };
}
