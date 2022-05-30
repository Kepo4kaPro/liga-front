<template>
    <div>
        <products-container></products-container>
    </div>
</template>

<script>
import ProductsContainer from '~/components/products/products-container.vue';

export default {
    name: 'IndexPage',

    components: {
        ProductsContainer,
    },
}
</script>