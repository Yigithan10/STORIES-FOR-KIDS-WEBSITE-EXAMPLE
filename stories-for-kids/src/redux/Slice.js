import { createSlice } from '@reduxjs/toolkit'

export const Slice = createSlice({
    name: 'slice',
    initialState: {
        lang: "",
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload
        },
    },
})

export const { changeLanguage } = Slice.actions

export default Slice.reducer