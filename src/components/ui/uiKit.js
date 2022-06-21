import UiLoader from './ui-loader.vue';
import UiAutocomplete from './ui-autocomplete.vue';
import UiQrCode from './ui-qr-code.vue';
import UiInput from './ui-input.vue';

export default {
    install: app => {
        app.component('ui-loader', UiLoader);
        app.component('ui-autocomplete', UiAutocomplete);
        app.component('ui-qr-code', UiQrCode);
        app.component('ui-input', UiInput);
    }
}