export interface Tech {
    name: TechName;
    icon: string;
    alt: string;
    isChecked?: boolean;
    value?: string;
}

export enum TechName {
    HTML = "HTML",
    CSS = "CSS",
    SCSS = "SCSS",
    JS = "JavaScript",
    TS = "TypeScript",
    REACT = "React",
    VUE = "Vue",
    SVELTE = "Svelte",
    NODE = "Node.js",
    EXPRESS = "Express.js",
    FIGMA = "Figma",
    AWS = "AWS",
}
