<template>
  <main class="main-wrapper">
    <section class="hero-wrapper">
      <div>
        <h1>Alexandre Gréau</h1>
        <p>
          aka Alex, Front-end developer and UX enthusiast based in Singapore.<br />
          Some of my personal explorations and useful creations are exposed here.<br />
          Have a look, and reach out to say hi!
        </p>
        <ul>
          <li>
            <a
              href="https://drive.google.com/file/d/1DEd9sTz8nBU5GiNecM1OBAAv88Kr_LZM/view?usp=drive_link"
              target="_blank"
            >
              <!-- inline since it has semantic value + color changes-->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 -960 960 960"
              >
                <path
                  d="M280-280h400v-80H280v80Zm200-120 160-160-56-56-64 62v-166h-80v166l-64-62-56 56 160 160Zm0 320q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                />
              </svg>
              My CV
            </a>
          </li>
          <li>
            <a href="mailto:alexgreau@live.fr?subject=Job%20Prospect">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 -960 960 960"
              >
                <path
                  d="M880-80 720-240H320q-33 0-56.5-23.5T240-320v-40h440q33 0 56.5-23.5T760-440v-280h40q33 0 56.5 23.5T880-640v560ZM160-473l47-47h393v-280H160v327ZM80-280v-520q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v280q0 33-23.5 56.5T600-440H240L80-280Zm80-240v-280 280Z"
                />
              </svg>
              Say hi</a
            >
          </li>
          <li>
            <a href="https://github.com/AlexGreau" target="_blank">
              <img src="../assets/icons/github.svg" alt="GitHub" />
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alexandre-greau/" target="_blank">
              <img src="../assets/icons/linkedin.svg" alt="LinkedIn" />
              LinkedIn
            </a>
          </li>
          <li></li>
        </ul>
      </div>
      <!-- <figure>
        <img src="../assets/img/me.jpg" alt="Alex Greau" />
        <figcaption>This website's creator</figcaption>
      </figure> -->
    </section>
    <section class="project-finder">
      <h2>What i do</h2>
      <p>
        I'm a developer with a passion for creating web applications. I love working with modern
        technologies and frameworks to build efficient and user-friendly solutions.
      </p>
      <p>
        My main focus is on front-end development, but I also have experience in back-end
        technologies. I'm always eager to learn new skills and improve my craft.
      </p>
      <form @submit.prevent>
        List of checkboxes as clickable icons with text, round and glassy. Which would filter
        projects.
        <fieldset>
          <legend>filter by tech used</legend>
          <label v-for="tech in techs" :key="tech.value">
            <input type="checkbox" :name="tech.name" :value="tech.isChecked" />
            <img :src="getIcon(tech.icon)" :alt="tech.alt" />
          </label>
        </fieldset>
        <!-- Add more checkboxes as needed -->
      </form>
    </section>
    <section class="projects">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </section>
    <Recommendations />
  </main>
</template>
<script setup lang="ts">
import ProjectCard from '@/components/cards/ProjectCard.vue'
import Recommendations from '@/components/sections/Recommandations.vue'
import { ref } from 'vue'
import type { Project } from '@/model/Project'
import { TechName, type Tech } from '@/model/Tech'

const projects = ref<Array<Project>>([
  {
    id: 1,
    name: 'Portfolio Website',
    techStack: [TechName.VUE, TechName.SCSS, TechName.HTML, TechName.CSS, TechName.TS],
    status: 'Completed',
    description: 'A personal portfolio website to showcase my projects and skills.',
    image: '../assets/img/portfolio.png',
    route: '/projects/portfolio',
  },
  {
    id: 2,
    name: 'Workout timer',
    techStack: [
      TechName.REACT,
      TechName.TS,
      TechName.FIGMA,
      TechName.AWS,
      TechName.HTML,
      TechName.CSS,
    ],
    status: 'In Progress',
    description: 'A workout helper to plan and execute your workouts.',
    image: '../assets/img/task-manager.png',
    route: '/projects/workout-timer',
  },
  {
    id: 3,
    name: 'Swim coach website',
    techStack: [TechName.VUE, TechName.SCSS, TechName.HTML, TechName.CSS, TechName.TS],
    status: 'To do',
    description: 'My swim coaching services and how to reach out to me.',
    image: '../assets/img/task-manager.png',
    route: '/projects/swim-coach',
  },
  {
    id: 4,
    name: 'Cook assistant',
    techStack: [TechName.VUE, TechName.SCSS, TechName.HTML, TechName.CSS, TechName.TS],
    status: 'To do',
    description: 'A cooking assistant to help you cook your meals.',
    image: '../assets/img/task-manager.png',
    route: '/projects/cook-assistant',
  }
])

let filteredProjects = ref<Array<Project>>([])

const techs = ref<Array<Tech>>([
  {
    name: TechName.VUE,
    icon: 'vuejs.svg',
    alt: 'Vue.js',
    isChecked: false,
  },
  {
    name: TechName.REACT,
    icon: 'react.svg',
    alt: 'React',
    value: 'react',
    isChecked: false,
  },
  {
    name: TechName.NODE,
    icon: 'nodejs.svg',
    alt: 'Node.js',
    value: 'nodejs',
    isChecked: false,
  },
  {
    name: TechName.TS,
    icon: 'typescript.svg',
    alt: 'TypeScript',
    value: 'typescript',
    isChecked: false,
  },
  {
    name: TechName.HTML,
    icon: 'html.svg',
    alt: 'HTML',
    value: 'html',
    isChecked: false,
  },
  {
    name: TechName.JS,
    icon: 'javascript.svg',
    alt: 'JavaScript',
    value: 'javascript',
    isChecked: false,
  },
  {
    name: TechName.FIGMA,
    icon: 'figma.svg',
    alt: 'Figma',
    value: 'figma',
    isChecked: false,
  },
  {
    name: TechName.SCSS,
    icon: 'sass.svg',
    alt: 'SCSS',
    value: 'scss',
    isChecked: false,
  },
  {
    name: TechName.AWS,
    icon: 'aws.svg',
    alt: 'AWS',
    value: 'aws',
    isChecked: false,
  },
])

const getIcon = ref((filename: string) => {
  // Function to get the icon path
  return new URL(`../assets/icons/techs/${filename}`, import.meta.url).href
})
</script>

<style lang="scss">
@use '@/assets/common/variables.scss' as *; // Import variables
.main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  & > section.hero-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    height: 100vh;
    gap: 24px;
    & > div {
      h1 {
        margin-bottom: 0px;
      }
      p {
        margin: 0px;
        margin-bottom: 20px;
      }
      ul {
        // links
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        padding-left: 0px;
        align-items: baseline;
        li {
          display: inline;
          a {
            position: relative;
            text-decoration: none;
            font-size: 24px;
            transition: all 0.1s ease;
            display: inline-flex;
            align-items: center;
            gap: 3px;
            img {
              height: 1em;
              width: 1em;
              position: relative;
              bottom: 0px;
            }
            svg {
              width: 1em;
              height: 1em;
            }
            &::after {
              content: '';
              position: absolute;
              left: 0;
              bottom: 0;
              width: 0;
              height: 2px;
              background-color: var(--color-primary);
              transition: width 0.3s ease;
            }

            &:hover {
              &::after {
                width: 100%;
              }
            }
          }
        }
      }
    }
    figure {
      margin-top: 20px;
      text-align: center;
      img {
        max-width: 20em;
        height: auto;
        border-radius: 50%;
      }
      figcaption {
        font-size: 0.9rem;
        color: #666;
      }
    }
  }

  & > section.project-finder {
    form {
      fieldset {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        list-style-type: none;
        justify-content: center;
        align-items: center;
        border: none;
        legend {
          display: none;
        }
        label {
          img {
            border-radius: 50%;
            width: 64px;
            height: 64px;
            padding: $spacing-md;
            display: inline-block;
            transition: all 0.3s ease;
            &:focus,
            &:hover {
              background-color: var(--color-surface-container-highest);
            }
          }
          input[type='checkbox']:checked + img {
            background-color: var(--color-primary-container);
            color: var(--color-on-primary-container);
            border-color: var(--color-primary);
          }
          input[type='checkbox']:focus + img {
            outline: 2px solid blue;
            outline-offset: 2px;
          }

          input[type='checkbox'] {
            // Hide the checkbox
            // This is necessary to provide keyboard navigation
            overflow: hidden;
            position: absolute;
            width: 1px;
            height: 1px;
            opacity: 0;
            border: 0;
            overflow: hidden;
            clip: rect(0 0 0 0);
            white-space: nowrap;
          }
        }
      }
    }
  }

  & > section.projects {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 1200px;
    padding: 0px;
  }
}
</style>
