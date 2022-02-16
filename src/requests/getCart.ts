import DeviceInCart from "../types/DeviceInCart";
import baseUrl from "../utils/baseUrl";
import http from "../utils/http";

export default async function getCart(): Promise<DeviceInCart[]> {
  const url = baseUrl + '/cart'
  return http.get<DeviceInCart[]>(url)
}