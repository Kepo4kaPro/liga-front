<template>
    <div class="g-content-block pyrus-create">
        <v-card
            class="pyrus-create__card pyrus-create__card--info rounded-lg"
        ></v-card>

        <v-card
            class="pyrus-create__card pyrus-create__card--form rounded-lg"
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
                    <v-card-title class="text-h5">Заявка</v-card-title>
                </v-card-header-text>
            </v-card-header>

            <v-form
                v-model="valid"
                class="ma-4"
            >
                <v-text-field
                    v-model="form.name"
                    :counter="160"
                    :rules="[rules.required]"
                    label="ФИО"
                    require
                    prepend-inner-icon="mdi-account-arrow-right-outline"
                ></v-text-field>

                <ui-input
                    v-model="form.phone"
                    mask="+7 (###) ###-##-##"
                    external-without-mask
                    :rules="[rules.required, rules.phone]"
                    label="Телефон"
                    required
                    prepend-inner-icon="mdi-phone-dial-outline"
                ></ui-input>

                <v-autocomplete
                    v-model="form.city"
                    v-model:search="form.cityFilter"
                    label="Город"
                    :items="cities"
                    required
                    prepend-inner-icon="mdi-map-marker-radius-outline"
                ></v-autocomplete>
            </v-form>

            <div class="px-4 w-100 pyrus-create__card--form-btn">
                <v-btn
                    flat
                    color="primary"
                    class="w-100"
                    @click="createPyrus"
                >
                    Отправить заявку
                </v-btn>
            </div>
        </v-card>
    </div>

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
                    @click="close"
                >
                    закрыть
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-overlay>
</template>

<script>
import api from '~/api.ts';

export default {
    name: 'SenderPromo',

    props: {
        selectProduct: {
            type: String,
            default: '',
        },
    },

    data: () => ({
        isLoading: false,

        isComplete: false,

        form: {
            name: '',
            phone: '',
            city: '',
            cityFilter: '',
            limit: 1,
            unlimit: false,
        },

        valid: false,

        rules: {
            required: value => Boolean(value) || 'Это поле обязательно!',
            phone: value => {
                console.log(value);

                return value.length === 18 || 'Некорректный номер телефона!'
            },
        },
    }),

    computed: {
        adminContent() {
            return false;
        },
        cities() {
            return this.$store.state.cities.filter(city => city.toLowerCase().startsWith(this.form.cityFilter.toLowerCase()));
        },
    },

    mounted() {
        this.loadCities();
    },

    methods: {
        async loadCities() {
            await this.$store.dispatch('loadCities');
        },
        scrollToProducts() {
            const el = document.getElementById('products-container__link');
            el.scrollIntoView({ block: 'center', behavior: 'smooth' });
        },
        async createPyrus() {
            if (!this.valid) {
                return;
            }

            const request = {
                username: this.form.name,
                phone: this.form.phone,
                city: this.form.city,
                product: this.selectProduct || undefined,
            }

            await api.post(`promo/pyrus/${this.$route.query.promo}`, request);

            this.isComplete = true;
        },
        close() {
            this.$router.push({ name: 'main', query: null });
        },
    }
}
</script>

<style lang="scss">
.pyrus-create {
    display: grid;
    grid-gap: 16px;
    grid-template-columns : repeat(3, 1fr);

    &__card {
        background-color: #ffffff;
        min-height: 400px;
        overflow: hidden;
        box-shadow: 0 12px 50px 2px #13507c24;

        &--form {
            grid-column-end: span 1;

            &-btn {
                height: 50px;
                position: absolute;
                bottom: 0;
            }
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