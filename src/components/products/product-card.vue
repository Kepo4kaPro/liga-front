<template>
    <v-card
        class="product-card rounded-lg"
        :class="{
            'product-card--select' : product.select,
            'product-card--transparent': product.background,
        }"
        type="button"
    >
        <v-img
            v-if="product.background"
            :src="require(`@/assets/img/${product.background}.png`)"
            cover
        ></v-img>

        <v-list-item two-line>
            <v-list-item-content>
                <v-card-title class="pa-0">
                    {{ product.label }}

                    <v-chip
                        v-if="product.recommended"
                        class="mx-2"
                        color="orange"
                        label
                    >
                        <v-icon start icon="mdi-star-outline"></v-icon>

                        Вам рекомендуют
                    </v-chip>
                </v-card-title>

                <v-list-item-subtitle>
                    <li
                        v-for="(category, index) in product.subcategories"
                        :key="index"
                    >
                        {{ category.label }}
                    </li>

                    <span> {{ product.description }} </span>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <div
            v-if="product.icon"
            class="product-card__icon"
        >
            <v-icon
                :color="product.select ? 'primary' : ''"
            >
                {{ select ? 'mdi-shield-check-outline' : product.icon }}
            </v-icon>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'productCard',

    props: {
        product: {
            type: Object,
            default: () => ({}),
        },
    },
}
</script>

<style lang="scss">
$iconBoxSize: 60px;
$transitionSpeed: .226s;
$fillColor: #f2f2f4;

.product-card {
    position: relative;
    $this: &;
    width: 100%;
    overflow: hidden;
    transition: background-color $transitionSpeed $transitionSpeed / 5;
    box-shadow: 0 12px 50px 2px #13507c24;

    @media screen and (max-width: 600px) {
        height: calc(100vw / (1 * 1.69));
    }

    @media screen and (min-width: 600px) and (max-width: 960px) {
        height: calc(100vw / (2 * 1.69));
    }

    @media screen and (min-width: 960px) and (max-width: 1200px) {
        height: calc(100vw / (3 * 1.69));
    }

    @media screen and (min-width: 1201px){
        height: 240px;
    }

    &--select {
        border: solid 1px #0a68ff;
        grid-row: 1;
        grid-column-end: span 12 !important;
    }

    &__img {
        // filter: blur(1px);
    }

    &:hover,
    &--select {
        // box-shadow: 0 0 8px rgba(0,0,0,.2);
        background-color: $fillColor;
    }

    &--transparent {
        background-color: transparent;
    }

    &__icon {
        position: absolute;
        width: $iconBoxSize;
        height: $iconBoxSize;
        right: 8px;
        bottom: 8px;
        display: flex;
        justify-content: center;
        align-items: center;

        & i {
            z-index: 2;
            font-size: 40px;
            transition: font-size $transitionSpeed / 2;

            #{$this}:hover &,
            #{$this}--select & {
                font-size: 55px;
            }
        }

        &::after {
            content: '';
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            border-radius: 50%;
            background: $fillColor;

            height: $iconBoxSize;
            width: $iconBoxSize;

            transition: width $transitionSpeed, height $transitionSpeed, opacity $transitionSpeed;

            #{$this}:hover &,
            #{$this}--select &{
                height: $iconBoxSize * 5;
                width: $iconBoxSize * 5;
                opacity: .8;
            }
        }
    }
}
</style>
