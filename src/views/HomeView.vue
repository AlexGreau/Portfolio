<template>
  <main class="main-wrapper">
    <section class="hero-wrapper">
      <div>
        <h1>My Portfolio</h1>
        <p>Welcome to my portfolio! I'm a passionate developer.<br/>
        Here you can find my projects, skills, and more about me.<br/>
        Feel free to explore and reach out if you have any questions!</p>
        <ul>
          <li>Get my resume</li>
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
    <section>
      Projects ? Cards with projects and ideas, no need codes yet, just show that you have ideas and executing them
      <br/> 
      Cards with each project stating :
      <ul>
        <li>Project Name & Idea (What it will do)</li>
        <li>Tech Stack You’re Using (Vue, Tailwind, etc.)</li>
        <li> Current Status (e.g., “Building authentication” / “Designing UI”)</li>
        <li>Challenges & Learnings (Write a few lines on what you’ve figured out)</li>
        <li>✅ Screenshots / Figma Mockups – Even if it's just UI sketches!</li>
      </ul>
    </section>
    <section>
      Skills / my tech stack
    </section>
    <section>
      My hobbies
    </section>
  </main>
</template>
<script setup lang="ts">
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
}


</style>

