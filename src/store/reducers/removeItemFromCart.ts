import ReduxAction from "../../types/ReduxAction";
import { AppState } from "../initialState";

interface RemoveItemFromCartAction extends ReduxAction {
  payload: {
    itemId: string,
    amount: number
  }
}

export default function removeItemFromCart(state: AppState, action: RemoveItemFromCartAction) {
  const { itemId, amount } = action.payload;
  // Get item index
  const index = state.cart.findIndex(device => device._id === itemId);
  if (index >= 0) {
    // Decrease amount
    const deviceInCart = state.cart[index];
    deviceInCart.amount -= amount;
    // If amount is <= 0, then remove item from cart array
    if (deviceInCart.amount <= 0) {
      state.cart.splice(index, 1);
    }
  }
  return state
}