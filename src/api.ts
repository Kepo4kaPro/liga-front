import axios from 'axios';
// @ts-ignore
import User from './classes/user.ts';
import { store } from './vuex/index';

const instance = axios.create({
    baseURL: 'https://api.scm-bonus.ru/',
    timeout: 1000,
});

// @ts-ignore
instance.updateToken = async token => {
    if (token) {
        try {
            const { data } = await instance.get('/user/login/check', {
                headers: {
                    Authorization: token,
                },
            });

            store.commit('updateState', { user: new User({ ...data, isLogin: true }) });

            localStorage.setItem('token', token);

            instance.interceptors.request.use(config => {
                // @ts-ignore
                config.headers.Authorization = token;

                return config;
            });
            // eslint-disable-next-line no-empty
        } catch (e) {
            localStorage.removeItem('token');
            store.commit('updateState', { user: new User() });
        }
    }
}
// @ts-ignore
instance.logout = () => {
    instance.interceptors.request.use(config => {
        // @ts-ignore
        config.headers.Authorization = '';

        return config;
    });

    localStorage.removeItem('token');
    store.commit('updateState', { user: new User() });
}

// @ts-ignore
instance.updateToken(localStorage.getItem('token'));

export default instance;
