import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { authAction, loginState } from './authSlipe';

function* handleLogin(value: loginState) {
    try {
        console.log('login', value);
        localStorage.setItem('access_token', 'value');
        yield delay(1000);
        yield put(
            authAction.loginSuccess({
                id: '123',
                name: 'nguyentin',
            }),
        );
    } catch (error) {
        yield put(authAction.loginFailed('loginFailed'));
    }
}

function* handleLogout() {
    console.log('logout');
    localStorage.removeItem('access_token');
}

function* whatLoginFlow() {
    while (true) {
        const isLogin = localStorage.getItem('access_token');
        if (!isLogin) {
            const acction: PayloadAction<loginState> = yield take(authAction.login.type);
            yield fork(handleLogin, acction.payload);
        }
        yield take(authAction.logout.type);
        yield call(handleLogout);
    }
}

export function* authSaga() {
    yield fork(whatLoginFlow);
}
