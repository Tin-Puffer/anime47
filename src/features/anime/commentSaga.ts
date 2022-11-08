import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { json } from 'stream/consumers';
import { animeList } from '../../api/anime';
import { useAppSelector } from '../../app/hooks';
import { comment, user } from '../../model/user';
import { commentAction } from './commentSlipe';

const callApiComent = async (idFilm: string) => {
    return await animeList.getComment(idFilm).then((res) => {
        return { res };
    });
};
function* handleLoadingComment(value: string) {
    try {
        const { res }: { res: comment } = yield call(callApiComent, value);
        // console.log('id: ', value);

        // console.log('Res: ', res);
        if (res) {
            yield put(commentAction.loadingCommentSuccess(res));
        } else {
            yield put(commentAction.loadingCommentFailed('loginFailed'));
            // yield call(handleLogout);
        }
    } catch (error) {
        yield put(commentAction.loadingCommentFailed('loginFailed'));
    }
}

function* CommenFlow() {
    while (true) {
        const acction: PayloadAction<string> = yield take(commentAction.loadingComment.type);
        yield call(handleLoadingComment, acction.payload);
    }
}
export function* commentSaga() {
    yield fork(CommenFlow);
}
