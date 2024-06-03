import { configureStore, createSlice } from "@reduxjs/toolkit";

let state1= createSlice({
    name: "state1",
    initialState: {},
    reducers: {

    }
})


export default configureStore({
    reducer: {
        state1 : state1.reducer
    }
})

export let {} = state1.actions