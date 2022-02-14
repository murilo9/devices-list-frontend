import { useState } from "react";
import User from "../types/User";

type SignInForm = {
  username: string,
  password: string
}

type SignUpForm = {
  username: string,
  password: string,
  passwordAgain: string
}

export default function useAuth() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState({} as User);

  return {
    token,
    signIn: ({ username, password }: SignInForm) => {
      localStorage.setItem('token', 'token')
      setToken('token')
      window.location.reload()
    },
    signUp: ({ username, password, passwordAgain }: SignUpForm) => {

    },
    signOut: () => {
      localStorage.setItem('token', '')
      setToken('')
      window.location.reload()
    }
  }
}