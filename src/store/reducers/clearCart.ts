import ReduxAction from "../../types/ReduxAction";
import { AppState } from "../initialState";

interface ClearCartAction extends ReduxAction {
  payload: null
}

export default function clearCart(state: AppState, action: ClearCartAction) {
  state.cart = []
  return state;
}