import IndexPage from '~/components/pages/index-page.vue';
import PyrusPage from '~/components/pages/pyrus-page.vue';

export default [
    { path: '/', component: IndexPage },
    { path: '/pyrus', component: PyrusPage },
    { path: '/generate', component: PyrusPage },
]