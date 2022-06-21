<template>
    <v-text-field
        v-model="current"
        v-bind="$attrs"
        @input="handleInput"
    ></v-text-field>
</template>

<script>
const TOKENS = {
    '!': { escape: true },
    '#': { pattern: /\d/ },
    '&': { pattern: /./ },
    X: { pattern: /[0-9a-zA-Z]/ },
    S: { pattern: /[a-zA-Z]/ },
    A: { pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase() },
    a: { pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase() },
    F: { pattern: /[^а-яА-ЯёЁ]/ }, // todo: проверить необходимость токена в passport-section
    K: { pattern: /[a-яА-ЯёЁ]/, transform: v => v.toLocaleUpperCase() },
    Z: { pattern: /[0-9a-zA-Z]/, transform: v => v.toLocaleUpperCase() },
    T: { pattern: /[0-9a-zA-Zа-яА-ЯёЁ]/, transform: v => v.toLocaleUpperCase() },
    G: { pattern: /[а-яА-Я0-9a-zA-Z]/, transform: v => v.toLocaleUpperCase() },
    R: { pattern: /[-+A]/ },
    Q: { pattern: /[-|\d]/ },
    Y: { pattern: /[-/\d]/ },
};

export default {
    name: 'UiInput',

    props: {
        modelValue: {
            type: String,
            default: '',
        },
        mask: {
            type: String,
            default: '',
        },
        externalWithoutMask: {
            type: Boolean,
            default: false,
        },
    },

    data: () => ({
        current: '',
    }),

    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    },

    watch: {
        modelValue: {
            immediate: true,
            handler(val) {
                this.prepareText(this.mask, String(val));
            },
        },
        mask(val) {
            this.prepareText(val, String(this.value));
        },
    },

    methods: {
        handleInput(event) {
            const { value } = event.target;

            if (event.isTrusted) {
                this.prepareText(this.mask, value);
            }
        },
        prepareText(mask, text) {
            const { value, withoutMask } = this.toMask(mask, text);
            const prepareWithoutMask = withoutMask;
            const prepareValue = mask ? value : value;

            this.$emit('update:modelValue', this.externalWithoutMask ? prepareWithoutMask : prepareValue);
            this.$emit('input-mask', prepareValue);
            this.$emit('input-without-mask', prepareWithoutMask);

            this.current = '';

            this.$nextTick(() => {
                this.current = prepareValue;
            })
        },

        toMask(mask, text) {
            if (!mask || !text) {
                return { value: text, withoutMask: text };
            }

            const data = text.split('');

            const { value, withoutMask } = mask.split('').reduce((acc, item) => {

                if (acc.index === -1 || acc.index >= data.length) {
                    return acc;
                }

                const define = TOKENS[item];

                if (!define || acc.escape) {
                    acc.escape = false;
                    acc.value += item;

                    if (data[acc.index] === item) {
                        acc.index += 1;
                    }

                    return acc;
                }

                if (define.escape) {
                    acc.escape = true;

                    return acc;
                }

                const { symbol, index } = this
                    .getSymbol({ data, start: acc.index, pattern: define.pattern });

                acc.withoutMask += symbol;
                acc.value += define.transform ? define.transform(symbol) : symbol;
                acc.index = index;

                return acc;

            }, {
                index: 0,
                escape: false,
                value: '',
                withoutMask: '',
            });

            return { value, withoutMask };
        },

        getSymbol({ data, start, pattern }) {
            if (!pattern) {
                return { symbol: data[start], index: start };
            }

            const prepare = data.slice(start);
            const symbolIndex = prepare.findIndex(symbol => pattern.test(symbol));

            if (symbolIndex === -1) {
                return { symbol: '', index: -1 };
            }

            return { symbol: prepare[symbolIndex], index: start + symbolIndex + 1 };
        },
    }
}
</script>