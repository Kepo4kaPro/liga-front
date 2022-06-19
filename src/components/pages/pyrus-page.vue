<template>
    <div class="g-content-block pyrus-page mt-4">
        <div class="pyrus-page__buffer"></div>

        <div class="pyrus-page__main">
            <v-form class="pyrus-page__form" v-model="form.valid">
                <ui-loader :modelValue="isLoading">
                    <v-text-field
                        v-model="form.name"
                        :rules="form.RequiredRules"
                        append-inner-icon="mdi-account"
                        label="ФИО"
                        type="text"
                    ></v-text-field>

                    <v-text-field
                        v-model="form.city"
                        :rules="form.RequiredRules"
                        append-inner-icon="mdi-map"
                        label="Город"
                        type="text"
                    ></v-text-field>

                    <v-text-field
                        v-model="form.phone"
                        :rules="form.RequiredRules"
                        append-inner-icon="mdi-phone"
                        label="Телефон"
                        type="text"
                    ></v-text-field>
                </ui-loader>
            </v-form>

            <v-btn
                @click="send"
            >
                Отправить заявку
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PyrusPage',

    data: () => ({
        isLoading: false,

        form: {
            valid: false,

            name: '',
            city: '',
            phone: '',
            RequiredRules: [
                value => Boolean(value) || 'Поле обязательно для заполнения!',
            ],
        },
    }),

    methods: {
        async send() {
            if (this.form.valid) {
                console.log('send');
            }
        },
    },
}
</script>

<style lang="scss">
.pyrus-page {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #ffffff;
    overflow: hidden;
    border-radius: 8px;

    &__main {
        width: 100%;
        max-width: 600px;
        padding: 16px;
    }

    &__buffer {
        width: 100%;
        max-width: 600px;
    }

    &__form {
        display: grid;
        grid-template-columns : repeat(3, 1fr);
        grid-column-gap: 10px;

        & * {
            grid-column-end: span 3;
        }

        & &-name {
            grid-column-end: span 1;
        }
    }
}
</style>