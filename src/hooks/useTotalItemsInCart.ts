import { useSelector } from "react-redux";
import { AppState } from "../store/initialState";

export default function useTotalItemsInCart(deviceId: string) {
  return useSelector((state: AppState) => state.cart.find(deviceInCart => deviceInCart._id === deviceId)?.amount || 0)
}