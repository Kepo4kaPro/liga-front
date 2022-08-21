<template>
    <v-footer
        color="#e6e6e6"
    >
        <v-card
            flat
            class="text-center app-footer__card g-content-block w-100"
        >
            <div class="d-flex">
                <v-img
                    v-for="img in imgS"
                    :key="img"
                    :src="require(`@/assets/footer/${img}.svg`)"
                    max-width="175"
                    height="40"
                    class="mr-4 my-2"
                ></v-img>
            </div>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>scm-bonus</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'AppFooter',

    data: () => ({
        imgS: [
            'scb_s',
            'scb_life',
            'scb',
        ],
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
