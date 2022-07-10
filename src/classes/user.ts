export default class User {
    constructor(data = {}) {
        // @ts-ignore
        this.roles = data.roles || [];
        // @ts-ignore
        this.isLogin = data.isLogin;
    }

    isLogin: Boolean = false;

    roles: Array<String> = [];

    can(role: String) {
        return this.roles.includes(role);
    }
}