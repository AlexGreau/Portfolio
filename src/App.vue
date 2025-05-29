<template>
  <!-- <Header /> -->
  <HaloCursor />
  <RouterView id="app-wrapper" />
  <BackToTopButton />
  <!-- <Footer /> -->
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
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
