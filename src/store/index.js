import { configureStore } from "@reduxjs/toolkit"
import pokemon from "./slices/pokemon.slice"
import alert from "./slices/alert.slice"

export default configureStore({
    reducer: {
        pokemon,
        alert,
    }
})