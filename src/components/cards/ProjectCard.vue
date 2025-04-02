<template>
    <article class="project-card">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
        <ul>
            <li v-for="(tech, index) in project.techStack" :key="index" class="pill">{{ tech }}</li>
        </ul>
        <a v-if="project.routeLink" :href="project.routeLink" target="_blank">View Project</a>
    </article>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { Project } from '../../model/Project';
export default defineComponent({
    name: 'ProjectCard',
    props: {
        project: {
            type: Object as () => Project,
            required: true,
        },
    },
});
</script>