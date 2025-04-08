import type { Tech, TechName } from "./Tech";

export interface Project {
    name: string;
    status: string;
    id: number;
    techStack: TechName[];
    route?: string;
    description?: string;
    image?: string;
}