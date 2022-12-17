import { User } from "../models/user";

export function checkAuth(user: User) {
    console.log('AUTH');
    if (user.pseudo === import.meta.env.VUE_APP_ADMIN_ACCOUNT_PSEUDO) {
        if (user.password === import.meta.env.VUE_APP_ADMIN_ACCOUNT_PASSWORD) {
            return true;
        }
    }
    return true;
}
