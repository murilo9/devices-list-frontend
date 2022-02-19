import CartChangedMessageParams from "../types/CartChangedMessageParams";

/**
 * Strigify a Cart Changed message params so it can be sent through broadcast channel.
 * @param payload 
 * @returns 
 */
export default function buildCartChangedChannelMessage(payload: CartChangedMessageParams) {
  return `${payload.userId} ${payload.deviceId} ${payload.amount}`
}