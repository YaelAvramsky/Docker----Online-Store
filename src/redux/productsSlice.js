import { createSlice } from "@reduxjs/toolkit";
import { fetchDataAsyncAction } from "./thunk";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        productsList: [],
        error: false,
        loading: false
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsyncAction.pending, (state) => {
                state.loading = true;
                state.productsList = [];
                state.error = false;
            })
            .addCase(fetchDataAsyncAction.fulfilled, (state, action) => {
                state.productsList = action.payload;
                state.error = false;
                state.loading = false;
            })
            .addCase(fetchDataAsyncAction.rejected, (state) => {
                state.error = true;
                state.loading = false;
            })
    }
})

export default productsSlice.reducer;