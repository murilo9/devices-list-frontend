import SignInForm from "../types/SignInForm"
import SignInResponse from "../types/SignInResponse";
import baseUrl from "../utils/baseUrl";
import http from "../utils/http";

export default async function signIn(signInForm: SignInForm): Promise<SignInResponse> {
  const url = baseUrl + '/signin'
  return http.post(url, signInForm)
}