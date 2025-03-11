import { createSlice } from "@reduxjs/toolkit";

// Cart Slice

const initialState = ({
    cart:[],
    loading:false
})

const cartSlice = ({
    name:cart,
    initialState:initialState,
    reducers:{
        setCarts:(state , action)=>{
         state.products = action.payload;
        },
        setLoading:(state,action) =>{
            state.loading = action.payload
        }
    }
})