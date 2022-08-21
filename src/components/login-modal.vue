<template>
    <v-dialog
        v-model="showModal"
    >
        <v-card class="login-modal rounded-lg">
            <v-toolbar dark color="primary">
                <v-toolbar-title>Авторизоваться</v-toolbar-title>
            </v-toolbar>

            <v-form class="pa-4 pb-0 position-relative" v-model="form.valid">
                <ui-loader :modelValue="isLoading">
                    <v-text-field
                        v-model="form.login"
                        :rules="form.RequiredRules"
                        append-inner-icon="mdi-account"
                        label="Логин"
                        type="text"
                    ></v-text-field>

                    <v-text-field
                        v-model="form.password"
                        :rules="form.RequiredRules"
                        append-inner-icon="mdi-lock"
                        label="Пароль"
                        type="password"
                    ></v-text-field>
                </ui-loader>
            </v-form>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    @click="send"
                >
                    Войти
                </v-btn>
            </v-card-actions>

            <v-snackbar
                v-model="error.isShow"
                timeout="2000"
            >
                {{ error.message }}
            </v-snackbar>
        </v-card>
    </v-dialog>
</template>

<script>
import Api from '~/api.ts';

export default {
    name: 'LoginModal',

    props: {
        modelValue: {
            type: Boolean,
            default: true,
        },
    },

    data: () => ({
        error: {
            isShow: false,
            message: '',
        },
        isLoading: false,
        form: {
            valid: false,

            login: '',
            password: '',
            RequiredRules: [
                value => Boolean(value) || 'Поле обязательно для заполнения!',
            ],
        },
    }),

    computed: {
        showModal: {
            get() {
                return this.modelValue;
            },
            set(val) {
                this.$emit('update:modelValue', val);
            }
        }
    },

    methods: {
        close() {
            this.$emit('update:modelValue', false);
        },
        async send() {
            if (this.form.valid) {
                try {
                    this.isLoading = true;

                    const { data } = await Api.post('/user/login', {
                        login: this.form.login,
                        password: this.form.password,
                    });

                    Api.updateToken(data.Authorization);
                    this.showModal = false;
                } catch ({ response }) {
                    this.error.message = response.data.message;
                    this.error.isShow = true;
                } finally {
                    this.isLoading = false;
                }
            }
        },
    },
}
</script>

<style lang="scss">
.login-modal {
    width: 400px;
}

@media screen and (max-width: 540px){
    .login-modal {
        width: calc(100vw - 40px);
    }
}
</style>
