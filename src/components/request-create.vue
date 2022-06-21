<template>
    <div class="g-content-block request-create">
        <v-card
            class="request-create__card request-create__card--info rounded-lg"
        >
        </v-card>

        <v-card
            class="request-create__card request-create__card--form rounded-lg"
        >
            <v-card-header>
                <v-card-header-text>
                    <v-card-title class="text-h5">{{ promoId ? 'Поделится' : 'Пригласить'}}</v-card-title>

                    <v-card-subtitle>
                        <v-icon
                            icon="mdi-information-outline"
                            size="18"
                            color="info"
                            class="mr-1 pb-1"
                        ></v-icon>

                        Мы зачислим вам бонус
                    </v-card-subtitle>
                </v-card-header-text>
            </v-card-header>

            <template v-if="!promoId">
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

                    <template v-if="adminContent">
                        <div class="text-caption mx-1">Количество активаций</div>

                        <v-slider
                            v-model="form.limit"
                            :max="500"
                            :min="1"
                            :step="1"
                            label="G"
                            hide-details
                            :disabled="form.unlimit"
                        >
                            <template #append>
                                <v-text-field
                                    v-model="form.limit"
                                    type="number"
                                    style="width: 80px"
                                    density="compact"
                                    hide-details
                                    variant="outlined"
                                    :disabled="form.unlimit"
                                ></v-text-field>
                            </template>
                        </v-slider>

                        <v-switch
                            v-model="form.unlimit"
                            label="Безлимитно"
                        ></v-switch>
                    </template>
                </v-form>

                <div class="px-4 w-100 request-create__card--form-btn">
                    <v-btn
                        flat
                        color="primary"
                        class="w-100"
                        :disabled="!form.phone || !form.name"
                        @click="createPromo"
                    >
                        Создать предложение
                    </v-btn>
                </div>
            </template>

            <div
                v-else
                class="mx-4"
            >
                <v-snackbar
                    v-model="snackbar"
                    timeout="1000"
                >
                    Ссылка скопирована
                </v-snackbar>

                <v-text-field
                    ref="textToCopy"
                    :modelValue="link"
                    label="Ссылка"
                    role="button"
                    prepend-inner-icon="mdi-content-copy"
                    @click="copyLink"
                ></v-text-field>

                <ui-qr-code
                    :model-value="link"
                ></ui-qr-code>
            </div>
        </v-card>
    </div>
</template>

<script>
import api from '~/api.ts';

export default {
    name: 'RequestCreate',

    props: {
        selectProduct: {
            type: String,
            default: '',
        },
    },

    data: () => ({
        form: {
            name: '',
            phone: '',
            limit: 1,
            unlimit: false,
        },
        promoId: '',
        snackbar: false,

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
            return this.$store.state.user.can('MAIN_ADMIN');
        },
        link() {
            return `${window.location.origin}/?promo=${this.promoId}`;
        },
    },

    methods: {
        async createPromo() {
            if (!this.valid) {
                return;
            }

            let request = {
                username: this.form.name,
                phone: this.form.phone,
                product: this.selectProduct || undefined,
            }

            if (this.adminContent) {
                request = {
                    ...request,
                    limit: this.form.limit,
                    unlimit: this.form.unlimit,
                }
            }

            const { data } = await api.post('promo/create', request);

            this.promoId = data[0].name;
        },
        copyLink() {
            const textToCopy = this.$refs.textToCopy.$el.querySelector('input')

            textToCopy.select()
            document.execCommand('copy');
            this.snackbar = true;
        },
    },
}
</script>

<style lang="scss">
.request-create {
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