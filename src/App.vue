<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
@import "src/assets/style/main";

.app {
    min-height: 100vh;
}
</style>