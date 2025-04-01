<template>
    <div class="project-card">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <ul>
            <li v-for="(tech, index) in project.techStack" :key="index">{{ tech }}</li>
        </ul>
        <a :href="project.link" target="_blank">View Project</a>
    </div>
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