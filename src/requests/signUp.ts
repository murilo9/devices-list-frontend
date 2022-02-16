import SignUpForm from "../types/SignUpForm";
import User from "../types/User";
import baseUrl from "../utils/baseUrl";
import http from "../utils/http";

export default async function signUp(signUpForm: SignUpForm): Promise<User> {
  const url = baseUrl + '/signup'
  return http.post(url, signUpForm)
}