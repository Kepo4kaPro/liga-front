import Store from '~/vuex/index.js';

export default class Cities {
    constructor() {
        this.loadCities();
    }

    private _isLoading: Boolean = false;
    private _cities: Array<String> = [];
    private _filter: String = '';

    private async loadCities() {
        this._isLoading = true;

        await Store.dispatch('loadCities');

        this._cities = Store.state.cities;
        this._isLoading = false;
    }

    get isLoading() {
        return this._isLoading;
    }
    get cities() {
        return this._cities.filter(city => city.toLowerCase().startsWith(this._filter.toLowerCase()));
    }
}