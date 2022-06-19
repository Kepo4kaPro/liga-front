import IndexPage from '~/components/pages/index-page.vue';
import PyrusPage from '~/components/pages/pyrus-page.vue';

export default [
    { path: '/',
        component: IndexPage,
        meta: {
            search: true,
        },
    },
    { path: '/pyrus', component: PyrusPage },
    { path: '/generate', component: PyrusPage },
]