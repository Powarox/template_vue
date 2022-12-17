import { User } from "../../../models/user";

export function UPDATE_USER(state: any, user: User) {
    state.user = user;
    state.isLoggedIn = true;
    state.isAuthenticated = true;
}