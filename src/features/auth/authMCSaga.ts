import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { json } from 'stream/consumers';
import { animeList } from '../../api/anime';
import { deltailAnimme, user } from '../../model/user';
import { autheMCAction } from './authMCSlipe';

import { authAction, loginState } from './authSlipe';
export interface AuthMC {
    list: deltailAnimme[];
    id: string;
}
const callApiListMC = async (idUser: string) => {
    return await animeList.getUserMC(idUser).then((res) => {
        return { res };
    });
};
function* handleLoadMC(idUser: string) {
    try {
        const { res }: { res: AuthMC } = yield call(callApiListMC, idUser);

        yield put(autheMCAction.loadingSuccess(res.list));
    } catch (error) {
        yield put(autheMCAction.loadingFailed('loginFailed'));
    }
}
function* handleDeleteAPI(idItemCabinet: string) {
    try {
        console.log('goi api delete cabinet item ID:' + idItemCabinet);
        //GOIJ API DELETE
    } catch (error) {
        // XU LY LOI
    }
}

function* loadingFlow() {
    while (true) {
        const acction: PayloadAction<string> = yield take(autheMCAction.loadingListMC.type);
        yield fork(handleLoadMC, acction.payload);
    }
}
function* ApiDeleteCabinet() {
    while (true) {
        const acction: PayloadAction<string> = yield take(autheMCAction.DelteItemCabinet.type);
        yield fork(handleDeleteAPI, acction.payload);
    }
}
export function* authMCSaga() {
    yield all([call(ApiDeleteCabinet), call(loadingFlow)]);
    // yield fork(loadingFlow);
}
