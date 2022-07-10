import { store } from '~/vuex';

export default class Cities {
    constructor() {
        this.load();
    }

    private _isLoading: Boolean = false;
    private _cities: Array<String> = [];
    private _filter: String = '';

    private async load() {
        this._isLoading = true;

        await store.dispatch('loadCities');

        this._cities = store.state.cities;
        this._isLoading = false;
    }

    get filter() {
        return this._filter;
    }
    set filter(val: String) {
        this._filter = val;
    }

    get isLoading() {
        return this._isLoading;
    }
    get cities() {
        return this._cities.filter(city => city.toLowerCase().startsWith(this._filter.toLowerCase()));
    }
}