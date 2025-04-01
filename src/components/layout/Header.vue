<template>
    <header class="topbar">
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
        </nav>
    </header>
</template>
<style lang="scss">
header.topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #333;
}
</style>