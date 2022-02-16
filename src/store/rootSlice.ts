import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import reducers from "./reducers";

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers
})

export const { addItemToCart, removeItemFromCart, clearCart, setDevicesList, setCart } = rootSlice.actions;

export default rootSlice.reducer;