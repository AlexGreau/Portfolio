<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped lang="scss">

</style>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>
