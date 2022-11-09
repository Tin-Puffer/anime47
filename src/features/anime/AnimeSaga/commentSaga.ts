import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, take } from 'redux-saga/effects';
import { apiMock_1 } from '../../../api/axiosMock_1'; 
import { comment, commentItemAdd } from '../../../model';
import { commentAction } from './commentSlipe';

const callApiComent = async (idFilm: string) => {
    return await apiMock_1.getComment(idFilm).then((res) => {
        return { res };
    });
};
function* handleLoadingComment(value: string) {
    try {
        const { res }: { res: comment } = yield call(callApiComent, value);
        if (res) {
            yield put(commentAction.loadingCommentSuccess(res));
        } else {
            yield put(commentAction.loadingCommentFailed('loginFailed'));
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
const callApiAddCmt = async (data: commentItemAdd) => {
    // call api push data comment
};
 function* handleAddComment(comentItem:commentItemAdd){
    try {
        yield call(callApiAddCmt, comentItem);
        console.log("Call api push data comment")
    } catch (error) {
        // Xử lý lỗi
    }
 }
function* AddComentSaga() {
    while (true) {
        const acction: PayloadAction<commentItemAdd> = yield take(commentAction.addItemComment.type);
        yield call(handleAddComment, acction.payload);
    }
}
export function* commentSaga() {
    yield all([call(CommenFlow),call(AddComentSaga)]);
}
