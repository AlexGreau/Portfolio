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
    JEST = "Jest",
    TS = "TypeScript",
    REACT = "React",
    VUE = "Vue",
    ANGULAR = "Angular",
    LARAVEL = "PHP(Laravel)",
    SVELTE = "Svelte",
    NODE = "Node.js",
    EXPRESS = "Express.js",
    FIGMA = "Figma",
    AWS = "AWS",
    ANDROID = "Android",
    WEAROS = "WearOS",
    JAVA = "Java",
    GA = "Google Analytics",
    GTM = "Google Tag Manager",
    ADOBE = "Adobe Analytics",
    CLARITY = "Clarity",
    DOCKER = "Docker",
}
