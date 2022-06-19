<template>
    <v-hover #default="{ isHovering, props }">
        <div
            class="position-relative mb-4"
            v-bind="props"
        >
            <div
                class="ui-qr-code__code"
                v-html="qrSVG"
            ></div>

            <v-overlay
                :modelValue="isHovering"
                contained
                scroll-strategy="scroll"
                class="align-center justify-center rounded-lg"
            >
                <v-btn
                    icon="mdi-cloud-download-outline"
                >
                </v-btn>
            </v-overlay>
        </div>
    </v-hover>
</template>

<script>

import QRCode from 'qrcode';

export default {
    name: 'UiQrCode',

    props: {
        modelValue: {
            type: String,
            default: '',
        },
    },

    computed: {
        qrSVG() {
            let code = '';

            QRCode.toString(this.modelValue, (error, qr) => {
                code = qr
            });

            return code;
        }
    }
}
</script>

<style lang="scss">

.ui-qr-code {

    &__code {
        display: flex;
        justify-content: center;

        & svg {
            height: 300px;
        }
    }
}
</style>