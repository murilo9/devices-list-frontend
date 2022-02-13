import Device from "../types/Device"
import DeviceInCart from "../types/DeviceInCart"

export type AppState = {
  cart: DeviceInCart[],
  devicesList: Device[]
}
export default {
  cart: [],
  devicesList: []
} as AppState;