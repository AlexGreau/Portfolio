export interface Project {
    name: string;
    status: string;
    id: number;
    techStack: string[];
    route?: string;
    description?: string;
    image?: string;
}

const exampleProject: Project = {
    id: 0,
    name: "Portfolio Website",
    techStack: ["TypeScript", "React", "CSS"],
    route: "/projects/portfolio-website",
    status: "In Progress",
};

export default exampleProject;