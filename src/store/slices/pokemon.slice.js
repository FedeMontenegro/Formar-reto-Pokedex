import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pagination: [],
    all: [],
    next: "",
    count: 0,
    state: "idle",
    error: null,
}

const pokemon = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setPokemon: (state, action) => action.payload,
    }
})

export const { setPokemon } = pokemon.actions
export default pokemon.reducer