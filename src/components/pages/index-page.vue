<template>
    <div class="mt-4">
        <products-container
            v-model="product"
            :recommended="productRecommended"
        ></products-container>

        <v-divider class="my-4 g-content-block"></v-divider>
            <request-steps></request-steps>
        <v-divider class="my-4 g-content-block"></v-divider>

        <sender-promo
            v-if="isPyrus"
            :select-product="product"
        ></sender-promo>

        <sender-main
            v-else
            :select-product="product"
        ></sender-main>
    </div>
</template>

<script>
import ProductsContainer from '~/components/products/products-container.vue';
import RequestSteps from '~/components/request-steps.vue';
import SenderMain from '~/components/sender/sender-main/sender-main.vue';
import SenderPromo from '~/components/sender/sender-promo.vue';

import api from '~/api.ts';

export default {
    name: 'IndexPage',

    components: {
        ProductsContainer,
        RequestSteps,
        SenderMain,
        SenderPromo,
    },

    data: () => ({
        product: null,
        productRecommended: null,
        isPyrus: false,
    }),

    mounted() {
        this.checkCode();
    },

    watch: {
        '$route.query.promo': {
            immediate: true,
            handler(val) {
                this.checkCode(val);
            },
        },
    },

    methods: {
        async checkCode(code) {
            this.isPyrus = false;

            try {
                if (code) {
                    const { data } = await api.get(`promo/check/${code}`);

                    this.productRecommended = data.product || null;
                    this.isPyrus = true;
                }
            } catch {
                await this.$router.replace({
                    ...this.$route.query,
                    promo: undefined,
                })
            }
        },
    },
}
</script>