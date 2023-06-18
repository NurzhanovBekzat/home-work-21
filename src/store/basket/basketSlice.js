import { createSlice } from "@reduxjs/toolkit";
import { addItem, getBasket } from "./basketThunk";

const initialState = {
  items: [],
  isLoading: false,
  isError: "",
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBasket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.isError = "";
      })

      .addCase(getBasket.pending, (state) => {
        state.isLoading = true;
        state.meals = [];
        state.isError = "";
      })

      .addCase(getBasket.rejected, (state, action) => {
        state.isLoading = false;
        state.meals = [];
        state.isError = action.payload;
      })

      .addCase(addItem.fulfilled, (state) => {
        StorageEvent.isLoading = false;
        state.isError = "";
      })

      .addCase(addItem.pending, (state) => {
        StorageEvent.isLoading = true;
        state.isError = "";
      })

      .addCase(addItem.rejected, (state, action) => {
        StorageEvent.isLoading = false;
        state.isError = action.payload;
      });
  },
});
