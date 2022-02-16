import { useState } from "react";
import signIn from "../requests/signIn";
import SignUpForm from "../types/SignUpForm";
import User from "../types/User";

type SignInForm = {
  username: string,
  password: string
}

export default function useAuth() {
  const token = localStorage.getItem('token') || ''

  const user = {
    username: localStorage.getItem('username'),
    _id: localStorage.getItem('userId')
  }

  const setToken = (token: string) => {
    localStorage.setItem('token', token)
  }

  const clearToken = () => {
    localStorage.setItem('token', '')
  }

  const setUser = (username: string, userId: string) => {
    localStorage.setItem('username', username)
    localStorage.setItem('userId', userId)
  }

  const clearUser = () => {
    localStorage.setItem('username', '')
    localStorage.setItem('userId', '')
  }

  return {
    token,
    user,
    signIn: async (signInForm: SignInForm) => {
      const token = await signIn(signInForm)
      setToken(token)
      // TODO fetch user data and call setUser()
      window.location.reload()
    },
    signUp: ({ username, password, passwordAgain }: SignUpForm) => {

    },
    signOut: () => {
      clearToken()
      clearUser()
      window.location.reload()
    }
  }
}