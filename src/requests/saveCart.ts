import DeviceInCart from "../types/DeviceInCart";
import baseUrl from "../utils/baseUrl";
import http from "../utils/http";

export default async function saveCart(items: DeviceInCart[]): Promise<DeviceInCart[]> {
  const url = baseUrl + '/cart'
  return http.put<DeviceInCart[]>(url, { items })
}