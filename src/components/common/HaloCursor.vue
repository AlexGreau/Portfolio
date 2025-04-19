<template>
  <div class="cursor-halo"></div>
</template>
<style lang="scss">
.cursor-halo {
  will-change: transform; // Hinting the browser to optimize for transform changes
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 30rem;
  height: 30rem;
  background: radial-gradient(
    rgba(29, 78, 216, 0.15),
    transparent 80%
  ); /* Replace with a semi-transparent version of your theme's primary color */
  transition: transform 0.1s ease;
}
</style>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'HaloCursor',
  setup() {
    onMounted(() => {
      // Check if the device has a fine pointer (e.g., mouse)
      if (window.matchMedia('(pointer: fine)').matches) {
        const halo = document.querySelector('.cursor-halo') as HTMLElement

        document.addEventListener('mousemove', (e) => {
          if (halo) {
            halo.style.top = `${e.clientY}px`
            halo.style.left = `${e.clientX}px`
          }
        })
      }
    })
  },
})
</script>
