import { User } from "../../../models/user";
import { checkAuth } from "../../../guards/auth";

export function tryConnectUser({ commit }: any, user: User) {    
    if (checkAuth(user)) {
        localStorage.setItem('user', JSON.stringify(user));
        commit("UPDATE_USER", user);
    }
}
