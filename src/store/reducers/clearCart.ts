import { PayloadAction } from "@reduxjs/toolkit";
import ReduxAction from "../../types/ReduxAction";
import { AppState } from "../initialState";

interface ClearCartPayload {
  payload: null
}

export default function clearCart(state: AppState, action: PayloadAction<ClearCartPayload>) {
  state.cart = []
}