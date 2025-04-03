<template>
    <section>
        <div>
            A nice image to illustrate the not found
        </div>
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
        color: #333;
    }
    a {
        margin-top: 20px;
        text-decoration: none;
        color: #007BFF;
    }
    a:hover {
        text-decoration: underline;
    }

</style>
<script lang="ts" setup>
// onm mount scroll to top
import { onMounted } from 'vue';

onMounted(() => {
    window.scrollTo(0, 0);
});

</script>