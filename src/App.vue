<template>
 <!-- <Header /> --> 
  <RouterView id="app-wrapper"/>
  <Footer />
</template>

<style lang="scss">
#app { // id used in mains.ts to mount
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';

</script>
