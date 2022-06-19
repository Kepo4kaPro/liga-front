<template>
    <v-footer
        color="#e6e6e6"
    >
        <v-card
            flat
            class="text-center app-footer__card g-content-block w-100"
        >
            <v-card-text>
                <v-btn
                    v-for="link in links"
                    :key="link.label"
                    :href="link.to"
                    variant="text"
                    color="primary"
                    target="_blank"
                >
                    {{ link.label }}
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
                text
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>scb-bonus</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'AppFooter',

    data: () => ({
        links: [
            {
                label: 'Банк',
                to: 'https://sovcombank.ru/',
            },
            {
                label: 'Страховая',
                to: 'https://sovcomins.ru/',
            },
        ],
    }),
}
</script>

<style lang="scss">
.v-footer, .app-footer__card {
    background-color: #e6e6e6;
}
</style>