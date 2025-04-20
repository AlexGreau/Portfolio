import type { TechName } from "./Tech";

export interface WorkExp {
    company: string;
    position: string;
    startDate: Date;
    endDate: Date;
    description: string;
    techs: TechName[];
    id: number;
    link?: string;
}