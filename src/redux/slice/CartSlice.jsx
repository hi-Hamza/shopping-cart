
import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            let find = state.findIndex((item) => item.id === action.payload.id)
            if (find >= 0) {
                state[find].quantity += 1;
            } else {
                state.push(action.payload)
            }

        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload)
        }
        
    }
})

export const { add, remove ,totalQuantity , totalPrice } = cartSlice.actions;
export default cartSlice.reducer;