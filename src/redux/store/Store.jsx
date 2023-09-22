import { configureStore } from "@reduxjs/toolkit";
import carts from '../slice/CartSlice'


const Store = configureStore({
    reducer:{
        cartData:carts
    }
})

export default Store;