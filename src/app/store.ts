import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import creatSAGA from 'redux-saga';
import { commentReducer } from '../features/anime/commentSlipe';
import { authMCReducer } from '../features/auth/authMCSlipe';
import { authReducer } from '../features/auth/authSlipe';
import rootSaga from './rootSaga';
const sagaMiddleware = creatSAGA();
export const store = configureStore({
    reducer: {
        auth: authReducer,
        authMC: authMCReducer,
        comment: commentReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
