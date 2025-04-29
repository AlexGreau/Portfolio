<template>
  <a href="#top">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="currentColor"
    >
      <path
        d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"
      />
    </svg>
  </a>
</template>
<style scoped lang="scss">
@use '@/assets/common/variables.scss' as *; // Import variables
a {
  display: none;
  position: fixed;
  width: 32px;
  height: 32px;
  bottom: 20px;
  right: 20px;
  background-color: var(--color-on-background);
  color: var(--color-background);
  border: none;
  border-radius: 0.5rem;
  padding: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: val(--color-surface);
  }
}
@media (max-width: $mobile-breakpoint) {
  a {
    display: block;
  }
}
</style>
