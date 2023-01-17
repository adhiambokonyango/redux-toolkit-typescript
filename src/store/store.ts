import {configureStore} from "@reduxjs/toolkit";
import PersonSlice from "./features/personSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer:{
        person: PersonSlice.reducer
    },

})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState>=useSelector;