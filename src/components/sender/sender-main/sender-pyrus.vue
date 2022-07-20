<template>
    <v-card
        class="sender-pyrus sender-pyrus--form rounded-lg"
    >
        <v-overlay
            :modelValue="!selectProduct"
            contained
            scroll-strategy="scroll"
            class="align-center justify-center rounded-lg"
        >
            <v-btn
                color="warning"
                @click="scrollToProducts"
            >
                <v-icon start> mdi-arrow-up-circle-outline </v-icon>

                Выберите продукт
            </v-btn>
        </v-overlay>

        <v-card-header>
            <v-card-header-text>
                <v-card-title class="text-h5"> Заявка </v-card-title>
            </v-card-header-text>
        </v-card-header>

        <ui-loader :modelValue="isLoading">
            <v-form
                v-model="valid"
                class="ma-4"
            >
                <v-text-field
                    v-model.trim="form.name"
                    :counter="160"
                    :rules="[rules.required]"
                    label="ФИО"
                    require
                    prepend-inner-icon="mdi-account-arrow-right-outline"
                ></v-text-field>

                <ui-input
                    v-model="form.phone"
                    mask="+7 (###) ###-##-##"
                    :rules="[rules.required, rules.phone]"
                    external-without-mask
                    label="Телефон"
                    required
                    prepend-inner-icon="mdi-phone-dial-outline"
                ></ui-input>

                <v-autocomplete
                    v-model="form.city"
                    v-model:search="cities.filter"
                    label="Город"
                    :items="cities.cities"
                    required
                    prepend-inner-icon="mdi-map-marker-radius-outline"
                ></v-autocomplete>
            </v-form>
        </ui-loader>

        <div class="px-4 w-100 sender-pyrus--form-btn">
            <v-btn
                flat
                color="primary"
                class="w-100"
                :disabled="!form.phone || !form.name || !form.city || isLoading"
                @click="createPyrus"
            >
                Отправить
            </v-btn>
        </div>
    </v-card>

    <v-overlay :model-value="isComplete" class="align-center justify-center">
        <v-card
            class="mx-auto"
            max-width="344"
        >
            <v-card-text>
                <p class="text-h4 text--primary">
                    Всё готово
                </p>

                <div class="text--primary">
                    В ближайшее время с вами свяжутся наши операторы.
                </div>
            </v-card-text>

            <v-card-actions>
                <v-btn
                    text
                    color="primary"
                    @click="$router.push('/')"
                >
                    закрыть
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-overlay>
</template>

<script>
import Cities from '~/classes/cities.ts';
import Pyrus from '~/classes/pyrus';

export default {
    name: 'SenderPyrus',

    props: {
        selectProduct: {
            type: String,
            default: '',
        },
    },

    data: () => ({
        isComplete: false,
        cities: new Cities(),
        isLoading: false,

        form: {
            name: '',
            phone: '',
            city: '',
        },

        valid: false,

        rules: {
            required: value => Boolean(value) || 'Это поле обязательно!',
            phone: value => {
                return value.length === 18 || 'Некорректный номер телефона!'
            },
        },
    }),

    methods: {
        async createPyrus() {
            if (!this.valid) {
                return;
            }

            try {
                this.isLoading = true;

                await Pyrus.createPyrus({
                    username: this.form.name,
                    phone: this.form.phone,
                    city: this.form.city,
                    product: this.selectProduct,
                    promo: this.$route.query.promo,
                });

                this.isComplete = true;
            }
            finally {
                this.isLoading = false;
            }
        },
        scrollToProducts() {
            const el = document.getElementById('products-container__link');
            el.scrollIntoView({ block: 'center', behavior: 'smooth' });
        },
    },
}
</script>

<style lang="scss">
.sender-pyrus {
    background-color: #ffffff;
    overflow: hidden;
    box-shadow: 0 12px 50px 2px #13507c24;

    &--form {
        grid-column-end: span 1;

        &-btn {
            height: 50px;
            position: absolute;
            bottom: 0;
        }

        min-height: 400px;
    }

    @media screen and (max-width: 959px) {
        &--form {
            grid-column-end: span 3;
        }
    }
}
</style>