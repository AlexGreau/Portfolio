<template>
  <article class="card project">
    <a v-if="project.link" :href="project.link" target="_blank">{{ project.name }}</a>
    <p>{{ project.description }}</p>
    <ul class="tech-stack">
      <li class="pill" :class="getStatusPillClass(project.status)" v-if="project.status">
        {{ project.status }}
      </li>
      <li v-for="(tech, index) in project.techStack" :key="index" class="pill">{{ tech }}</li>
    </ul>
  </article>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { Project } from '../../model/Project'
import { Status } from '@/model/Status'

export default defineComponent({
  name: 'ProjectCard',
  props: {
    project: {
      type: Object as () => Project,
      required: true,
    },
  },
  methods: {
    getStatusPillClass(status: string): string {
      switch (status) {
        case Status.COMPLETED:
          return 'success'
        case Status.IN_PROGRESS:
          return 'progress'
        case Status.TO_DO:
        case Status.ON_HOLD:
          return 'disabled'
        default:
          return ''
      }
    },
  },
})
</script>
