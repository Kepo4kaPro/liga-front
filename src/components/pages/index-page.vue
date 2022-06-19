<template>
    <div class="mt-4">
        <products-container
            v-model="product"
            :recommended="productRecommended"
        ></products-container>

        <v-divider class="my-4 g-content-block"></v-divider>
            <request-steps></request-steps>
        <v-divider class="my-4 g-content-block"></v-divider>

        <pyrus-create
            v-if="isPyrus"
            :select-product="product"
        ></pyrus-create>

        <request-create
            v-else
            :select-product="product"
        ></request-create>
    </div>
</template>

<script>
import ProductsContainer from '~/components/products/products-container.vue';
import RequestCreate from '~/components/request-create.vue';
import RequestSteps from '~/components/request-steps.vue';
import PyrusCreate from '~/components/pyrus-create.vue';

import api from '~/api.ts';

export default {
    name: 'IndexPage',

    components: {
        ProductsContainer,
        RequestCreate,
        RequestSteps,
        PyrusCreate,
    },

    data: () => ({
        product: null,
        productRecommended: null,
        isPyrus: false,
    }),

    mounted() {
        this.checkCode();
    },

    methods: {
        async checkCode() {
            const code = this.$route.query.promo;

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