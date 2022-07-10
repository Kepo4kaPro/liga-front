<template>
    <div class="g-content-block sender-main">
        <v-card
            class="sender-main__card sender-main__card--info rounded-lg"
        >
        </v-card>

        <div class="sender-main__card--form">
            <v-alert
                type="warning"
                class="rounded-lg mb-4"
            >
                Только для сотрудников.
            </v-alert>

            <v-card
                class="sender-main__card rounded-lg mb-4"
            >
                <v-card-header>
                    <v-card-header-text>
                        <v-card-title class="text-h5"> Клиент </v-card-title>
                    </v-card-header-text>
                </v-card-header>

                <div class="ma-4 d-flex justify-center flex-wrap mt-0">
                    <v-btn-toggle
                        v-model="whoUser"
                        color="primary"
                        group
                        mandatory
                    >
                        <v-btn value="self">
                            Я
                        </v-btn>

                        <v-btn value="other">
                            Мой знакомый
                        </v-btn>
                    </v-btn-toggle>
                </div>
            </v-card>

            <sender-pyrus
                v-if="whoUser === 'self'"
                :select-product="selectProduct"
            ></sender-pyrus>

            <sender-friend
                v-else-if="whoUser === 'other'"
                :select-product="selectProduct"
            ></sender-friend>
        </div>
    </div>
</template>

<script>
import SenderFriend from './sender-friend.vue';
import SenderPyrus from './sender-pyrus.vue';

export default {
    name: 'SenderMain',

    components: {
        SenderFriend,
        SenderPyrus,
    },

    props: {
        selectProduct: {
            type: String,
            default: '',
        },
    },

    data: () => ({
        whoUser: 'self',
    }),
}
</script>

<style lang="scss">
.sender-main {
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