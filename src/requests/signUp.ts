import SignUpForm from "../types/SignUpForm";
import User from "../types/User";
import baseUrl from "../utils/baseUrl";
import http from "../utils/http";

/**
 * Signs up.
 * @param signUpForm Sign up form
 * @returns 
 */
export default async function signUp(signUpForm: SignUpForm): Promise<User> {
  const url = baseUrl + '/signup'
  return http.post(url, signUpForm)
}