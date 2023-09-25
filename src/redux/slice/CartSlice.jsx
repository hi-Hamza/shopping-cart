
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
isloading :true,
    totalQuantity: 0,
    totalPrice: 0,
    amount : 0,
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
      
      increment(state){
      
            state.count += 1
       

      },
      decrement(state){
        console.log(state.count, "hello" )
        if(state.count < 1){
            state.count = 1
        }else{
            state.count = 1
        }

      }





    }
})

export const { add, remove ,increment , decrement} = cartSlice.actions;
export default cartSlice.reducer;