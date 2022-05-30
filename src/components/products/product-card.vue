<template>
    <div class="product-card">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
}
</script>

<style lang="scss">
.product-card {
    width: 100%;
    height: 200px;
    background: blue;
}
</style>