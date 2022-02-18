import CartChangedMessageParams from "../types/CartChangedMessageParams";

export default function buildCartChangedChannelMessage(payload: CartChangedMessageParams) {
  return `${payload.userId} ${payload.deviceId} ${payload.amount}`
}