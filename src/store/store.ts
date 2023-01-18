import {configureStore} from "@reduxjs/toolkit";
import PersonSlice from "./features/personSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import PostSlice from "./features/postSlice";

export const store = configureStore({
    reducer:{
        person: PersonSlice.reducer,
        post: PostSlice.reducer
    },

})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState>=useSelector;