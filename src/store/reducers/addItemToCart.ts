import { PayloadAction } from "@reduxjs/toolkit";
import Device from "../../types/Device";
import ReduxAction from "../../types/ReduxAction";
import { AppState } from "../initialState";

interface AddItemToCartPayload extends ReduxAction {
  item: Device,
  amount: number
}

export default function addItemToCart(state: AppState, action: PayloadAction<AddItemToCartPayload>) {
  const { item, amount } = action.payload;
  // Get item index
  const index = state.cart.findIndex(device => device._id === item._id);
  // If item is already in cart
  if (index >= 0) {
    // Increase amount
    const deviceInCart = state.cart[index];
    deviceInCart.amount += amount;
  }
  // If item is not yet in cart
  else {
    state.cart.push({
      ...item,
      amount
    })
  }
}