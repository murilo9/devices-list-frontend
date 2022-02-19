import { useSelector } from "react-redux";
import { AppState } from "../store/initialState";

/**
 * Returns the total amount of a device in the cart.
 * @param deviceId The device ID.
 * @returns 
 */
export default function useTotalItemsInCart(deviceId: string) {
  return useSelector((state: AppState) => state.cart.find(deviceInCart => deviceInCart._id === deviceId)?.amount || 0)
}