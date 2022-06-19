export default class User {
    constructor(data = {}) {
        // @ts-ignore
        this.roles = data.roles || [];
        // @ts-ignore
        this.isLogin = data.isLogin;
    }

    isLogin = false;

    roles = [];

    can(role) {
        return this.roles.includes(role);
    }
}