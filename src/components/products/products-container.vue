<template>
    <div class="g-content-block products-container">
        <product-card
            v-for="product in products"
            :key="product.id"
        >
            {{ product }}
        </product-card>
    </div>
</template>

<script>
import ProductCard from './product-card.vue';

export default {
    name: 'ProductsContainer',

    components: {
        ProductCard,
    },

    data: () => ({
        products: Object.freeze([
            {
                id: 'KASCO',
            },
            {
                id: 'OSAGO',
            },
            {
                id: 'KASCO1',
            },
            {
                id: 'KASCO2',
            },
            {
                id: 'KASCO3',
            },
        ]),
    }),
}
</script>

<style lang="scss">
.products-container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns : repeat(12, 1fr);

    & * {
        grid-column-end: span 4;
    }

    & *:nth-child(1),
    & *:nth-child(2) {
        grid-column-end: span 6;
    }
}
</style>