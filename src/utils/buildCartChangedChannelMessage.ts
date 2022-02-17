import CartChangedMessageParams from "../types/CartChangedMessageParams";

export default function buildCartChangedChannelMessage(payload: CartChangedMessageParams) {
  return `${payload.deviceId} ${payload.amount}`
}