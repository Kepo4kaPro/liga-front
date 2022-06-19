<template>
    <v-card
        class="product-card rounded-lg"
        :class="{ 'product-card--select' : select }"
        type="button"
    >
<!--        <v-img-->
<!--            src="@/assets/img/auto.jpg"-->
<!--            cover-->
<!--            gradient="rgba(255, 255, 255, .85), rgba(255, 255, 255, .85)"-->
<!--            class="product-card__img"-->
<!--        >-->
<!--            <v-list-item two-line>-->
<!--                <v-list-item-content>-->
<!--                    <v-card-title class="pa-0"> {{ label }} </v-card-title>-->

<!--                    <v-list-item-subtitle>-->
<!--                        <li-->
<!--                            v-for="(category, index) in subcategories"-->
<!--                            :key="index"-->
<!--                        >-->
<!--                            {{ category.label }}-->
<!--                        </li>-->
<!--                    </v-list-item-subtitle>-->
<!--                </v-list-item-content>-->
<!--            </v-list-item>-->

<!--            <div class="product-card__icon">-->
<!--                <v-icon-->
<!--                >-->
<!--                    {{ icon }}-->
<!--                </v-icon>-->
<!--            </div>-->
<!--        </v-img>-->

        <v-list-item two-line>
            <v-list-item-content>
                <v-card-title class="pa-0">
                    {{ label }}

                    <v-chip
                        v-if="recommended"
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
                        v-for="(category, index) in subcategories"
                        :key="index"
                    >
                        {{ category.label }}
                    </li>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <div class="product-card__icon">
            <v-icon
                :color="select ? 'primary' : ''"
            >
                {{ select ? 'mdi-shield-check-outline' : icon }}
            </v-icon>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'productCard',

    props: {
        label: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
        subcategories: {
            type: Array,
            default: () => ([]),
        },
        select: {
            type: Boolean,
            default: false,
        },
        recommended: {
            type: Boolean,
            default: false,
        },
    }
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
    height: 200px;
    overflow: hidden;
    transition: background-color $transitionSpeed $transitionSpeed / 5;
    box-shadow: 0 12px 50px 2px #13507c24;

    &--select {
        border: solid 1px #0a68ff;
    }

    &__img {
        // filter: blur(1px);
    }

    &:hover,
    &--select {
        // box-shadow: 0 0 8px rgba(0,0,0,.2);
        background-color: $fillColor;
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