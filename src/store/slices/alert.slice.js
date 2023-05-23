import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    open: false,
}

const alert = createSlice({
    name: "alert",
    initialState,
    reducers: {
        setOpen: (state, action) => action.payload,
    }
})

export const { setOpen } = alert.actions
export default alert.reducer