<template>
  <article class="work-card">
    <p class="date">{{ formatDoubleDates(work.startDate, work.endDate) }}</p>
    <div>
      <a :href="work.link" target="_blank">{{ `${work.position} - ${work.company}` }}</a>
      <p>{{ work.description }}</p>
      <ul>
        <li v-for="(item, index) in work.tasks" :key="index">{{ item }}</li>
      </ul>
      <ul class="tech-stack">
        <li v-for="(tech, index) in work.techs" :key="index" class="pill">{{ tech }}</li>
      </ul>
    </div>
  </article>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { WorkExp } from '@/model/WorkExp'
export default defineComponent({
  name: 'ProjectCard',
  props: {
    work: {
      type: Object as () => WorkExp,
      required: true,
    },
  },
  data() {
    return {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    }
  },
  methods: {
    formatDate(date: Date): string {
      return `${this.months[date.getMonth()]} ${String(date.getFullYear())}`
    },
    formatDoubleDates(startDate: Date, endDate: Date|undefined): string {
      if (!startDate) {
        return ''
      } else if (!endDate) {
        return `${this.formatDate(new Date(startDate))} - Present`
      }
        return `${this.formatDate(new Date(startDate))} - ${this.formatDate(new Date(endDate))}`
    },
  },
})
</script>
