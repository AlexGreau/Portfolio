export interface Tech {
  name: TechName
  icon: string
  alt: string
  isChecked?: boolean
  value?: string
}

export enum TechName {
  HTML = 'HTML',
  CSS = 'CSS',
  SCSS = 'SCSS',
  HTML_SCSS = 'HTML & SCSS',
  JS = 'JavaScript',
  JEST = 'Jest',
  PLAYWRIGHT = 'Playwright',
  TS = 'TypeScript',
  REACT = 'React',
  VUE = 'Vue',
  ANGULAR = 'Angular',
  LARAVEL = 'PHP(Laravel)',
  SVELTE = 'Svelte',
  SVELTEKIT = 'SvelteKit',
  NODE = 'Node.js',
  EXPRESS = 'Express.js',
  FIGMA = 'Figma',
  AWS = 'AWS',
  ANDROID = 'Android',
  WEAROS = 'WearOS',
  JAVA = 'Java',
  GA = 'Google Analytics',
  GTM = 'Google Tag Manager',
  ADOBE = 'Adobe Analytics',
  CLARITY = 'Clarity',
  GRAFANA = 'Grafana',
  DOCKER = 'Docker',
  KENDO_UI = 'KendoUI (jQuery)',
  PYTHON = 'Python',
  RASPBERRY_PI = 'Raspberry Pi 4',
  CLAUDE_API = 'Claude API',
}
