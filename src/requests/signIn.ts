import Result from "../types/Result";
import SignInForm from "../types/SignInForm"
import baseUrl from "../utils/baseUrl";
import http from "../utils/http";

export default async function signIn(signInForm: SignInForm): Promise<Result<string>> {
  const url = baseUrl + '/signin'
  return http.post(url, signInForm)
}