import Device from "../types/Device";
import baseUrl from "../utils/baseUrl";
import http from "../utils/http";

/**
 * Loads the registered devices list from the server.
 */
export default function getDevicesList(): Promise<Device[]> {
  const url = baseUrl + '/devices';
  return http.get<Device[]>(url);
}