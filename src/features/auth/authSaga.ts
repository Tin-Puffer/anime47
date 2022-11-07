import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { json } from 'stream/consumers';
import { animeList } from '../../api/anime';
import { useAppSelector } from '../../app/hooks';
import { user } from '../../model/user';
import { autheMCAction } from './authMCSlipe';

import { authAction, loginState } from './authSlipe';

const callApiUser = async (imfomationLogin: loginState) => {
    return await animeList.getUser(imfomationLogin.userName).then((res) => {
        return { res };
    });
};
function* handleLogin(value: loginState) {
    try {
        const { res }: { res: user } = yield call(callApiUser, value);
        if (res) {
            yield put(authAction.loginSuccess(res));
            localStorage.setItem('user', JSON.stringify(res));
            localStorage.setItem('access_token', 'TOken');
        } else {
            yield put(authAction.loginFailed('loginFailed'));
            // yield call(handleLogout);
        }
    } catch (error) {
        yield put(authAction.loginFailed('loginFailed'));
    }
}

function* handleLogout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    yield put(autheMCAction.resetListMC());
}

function* whatLoginFlow() {
    while (true) {
        const isLogin = localStorage.getItem('access_token');
        console.log('trang thai cua islogin:', !isLogin);
        if (!isLogin) {
            console.log('chaylogin');
            const acction: PayloadAction<loginState> = yield take(authAction.login.type);
            yield call(handleLogin, acction.payload);
        } else {
            console.log('chay logout');
            yield take(authAction.logout.type);
            yield call(handleLogout);
        }
    }
}
export function* authSaga() {
    yield fork(whatLoginFlow);
}
