import Device from "../types/Device"
import DeviceInCart from "../types/DeviceInCart"

export type AppState = {
  // User's cart
  cart: DeviceInCart[],
  // Registered devices list
  devicesList: Device[]
}
export default {
  cart: [],
  devicesList: []
} as AppState;