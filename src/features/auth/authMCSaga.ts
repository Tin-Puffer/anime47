import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, fork, put, take} from 'redux-saga/effects';
import { apiMock_1 } from '../../api/axiosMock_1';
import { deltailAnimme } from '../../model';
import { autheMCAction } from './authMCSlipe';

export interface AuthMC {
    list: deltailAnimme[];
    id: string;
}
const callApiListMC = async (idUser: string) => {
    return await apiMock_1.getUserMC(idUser).then((res) => {
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
function* handleAddAPI(idItemCabinet: string) {
    try {
        console.log('goi api thêm cabinet item ID:' + idItemCabinet);
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
function* ApiAddCabinet() {
    while (true) {
        const acction: PayloadAction<string> = yield take(autheMCAction.AddItemCabinet.type);
        yield fork(handleAddAPI, acction.payload);
    }
}
export function* authMCSaga() {
    yield all([call(ApiDeleteCabinet), call(loadingFlow), call(ApiAddCabinet)]);
}
