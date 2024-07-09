import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Fetching all products failed");
  }
  const data = await res.json();
  return data;
});

const productSlice = createSlice({
  name: "Products",
  initialState: {
    isLoading: false,
    error: null,
    products: [],
    topProducts: [],
  },
  reducers: {
    getTopProducts: (state) => {
      state.topProducts = state.products.filter((p) => p.rating.rate > 4.5);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { getTopProducts } = productSlice.actions;

export default productSlice.reducer;
