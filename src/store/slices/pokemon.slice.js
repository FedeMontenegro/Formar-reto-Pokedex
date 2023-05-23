import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pagination: [],
    all: [],
    next: "",
    count: 0,
    state: "idle",
    error: null,
    checked: [],
    deleted: [],
}

const pokemon = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setPokemon: (state, action) => action.payload,
        resetPokemon: (state) => {
            state.pagination = []
            state.all = []
            state.next = ""
            state.count = 0
            state.state = "idle"
            state.error = null
            state.checked = []
            state.deleted = []
        }
    }
})

export const { setPokemon, resetPokemon } = pokemon.actions
export default pokemon.reducer