import { createStore } from 'vuex'
import products from './products';
import api from '~/api.ts';
import User from '~/classes/user.ts';

export const store = createStore({
    state: {
        user: new User(),
        isSearchOpen: false,
        products: products,
        cities: [],
    },

    mutations: {
        updateState(state, newState = {}) {
            Object.entries(newState).forEach(([key, value]) => {
                if (key in state) {
                    state[key] = value;
                }
            });
        },
    },

    actions: {
        async loadCities({ commit, state }) {
            if (!state.cities.length) {
                const { data: cities } = await api.get('/get/cities');

                commit('updateState', { cities })
            }
        }
    }
})