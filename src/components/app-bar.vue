<template>
    <v-app-bar
        app
        color="#e6e6e6"
        elevation="0"
        height="54"
    >
        <div class="g-content-block g-content-block--no-padding w-100 d-flex align-center justify-space-between">
            <v-img
                src="@/assets/logo_scbs.svg"
                max-width="175"
            ></v-img>

            <div>
                <v-btn
                    v-if="isSearchAvaliable"
                    :icon="isSearchOpen ? 'mdi-magnify-minus-outline' : 'mdi-magnify'"
                    @click="toggleSearch"
                ></v-btn>

                <v-btn
                    v-if="!isLogin"
                    @click="openLogin"
                >
                    <div class="d-flex align-center">
                        <v-icon
                            size="22"
                            class="mr-1"
                        >
                            mdi-account-check-outline
                        </v-icon>

                        Войти
                    </div>
                </v-btn>

                <app-bar-user
                    v-else
                    @logout="logout"
                ></app-bar-user>
            </div>

            <login-modal
                v-model="showLogin"
            ></login-modal>
        </div>
    </v-app-bar>
</template>

<script>
import api from '~/api.ts';
import LoginModal from '~/components/login-modal.vue';
import AppBarUser from '~/components/app-bar-user.vue';

export default {
    name: 'AppBar',

    components: {
        LoginModal,
        AppBarUser,
    },

    data: () => ({
        showLogin: false,
    }),

    computed: {
        isLogin() {
            return this.$store.state.user.isLogin;
        },
        isSearchAvaliable() {
            return Boolean(this.$route.meta?.search);
        },
        isSearchOpen() {
            return this.$store.state.isSearchOpen;
        },
    },

    methods: {
        openLogin() {
            this.showLogin = true;
        },
        logout() {
            api.logout();
        },
        toggleSearch() {
            this.$store.commit('updateState', { isSearchOpen: !this.isSearchOpen });
        },
    },
}
</script>