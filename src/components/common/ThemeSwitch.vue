<template>
  <label>
    Switch theme toggle {{ isDarkModeSelected ? 'Light' : 'Dark' }}
    <input type="checkbox" v-model="isDarkModeSelected" />
  </label>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
// align classnames with what is in the heme file
const classNameLight = 'light'
const classNameDark = 'dark'
const isDarkModeSelected = ref(localStorage.getItem('theme') === classNameDark)
// Apply on first load
document.documentElement.classList.toggle(classNameDark, isDarkModeSelected.value)
// Watch for changes
watch(isDarkModeSelected, (newVal) => {
  document.documentElement.classList.toggle(classNameDark, newVal)
  localStorage.setItem('theme', newVal ? classNameDark : classNameLight)
  window.console.log(`Theme switched to: ${newVal ? 'Dark' : 'Light'}`)
})
</script>
