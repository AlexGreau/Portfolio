<template>
  <footer>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/about/coaching">Swim coaching</RouterLink>
    </nav>
    <section>
      Let's talk. <a href="mailto:alexgreau@live.fr">alexgreau@live.fr</a>
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
          <a href="https://github.com/AlexGreau" target="_blank"> Github </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alexandre-greau/" target="_blank"> LinkedIn </a>
        </li>
      </ul>
    </section>
    <p>© 2025 - Alexandre G. - All rights reserved</p>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  // background: theme.map.get(theme.$light-theme, primary);
  // color: theme.map.get(theme.$light-theme, background);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background: grey;
  padding: 12px clamp(12px, calc((100% - 1280px) * 0.5), 64px);

  display: grid;
  //   grid-template-columns: repeat(2, 50%);
  grid-template-columns: repeat(auto-fit, minmax(min(30rem, 100%), 1fr));
  gap: 12px;

  nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;

    a {
      color: inherit;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #fff;
        text-decoration: underline;
      }
    }

    ul {
      display: flex;
      gap: 8px;
      list-style-type: none;
      padding-left: 0px;
    }
  }

  & > p {
    grid-column: 1 / -1;
    text-align: center;
  }
}
</style>
