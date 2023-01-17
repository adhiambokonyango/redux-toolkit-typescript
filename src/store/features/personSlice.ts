import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Person {
    id: number;
    name: string;
}

interface PersonState {
    persons: Person[];
}

const initialState: PersonState ={
    persons: []
}

const PersonSlice = createSlice({
    name:"person",
    initialState,
    reducers: {
        ADD_PERSON: (state, action:PayloadAction<{name: string}>)=>{
            state.persons.push({
                id: state.persons.length,
                name: action.payload.name
            })
        },
        logg: (state, action:PayloadAction<{logs: string}>)=>{
           console.log("logs")
        },
    }
})

export default PersonSlice;
export const {ADD_PERSON}=PersonSlice.actions;