<template>
    <v-container class="pa-0 mb-2">
        <v-checkbox
            v-model="value"
            color="primary"
        >
            <template #label>
                <div class="personal-processing__label">
                    Выражаю

                    <a
                        target="_blank"
                        href="https://app.sovcombank.ru/policy/"
                        @click.stop
                    >
                        согласие на обработку персональных данных
                    </a>

                    и подтверждаю, что ознакомлен с

                    <a
                        target="_blank"
                        href="https://sovcombank.ru/about/pages/policy-personal-data"
                        @click.stop
                    >
                        с Политикой обработки персональных данных.
                    </a>
                </div>
            </template>
        </v-checkbox>
    </v-container>
</template>

<script>
export default {
    name: 'PersonalProcessing',

    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(val) {
                this.$emit('update:modelValue', val);
            },
        },
    },
}
</script>

<style lang="scss">
.personal-processing {
    &__label {
        white-space: normal;
        font-size: 12px
    }
}
</style>
