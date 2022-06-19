<template>
    <v-app>
        <app-bar></app-bar>

        <v-main class="app__main pb-4">
            <router-view></router-view>
        </v-main>

        <app-footer></app-footer>
    </v-app>
</template>

<script>
import AppBar from '~/components/app-bar.vue';
import AppFooter from '~/components/app-footer.vue';

export default {
    name: 'App',

    components: {
        AppBar,
        AppFooter,
    },
}
</script>

<style lang="scss">
@import "assets/style/main";

.app {
    &__main {
        background-color: #f5f8fa;
        min-height: calc(100vh - 180px);
    }
}
</style>
