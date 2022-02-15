import axios, { AxiosResponse } from 'axios';
import { request } from 'http';

const headers = {
  'x-access-token': ''
}

const get = async function <T>(url: string, params?: { [key: string]: any }): Promise<T> {
  const request = await axios({
    method: 'GET',
    url,
    params,
    headers
  })
  return request.data
}

const post = async function <T>(url: string, data: { [key: string]: any }): Promise<T> {
  const request = await axios({
    method: 'POST',
    url,
    data,
    headers
  })
  return request.data
}

const put = async function <T>(url: string, data: { [key: string]: any }): Promise<T> {
  const request = await axios({
    method: 'PUT',
    url,
    data,
    headers
  })
  return request.data
}

const delette = async function <T>(url: string, params?: { [key: string]: any }): Promise<T> {
  const request = await axios({
    method: 'DELETE',
    url,
    params,
    headers
  })
  return request.data
}

const http = {
  get,
  post,
  put,
  delette
}

export default http;