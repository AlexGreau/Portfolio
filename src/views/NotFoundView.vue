<template>
  <section>
    <img src="@/assets/img/buoy.png" alt="Buoy" width="200" height="200" />
    Oops, looks like you swam too far
    <RouterLink to="/">Go back to safety</RouterLink>
  </section>
</template>
<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  font-size: 1.5rem;
  gap: 1rem;
}
img {
  width: 200px;
  height: 200px;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
<script lang="ts" setup>
// onm mount scroll to top
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
