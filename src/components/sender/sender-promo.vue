<template>
    <div class="g-content-block sender-main">
        <v-card
            class="sender-main__card sender-main__card--info rounded-lg"
        >
        </v-card>

        <div class="sender-main__card--form">
            <sender-pyrus
                :select-product="selectProduct"
            ></sender-pyrus>
        </div>
    </div>
</template>

<script>
import SenderPyrus from './sender-main/sender-pyrus.vue';

export default {
    name: 'SenderMain',

    components: {
        SenderPyrus,
    },

    props: {
        selectProduct: {
            type: String,
            default: '',
        },
    },
}
</script>

<style lang="scss">
.sender-promo {
    display: grid;
    grid-gap: 16px;
    grid-template-columns : repeat(3, 1fr);

    &__card {
        background-color: #ffffff;
        overflow: hidden;
        box-shadow: 0 12px 50px 2px #13507c24;

        &--form {
            grid-column-end: span 1;
            min-height: 400px;
        }

        &--info {
            grid-column-end: span 2;
        }

        @media screen and (max-width: 959px) {
            &--info {
                display: none;
            }

            &--form {
                grid-column-end: span 3;
            }
        }
    }
}
</style>