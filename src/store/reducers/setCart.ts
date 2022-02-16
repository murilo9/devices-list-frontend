import { PayloadAction } from "@reduxjs/toolkit";
import DeviceInCart from "../../types/DeviceInCart";
import { AppState } from "../initialState";

export default function setCart(state: AppState, action: PayloadAction<DeviceInCart[]>) {
  state.cart = action.payload
}