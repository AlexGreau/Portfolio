<template>
  <footer>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/about/coaching">Swim coaching</RouterLink>
        </li>
      </ul>
    </nav>
    <section>
      Glad you made it to down here! <br />
      Ping me at <a href="mailto:alexgreau@live.fr">alexgreau@live.fr</a>
      <ul>
        <li>
          <a
            href="https://drive.google.com/file/d/1DEd9sTz8nBU5GiNecM1OBAAv88Kr_LZM/view?usp=drive_link"
            target="_blank"
            >My CV</a
          >
        </li>
        <li>
          <a href="mailto:alexgreau@live.fr?subject=Job%20Prospect">Hire me </a>
        </li>
        <li>
          <a href="https://github.com/AlexGreau" target="_blank">Github </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alexandre-greau/" target="_blank">LinkedIn </a>
        </li>
      </ul>
    </section>
    <p>© 2025 - Alexandre G. - All rights reserved</p>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  background: var(--color-surface-container-high);
  color: var(--color-on-surface);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 64px max(calc((100% - 1280px) * 0.5), 12px) 12px max(calc((100% - 1280px) * 0.5), 12px);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(450px, 100%), 1fr));
  gap: 12px;

  nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
    font-size: larger;

    ul {
      list-style: none;
      li {
        padding-left: 0px;
        a {
          position: relative;
          text-decoration: none;
          font-size: 32px;
          transition: all 0.3s ease;

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
            font-weight: bold;
            &::after {
              width: 100%;
            }
          }
        }
      }
    }
  }

  section {
    margin-bottom: 16px;
    font-size: 24px;

    a {
      // all links
      color: inherit;
      text-decoration: none;
      font-weight: bold;
      transition: font-weight 0.3s ease;
    }

    & > a {
      // only the first link
      text-decoration: underline;
      transition: all 0.3s ease;
      &:hover {
        text-decoration: none;
      }
    }

    ul {
      display: flex;
      gap: 1em;
      list-style-type: none;
      padding-left: 0px;
      padding-top: 1.5em;
      li {
        a {
          position: relative;
          &::before {
            position: relative;
            top: 4px;
            left: 0px;
            height: 24px;
            width: 24px;
            margin-right: 3px;
            content: '';
            background-color: var(--color-primary);
            -webkit-mask: url('@/assets/icons/arrows/ne.svg') no-repeat center;
            mask: url('@/assets/icons/arrows/ne.svg') no-repeat center;
            mask-size: contain;
            align-items: center;
            // background-image: ;
            display: inline-block;
            transition: all 0.3s ease;
          }
          &:hover {
            &::before {
              transform: rotate(45deg);
            }
          }
        }
      }
    }
  }

  & > p {
    grid-column: 1 / -1;
    text-align: center;
  }
}
</style>
