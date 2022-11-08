import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { comment, commentItemAdd } from '../../model/user';

const initComment = (): comment => {
    return {
        idFilm: '',
        loading: false,
        isLoading: false,
        listComentAll: [],
    };
};

const commentSlipe = createSlice({
    name: 'comment',
    initialState: initComment(),
    reducers: {
        loadingComment(state, action: PayloadAction<string>) {
            state.loading = true;
            state.idFilm = action.payload;
        },
        loadingCommentSuccess(state, action: PayloadAction<comment>) {
            state.loading = false;
            state.isLoading = true;
            state.idFilm = action.payload.idFilm;
            state.listComentAll = action.payload.listComentAll;
        },
        loadingCommentFailed(state, action: PayloadAction<String>) {
            state.loading = false;
            state.listComentAll = [];
        },
        addItemComment(state, action: PayloadAction<commentItemAdd>) {
            if (state.idFilm === action.payload.idFilm) {
                if (!action.payload.idChild) {
                    const tmp = action.payload.item;
                    tmp.id = String(state.listComentAll.length + 1);
                    state.listComentAll = state.listComentAll.concat(tmp);
                } else {
                    state.listComentAll = state.listComentAll.map((e) => {
                        if (e.id === action.payload.idChild) {
                            e.listRep = e.listRep.concat(action.payload.item);
                        }
                        return e;
                    });
                }
            }
        },
        // DelteItemCabinet(state, action: PayloadAction<String>) {
        //     state.listMC = state.listMC.filter((item) => {
        //         return item.id !== action.payload;
        //     });
        // },
        // AddItemCabinet(state, action: PayloadAction<deltailAnimme>) {
        //     if (!state.listMC.find((e) => e.id === action.payload.id)) {
        //         console.log('add');
        //         state.listMC = state.listMC.concat(action.payload);
        //     }
        // },
    },
});
//action
export const commentAction = commentSlipe.actions;

//select
export const authSelectLoggedIn = (state: any) => {
    return state.auth.isLogin;
};
export const authSelectLogging = (state: any) => {
    return state.auth.login;
};

// reducer
export const commentReducer = commentSlipe.reducer;
