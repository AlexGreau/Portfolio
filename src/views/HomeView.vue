<template>
  <main class="main-wrapper">
    <section class="hero-wrapper">
      <div>
        <h1>My Portfolio</h1>
        <p>Welcome to my portfolio! I'm a passionate developer.<br/>
        Here you can find my projects, skills, and more about me.<br/>
        Feel free to explore and reach out if you have any questions!</p>
        <ul>
          <li><a href="https://drive.google.com/file/d/1DEd9sTz8nBU5GiNecM1OBAAv88Kr_LZM/view?usp=drive_link" target="_blank">My CV</a></li>
          <li>
            <a href="mailto:alexgreau@live.fr?subject=Job%20Prospect">
              Hire me
            </a>
          </li>
          <li>
            <a href="https://github.com/AlexGreau" target="_blank">
              <img src="../assets/icons/github.svg" alt="GitHub"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alexandre-greau/" target="_blank">
              <img src="../assets/icons/linkedin.svg" alt="LinkedIn"/>
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
      <p>I'm a developer with a passion for creating web applications. I love working with modern technologies and frameworks to build efficient and user-friendly solutions.</p>
      <p>My main focus is on front-end development, but I also have experience in back-end technologies. I'm always eager to learn new skills and improve my craft.</p>
      
      <form>
        List of checkboxes as clickable icons with text, round and glassy. Which would filter projects.
        <ul>
          <li>
            <input type="checkbox" id="html" name="html" value="HTML">
            <label for="html">HTML</label>
          </li>
          <li>
            <input type="checkbox" id="css" name="css" value="CSS">
            <label for="css">CSS</label>
          </li>
          <li>
            <input type="checkbox" id="js" name="js" value="JavaScript">
            <label for="js">JavaScript</label>
          </li>
          <!-- Add more checkboxes as needed -->
        </ul>
      </form>
    </section>
    <section>
      Project list as glassy cards with an image and a title + badges of techs + small intro
      need a neat hover effect
      <br/>
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </section>
  </main>
</template>
<script setup lang="ts">
import ProjectCard from '@/components/cards/ProjectCard.vue';
import { ref } from 'vue';
import type { Project } from '@/model/Project';

const projects = ref<Array<Project>>([
  {
    id: 1,
    name: "Portfolio Website",
    techStack: ["Vue", "TailwindCSS"],
    status: "Completed",
    description: "A personal portfolio website to showcase my projects and skills.",
    image: "../assets/img/portfolio.png",
    route: "/projects/portfolio",
  },
  {
    id: 2,
    name: "Workout timer",
    techStack: ["Vue", "Node.js", "MongoDB"],
    status: "In Progress",
    description: "A workout helper to plan and execute your workouts.",
    image: "../assets/img/task-manager.png",
    route: "/projects/workout-timer",
  },
]);
</script>

<style lang="scss">
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
      ul {
        display: flex;
        gap: 10px;
        list-style-type: none;
        li {
          input[type="checkbox"] {
            display: none; // Hide the default checkbox
          }
          label {
            display: inline-block;
            padding: 10px 20px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.8);
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
            &:hover {
              background-color: pink;
            }
          }
        }
      }
    }
  }
}


</style>

