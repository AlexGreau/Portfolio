<template>
  <main class="main-wrapper">
    <section class="hero-wrapper">
      <div>
        <h1>My Portfolio</h1>
        <p>
          Welcome to my portfolio! I'm a passionate developer.<br />
          Here you can find my projects, skills, and more about me.<br />
          Feel free to explore and reach out if you have any questions!
        </p>
        <ul>
          <li>
            <a
              href="https://drive.google.com/file/d/1DEd9sTz8nBU5GiNecM1OBAAv88Kr_LZM/view?usp=drive_link"
              target="_blank"
              >My CV</a
            >
          </li>
          <li>
            <a href="mailto:alexgreau@live.fr?subject=Job%20Prospect"> Hire me </a>
          </li>
          <li>
            <a href="https://github.com/AlexGreau" target="_blank">
              <img src="../assets/icons/github.svg" alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alexandre-greau/" target="_blank">
              <img src="../assets/icons/linkedin.svg" alt="LinkedIn" />
            </a>
          </li>
          <li></li>
        </ul>
      </div>
      <figure>
        <img src="../assets/img/me.jpg" alt="Alex Greau" />
        <figcaption>This website's creator</figcaption>
      </figure>
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
            <input type="checkbox" :name="tech.name" :value="tech.value" />
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

const projects = ref<Array<Project>>([
  {
    id: 1,
    name: 'Portfolio Website',
    techStack: ['Vue', 'Scss', 'HTML/CSS', 'TypeScript'],
    status: 'Completed',
    description: 'A personal portfolio website to showcase my projects and skills.',
    image: '../assets/img/portfolio.png',
    route: '/projects/portfolio',
  },
  {
    id: 2,
    name: 'Workout timer',
    techStack: ['React', 'Node.js', 'Figma'],
    status: 'In Progress',
    description: 'A workout helper to plan and execute your workouts.',
    image: '../assets/img/task-manager.png',
    route: '/projects/workout-timer',
  },
  {
    id: 3,
    name: 'Swim coach website',
    techStack: ['Vue', 'Node.js', 'MongoDB'],
    status: 'To do',
    description: 'My swim coaching services and how to reach out to me.',
    image: '../assets/img/task-manager.png',
    route: '/projects/swim-coach',
  },
])

const techs = ref([
  {
    name: 'Vue',
    icon: 'vuejs.svg',
    alt: 'Vue.js',
    value: 'vue',
  },
  {
    name: 'React',
    icon: 'react.svg',
    alt: 'React',
    value: 'react',
  },
  {
    name: 'Node.js',
    icon: 'nodejs.svg',
    alt: 'Node.js',
    value: 'nodejs',
  },
  {
    name: 'TypeScript',
    icon: 'typescript.svg',
    alt: 'TypeScript',
    value: 'typescript',
  },
  {
    name: 'HTML/CSS',
    icon: 'html.svg',
    alt: 'HTML/CSS',
    value: 'htmlcss',
  },
  {
    name: 'JavaScript',
    icon: 'javascript.svg',
    alt: 'JavaScript',
    value: 'javascript',
  },
  {
    name: 'Figma',
    icon: 'figma.svg',
    alt: 'Figma',
    value: 'figma',
  },
  {
    name: 'SCSS/SASS',
    icon: 'sass.svg',
    alt: 'SCSS/SASS',
    value: 'scsssass',
  },
  {
    name: 'AWS',
    icon: 'aws.svg',
    alt: 'AWS',
    value: 'aws',
  },
])

const getIcon = ref((filename: string) => {
  // Function to get the icon path
  return new URL(`../assets/icons/techs/${filename}`, import.meta.url).href
})

const filterProjects = (selectedTechs: string[]) => {
  // Filter projects based on selected techs
  return projects.value.filter((project) =>
    project.techStack.some((tech) => selectedTechs.includes(tech)),
  )
}
</script>

<style lang="scss">
@use '@/assets/common/variables.scss' as *; // Import variables
@use '@/assets/common/theme.scss' as *; // Import theme styles and variables
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
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    figure {
      margin-top: 20px;
      text-align: center;
      img {
        max-width: 300px;
        height: auto;
        border-radius: 50%;
      }
      figcaption {
        font-size: 0.9rem;
        color: #666;
      }
    }
    ul {
      display: flex;
      gap: 6px;
      li {
        display: inline;
        a {
          img {
            height: 20px;
            width: auto;
          }
        }
      }
    }
  }

  & > section.project-finder {
    form {
      fieldset {
        display: flex;
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
            width: 48px;
            height: 48px;
            padding: $spacing-md;
            display: inline-block;
            transition: all 0.3s ease;
            &:focus,
            &:hover {
              background-color: aquamarine;
            }
          }
          input[type='checkbox']:checked + img {
            background-color: pink;
          }
          input[type='checkbox']:focus + img {
            outline: 2px solid blue;
            outline-offset: 2px;
          }

          input[type='checkbox'] {
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
    width: 100%;
    max-width: 1200px;
    padding: 20px;
  }
}
</style>
