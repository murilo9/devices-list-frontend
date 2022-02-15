import Device from "../types/Device";
import baseUrl from "../utils/baseUrl";
import http from "../utils/http";

export default function getDevicesList(): Promise<Device[]> {
  const url = baseUrl + '/devices';
  return http.get<Device[]>(url);
}