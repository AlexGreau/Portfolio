<template>
  <!-- <Header /> -->
  <HaloCursor />
  <RouterView id="app-wrapper" />
  <BackToTopButton />
  <!-- <Footer /> -->
</template>

<style lang="scss">
#app {
  // id used in mains.ts to mount
  display: flex;
  flex-direction: column;
  min-height: 100%;
  // background-image: url('@/assets/img/background1_wave_style.svg');
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center;
}
body {
  margin: 0px;
  padding: 0px;
}
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HaloCursor from '@/components/common/HaloCursor.vue'
import BackToTopButton from './components/common/BackToTopButton.vue'
</script>
