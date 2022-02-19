import CartChangedMessageParams from "../types/CartChangedMessageParams";
import Device from "../types/Device";

/**
 * Parses a Cart Changed message string into a human-friendly text message.
 * @param message The message string
 * @param devices The devices list
 * @returns 
 */
export default function parseCartChangedChannelMessage(message: string, devices: Device[]): string {
  const [userId, deviceId, amount] = message.split(' ')
  const deviceChanged = devices.find(device => device._id === deviceId)
  const action = Number(amount) > 0 ? 'increased' : 'decreased'
  return `Somebody changed the data: \n${deviceChanged?.name} ${action} by ${Math.abs(Number(amount))}!`
}