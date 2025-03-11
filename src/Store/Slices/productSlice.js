import { createSlice } from "@reduxjs/toolkit";

// Product Slice
const ProductInitialState = {
    products:[],
    isLoading: false,
}

const productSlice = createSlice({
    name:product,
    initialState: ProductInitialState,
    reducers:{
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})