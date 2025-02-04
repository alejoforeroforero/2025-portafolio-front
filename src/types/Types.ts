export type BaseCard = {
  id: number;
  title: string;
  summary: string;
  tech: string;
  link: string;
};

export type ExperienceType = BaseCard & {
  type: "experience" | null;
  date: string;
};

export type ProjectType = BaseCard & {
  type: "project";
  imageUrl: string;
  newWindow:boolean;
};

export type InfoCard = ExperienceType | ProjectType;
