<template>
    <footer>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/about/coaching">Swim coaching</RouterLink>
        </nav>
    </footer>
</template>
<style lang="scss" scoped>
footer {
    background: var(--md-sys-color-on-background);
    color: var(--md-sys-color-background);
    padding: 1rem;
    text-align: center;
    width: 100vw;
}
</style>