import SignInForm from "../types/SignInForm"
import SignInResponse from "../types/SignInResponse";
import baseUrl from "../utils/baseUrl";
import http from "../utils/http";

/**
 * Signs in.
 * @param signInForm Sign in form
 * @returns 
 */
export default async function signIn(signInForm: SignInForm): Promise<SignInResponse> {
  const url = baseUrl + '/signin'
  return http.post(url, signInForm)
}