import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { createVuetify } from 'vuetify';
import { ru, en } from 'vuetify/locale';

export default createVuetify({
    locale: {
        defaultLocale: 'ru',
        fallbackLocale: 'en',
        messages: { ru, en },
    },
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#0a68ff',
                    lighten: '#d7edff',
                },
            },
        },
    },
})
