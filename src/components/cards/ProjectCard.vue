<template>
    <article class="project-card">
        <h4>{{ project.name }}</h4>
        <p>{{ project.description }}</p>
        <ul>
            <li v-for="(tech, index) in project.techStack" :key="index" class="pill">{{ tech }}</li>
        </ul>
        <router-link v-if="project.route" :to="project.route" class="button">See more</router-link>
    </article>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { Project } from '../../model/Project';
import { RouterLink } from 'vue-router';
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