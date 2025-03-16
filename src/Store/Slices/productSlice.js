import { createSlice } from "@reduxjs/toolkit";
import products from "../../Components/dummydata/dummydata"; // Dummy data

const ProductInitialState = {
    products: products, 
    isLoading: false,
    filterDiscoutedProducts: JSON.parse(sessionStorage.getItem("filteredData")) || [],
};

const productSlice = createSlice({
    name: "product",
    initialState: ProductInitialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        filterDiscoutedProducts: (state) => {
            try {
                const discountedProducts = state.products.filter((product) => product.onSale === true);
                state.filterDiscoutedProducts = discountedProducts;
                console.log("Discounted Products", discountedProducts);
                sessionStorage.setItem("filteredData", JSON.stringify(discountedProducts)); 
            } catch (error) {
                console.error("Error filtering products:", error);
            }
        },
    }
});

export const { setProducts, setLoading, filterDiscoutedProducts } = productSlice.actions;
export default productSlice.reducer;