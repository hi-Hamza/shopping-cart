
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
    isloading: true,
    quantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            let find = state.cart.findIndex((item) => item.id === action.payload.id)
            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push(action.payload)
            }

        },
        remove(state, action) {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        increment(state, action) {
            state.cart = state.cart.map((item) => item.id === action.payload.id ? action.payload+1 : item)
        },
        decrement(state, action) {
            state.cart = state.cart.map((item) => item.id === action.payload.id ? action.payload -1 : item)
        }








    }
})

export const { add, remove, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;