<template>
    <v-btn>
        <div class="d-flex align-center">
            <v-icon
                size="22"
                class="mr-1"
            >
                mdi-account-check-outline
            </v-icon>

            Admin
        </div>

        <v-menu activator="parent">
            <v-list dense>
                <template
                    v-for="(link, index) in links"
                    :key="index"
                >
                    <v-list-item
                        @click="provider(link.action)"
                    >

                        <v-list-item-avatar>
                            <v-icon :icon="link.icon"></v-icon>
                        </v-list-item-avatar>

                        <v-list-item-title> {{ link.title }} </v-list-item-title>
                    </v-list-item>

                    <v-divider
                        v-if="link.divider"
                        inset
                    ></v-divider>
                </template>
            </v-list>
        </v-menu>
    </v-btn>
</template>

<script>
export default {
    name: 'AppBarUser',

    data: () => ({
        links: [
            {
                title: 'Выйти',
                icon: 'mdi-logout',
                action: 'logout',
            }
        ],
    }),

    methods: {
        provider(f) {
            this[f]();
        },
        logout() {
            this.$emit('logout');
        },
    },
};
</script>