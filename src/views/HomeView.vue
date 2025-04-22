<template>
  <main class="main-wrapper">
    <section class="hero-wrapper">
      <h1>Alexandre Gréau</h1>
      <h4>Front-end developer</h4>
      <p>
        aka Alex, Front-end developer and UX enthusiast based in Singapore.<br />
        Some of my personal explorations and useful creations are exposed here.<br />
        Have a look, and reach out to say hi!
      </p>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experiences">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="h-6 w-6"
              aria-hidden="true"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
            Github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alexandre-greau/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
              aria-hidden="true"
            >
              <path
                d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
              ></path>
            </svg>
            LinkedIn
          </a>
        </li>
        <li></li>
      </ul>
    </section>
    <div class="content-wrapper">
      <article class="about-wrapper" id="about">
        <!-- <h2>About me</h2> -->
        <p>
          Small paragraph about me. What's more? Be a human and have more dimensions than just a
          dev.
        </p>
      </article>
      <div class="experiences-wrapper card-container" id="experiences">
        <WorkExperienceCard v-for="work in WorkExperiences" :key="work.id" :work="work" />
      </div>
      <div class="projects-wrapper card-container" id="projects">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import ProjectCard from '@/components/cards/ProjectCard.vue'
import WorkExperienceCard from '@/components/cards/WorkCard.vue'
import { ref } from 'vue'
import type { Project } from '@/model/Project'
import { TechName } from '@/model/Tech'
import { type WorkExp } from '@/model/WorkExp'
import { Status } from '@/model/Status'

const projects = ref<Array<Project>>([
  {
    id: 1,
    name: 'Portfolio Website',
    techStack: [TechName.VUE, TechName.HTML_SCSS, TechName.TS],
    status: Status.IN_PROGRESS,
    description: 'A personal portfolio website to showcase my projects and skills.',
    image: '../assets/img/portfolio.png',
    route: '/projects/portfolio',
  },
  {
    id: 2,
    name: 'Workout timer',
    techStack: [TechName.REACT, TechName.TS, TechName.FIGMA, TechName.AWS, TechName.HTML_SCSS],
    status: Status.IN_PROGRESS,
    description: 'A workout helper to plan and execute your workouts.',
    image: '../assets/img/task-manager.png',
    route: '/projects/workout-timer',
  },
  {
    id: 3,
    name: 'Swim coach website',
    techStack: [TechName.VUE, TechName.SCSS, TechName.HTML_SCSS, TechName.TS],
    status: Status.TO_DO,
    description: 'My swim coaching services and how to reach out to me.',
    image: '../assets/img/task-manager.png',
    route: '/projects/swim-coach',
  },
  {
    id: 4,
    name: 'Cook assistant',
    techStack: [TechName.VUE, TechName.HTML_SCSS, TechName.TS],
    status: Status.TO_DO,
    description: 'A cooking assistant to help you cook your meals.',
    image: '../assets/img/task-manager.png',
    route: '/projects/cook-assistant',
  },
])

const WorkExperiences = ref<Array<WorkExp>>([
  {
    company: 'Triple-A',
    link: 'https://triple-a.io/',
    position: 'Front-end developer',
    startDate: new Date('2022-06-06'),
    endDate: undefined,
    description: 'Enabling merchant to accept crypto payments.',
    tasks: [
      "Developing a client facing Dashboard, increasing visibility and control over merchant's own crypto-transactions.",
      "Enhancing payment gateways' UX and performance (Conversion rate, Accessibility, Core Web Vitals).",
      'Leading Front-end development, and ensuring Code quality by enforcing good practices and testing.',
      'In charge of Data collection and Data Analysis, enabling business and user insights.',
      'Driving innovation through A/B testing and user experiments, fostering data-driven decision-making.',
      'Optimized legacy code readability and performance by refactoring the code base. Followed Atomic design, semantic web and lean CSS principles.',
    ],
    techs: [TechName.VUE, TechName.TS, TechName.HTML_SCSS],
    id: 1,
  },
  {
    company: 'Amadeus',
    position: 'Data Analyst',
    link: 'https://www.amadeus.com/',
    startDate: new Date('2021-05'),
    endDate: new Date('2022-05'),
    description: 'In the AIR Digital Analytics team (second time)',
    tasks: [
      "Set up and interpretation of user behavior analytics on Airlines' websites (A/B testing, Core Web Vitals, Heatmap, rage clicks, excessive scrolling etc).",
      'Implemented analytics tracking solutions for 10+ Airlines including Finnair, South African, Malaysian Airlines, Avianca, etc. Designed and tested new features and maintained the solution to provide valuable insight to clients.',
      'Led in communication with the client and coordination with their development team.',
      "Contributed to the development of Amadeus' Analytics tracking solution (new features + maintenance).",
      'SAFe methodology (Scaled Agile Framework).',
    ],
    techs: [
      TechName.JS,
      TechName.TS,
      TechName.JEST,
      TechName.GA,
      TechName.GTM,
      TechName.ADOBE,
      TechName.CLARITY,
    ],
    id: 2,
  },
  {
    company: 'CMA-CGM',
    position: 'Web integrator',
    link: 'https://www.cma-cgm.com/',
    startDate: new Date('2020-08'),
    endDate: new Date('2021-05'),
    description: '',
    tasks: [
      'Integrated 7+ responsive pages compatible with Firefox, Chrome, IE11 and Edge on the official CMA-CGM website, improving performances and maintaining accessibility for millions of users.',
      'Validated the design team mockups (feasibility & estimations).',
      'Bridged the design and development team, enabling mutual understanding and ensuring the match between the product and user requirements.',
      'Post-delivery support (rework & fixes) for the development and design teams.',
    ],
    techs: [TechName.HTML_SCSS, TechName.VUE],
    id: 3,
  },
  {
    company: 'Amadeus',
    position: 'Full-stack developer',
    link: 'https://www.amadeus.com/',
    startDate: new Date('2019-10'),
    endDate: new Date('2021-08'),
    description: 'In the AIR Digital Customization team',
    tasks: [
      'Worked with AMADEUS in the AIR Digital Customization team:',
      'Developed a task tracking and visualization tool used worldwide by 400+ users, increasing the transparency and understanding of the workflow for Amadeus employees and clients.',
      'Designed and developed the UI of the tool.',
      'Created Docker containers for Backend (PHP), Front-end (Angular), Database (SQL) and logs.',
      'In charge of the implementation of analytics tracking solutions for 10+ Airlines (Google Analytics and Google Tag Manager).',
      'Led in communication with the client and coordination with their development team.',
      'Designed and tested new features and maintained the Amadeus tracking solution to provide valuable insight to clients.',
      'SAFe methodology (Scaled Agile Framework).',
    ],
    techs: [
      TechName.ANGULAR,
      TechName.JS,
      TechName.JEST,
      TechName.LARAVEL,
      TechName.DOCKER,
      TechName.GA,
      TechName.GTM,
    ],
    id: 4,
  },
  {
    company: 'SUTD (University)',
    position: 'Research officer',
    link: 'https://www.sutd.edu.sg/',
    startDate: new Date('2020-04'),
    endDate: new Date('2021-09'),
    description:
      "My Master's degree end-of-study internship on the subject 'New Interaction Techniques for Athletes'.",
    tasks: [
      'Developed an Android wearables app to help an Ultimate frisbee team learn game strategies.',
      'Conducted user testing to find which modality and language to use to convey directional information. A mix of haptic and visual modalities improved the accuracy and success rate of information.',
    ],
    techs: [TechName.ANDROID, TechName.WEAROS, TechName.JAVA],
    id: 5,
  },
])
</script>

<style lang="scss">
@use '@/assets/common/variables.scss' as *; // Import variables
.main-wrapper {
  display: flex;
  // grid-template-columns: repeat(auto-fit, minmax(min(450px, 100%), 1fr));
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  padding: 0rem 1.5rem;
  & > section.hero-wrapper {
    padding-bottom: 20px;
    padding-top: 6rem;
    display: flex;
    flex-wrap: wrap;
    flex: 0 1 40%;
    gap: 24px;
    flex-direction: column;
    height: 100vh;
    position: sticky;
    top: 2rem;
    align-self: self-start;
    max-height: calc(100vh - 6rem);
    h1 {
      margin-bottom: 0px;
      width: 100%;
    }
    h2 {
      width: 100%;
    }
    p {
      margin: 0px;
      width: 100%;
    }
    & > nav {
      width: 100%;
      ul {
        display: flex;
        flex-direction: column;
        gap: 1em;
        list-style-type: none;
        padding-left: 0px;
        li {
          a {
            position: relative;
            text-decoration: none;
            font-size: 1.2em;
            transition: all 0.1s ease;
            display: inline-flex;
            align-items: center;
            gap: 3px;
          }
        }
      }
    }
    & > ul {
      width: 100%;
      // links
      margin-top: auto;
      display: flex;
      flex-wrap: wrap;
      gap: 1em;
      padding-left: 0px;
      align-items: baseline;
      width: 100%;
      li {
        display: inline;
        a {
          position: relative;
          text-decoration: none;
          font-size: 1.2em;
          transition: all 0.1s ease;
          display: inline-flex;
          align-items: center;
          gap: 3px;
          svg {
            width: 1em;
            height: 1em;
          }
          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
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

  & > div.content-wrapper {
    flex: 1 1 50%;
    padding-top: 6rem;
    & > article.about-wrapper {
      margin-top: 20px;
      margin-bottom: 20px;
      padding: 0px;
      h1 {
        margin-bottom: 0px;
      }
      p {
        margin: 0px;
        margin-bottom: 20px;
      }
    }

    & > div.experiences-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 24px;
      margin-top: 20px;
      margin-bottom: 20px;
      padding: 0px;
    }

    & > div.projects-wrapper {
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
}

@media (max-width: $mobile-breakpoint) {
  .main-wrapper {
    flex-direction: column;
    & > section.hero-wrapper {
      position: static;
      height: auto;
      max-height: none;
      & > nav {
        display: none;
      }
      & > ul {
        margin-top: 0px;
      }
    }
  }
}
</style>
