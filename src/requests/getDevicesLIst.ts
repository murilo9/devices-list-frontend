import Device from "../types/Device";
import Result from "../types/Result";
import baseUrl from "../utils/baseUrl";
import http from "../utils/http";

export default function getDevicesList(): Promise<Result<Device[]>> {
  const url = baseUrl + '/devices';
  return http.get(url);
}