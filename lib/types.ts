export type SourceType = "[BAI_GIANG]" | "[VAN_KIEN]" | "[DU_LIEU]" | "[MINH_HOA]" | string;

export interface SourceItem {
  type: SourceType;
  citation: string;
  shortSummary: string;
}

export interface SourceCatalog {
  [key: string]: SourceItem;
}

export interface QuizOption {
  id: "A" | "B" | "C" | "D";
  text: string;
}

export interface QuizQuestion {
  id: string;
  questionNumber: number;
  topic: string;
  question: string;
  options: QuizOption[];
  correctAnswer: "A" | "B" | "C" | "D";
  sourceId: string;
  sourceCitation: string;
  explanation: string;
}

export interface SocialForceProfile {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  category: string;
  isDemographicGroup?: boolean;
  position: string[];
  role: string[];
  contribution: string[];
  example: string;
  sourceIds: string[];
  academicNote?: string;
}

export interface TriangleRelation {
  key: "ownership" | "management" | "status_distribution";
  label: string;
  shortLabel: string;
  coreQuestion: string;
  detail: string;
  subPoints: string[];
  sourceIds: string[];
  legalHighlight?: string;
}
