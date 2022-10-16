import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { user } from '../../model/user';

export interface loginState {
    userName: string;
    password: string;
}
interface authState {
    isLogin: boolean;
    login?: boolean;
    currentUser?: user;
}

const initAuth: authState = {
    isLogin: false,
    login: false,
    currentUser: undefined,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initAuth,
    reducers: {
        login(state, action: PayloadAction<loginState>) {
            state.login = true;
        },
        loginSuccess(state, action: PayloadAction<user>) {
            state.login = false;
            state.isLogin = true;
            state.currentUser = action.payload;
        },
        loginFailed(state, action: PayloadAction<String>) {
            state.login = false;
        },
        logout(state) {
            state.isLogin = false;
            state.currentUser = undefined;
        },
    },
});
//action
export const authAction = authSlice.actions;

//select
export const authSelectLoggedIn = (state: any) => {
    return state.auth.isLogin;
};
export const authSelectLogging = (state: any) => {
    return state.auth.login;
};

// reducer
export const authReducer = authSlice.reducer;
