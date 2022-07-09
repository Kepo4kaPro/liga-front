import IndexPage from '~/components/pages/index-page.vue';

export default [
    { path: '/',
        component: IndexPage,
        meta: {
            search: true,
            title: 'Кэшбэк рекомендация',
        },
        name: 'main',
    }
]