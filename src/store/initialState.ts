import Device from "../types/Device"
import DeviceInCart from "../types/DeviceInCart"

export type AppState = {
  cart: DeviceInCart[]
}
export default {
  cart: []
}