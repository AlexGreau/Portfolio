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
   // background: theme.map.get(theme.$light-theme, primary);
   // color: theme.map.get(theme.$light-theme, background);
    padding: 1rem;
    text-align: center;
    width: 100vw;
}
</style>