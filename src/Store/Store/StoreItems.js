import { configureStore } from "@reduxjs/toolkit";
import productReducer  from '../Slices/productSlice'
const Store = configureStore({
    reducer:{
    dproducts:productReducer
    }
})
export default Store;