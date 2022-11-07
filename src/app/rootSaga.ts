import { fork } from 'child_process';
import { all, call } from 'redux-saga/effects';
import { authMCSaga } from '../features/auth/authMCSaga';
import { authSaga } from '../features/auth/authSaga';

export default function* () {
    // yield all([authSaga(), authMCSaga]);
    // yield authSaga();
    yield all([call(authSaga), call(authMCSaga)]);
    // yield all([fork(authSaga), fork(authMCSaga)]);
    // yield authMCSaga();
}
