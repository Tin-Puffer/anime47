import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authMC, deltailAnimme, user } from '../../model/user';

const initAutheMC = (): authMC => {
    return {
        loadAdd: false,
        loadingCabinet: false,
        loadDelete: false,
        listMC: [],
    };
};

const autheMCSlipe = createSlice({
    name: 'autheMC',
    initialState: initAutheMC(),
    reducers: {
        loadingListMC(state, action: PayloadAction<string>) {
            state.loadingCabinet = true;
        },
        loadingSuccess(state, action: PayloadAction<deltailAnimme[]>) {
            state.loadingCabinet = false;
            state.listMC = action.payload;
        },
        loadingFailed(state, action: PayloadAction<String>) {
            state.loadingCabinet = false;
        },
        resetListMC(state) {
            state.listMC = [];
        },
        DelteItemCabinet(state, action: PayloadAction<String>) {
            state.listMC = state.listMC.filter((item) => {
                return item.id !== action.payload;
            });
        },
        AddItemCabinet(state, action: PayloadAction<deltailAnimme>) {
            state.listMC.concat(action.payload);
        },
    },
});
//action
export const autheMCAction = autheMCSlipe.actions;

//select
export const authSelectLoggedIn = (state: any) => {
    return state.auth.isLogin;
};
export const authSelectLogging = (state: any) => {
    return state.auth.login;
};

// reducer
export const authMCReducer = autheMCSlipe.reducer;
