import { configureStore } from "@reduxjs/toolkit";
import carts from '../slice/CartSlice'
import SearchSlice from "../slice/SearchSlice";

const Store = configureStore({
    reducer:{
        cartData:carts,
        search:SearchSlice,

    }
})

export default Store;