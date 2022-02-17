import CartChangedMessageParams from "../types/CartChangedMessageParams";
import Device from "../types/Device";

export default function parseCartChangedChannelMessage(message: string, devices: Device[]): string {
  const [deviceId, amount] = message.split(' ')
  const deviceChanged = devices.find(device => device._id === deviceId)
  const action = Number(amount) > 0 ? 'increased' : 'decreased'
  return `Somebody changed the data: \n${deviceChanged?.name} ${action} by ${Math.abs(Number(amount))}!`
}