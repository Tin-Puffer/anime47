import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { comment, commentItemAdd } from '../../model';

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
        }
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
