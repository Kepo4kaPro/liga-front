import UiLoader from './ui-loader.vue';
import UiAutocomplete from './ui-autocomplete.vue';
import UiQrCode from './ui-qr-code.vue';

export default {
    install: app => {
        app.component('ui-loader', UiLoader);
        app.component('ui-autocomplete', UiAutocomplete);
        app.component('ui-qr-code', UiQrCode);
    }
}