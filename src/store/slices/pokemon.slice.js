import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    model: null,
    state: "idle",
    error: null,
    token: "",
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