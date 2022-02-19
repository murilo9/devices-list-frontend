import signIn from "../requests/signIn";

type SignInForm = {
  username: string,
  password: string
}

/**
 * This hook offers an API to easly signing-in/out and getting session data.
 */
export default function useAuth() {
  const getToken = () => localStorage.getItem('token') || ''

  const getUser = () => ({
    username: localStorage.getItem('username') || '',
    userId: localStorage.getItem('userId') || ''
  })

  return {
    getToken,
    getUser,
    signIn: async (signInForm: SignInForm) => {
      const signInResponse = await signIn(signInForm)
      const { token, userId, username } = signInResponse
      localStorage.setItem('token', token)
      localStorage.setItem('username', username)
      localStorage.setItem('userId', userId)
      // TODO fetch user data and call setUser()
    },
    signOut: () => {
      localStorage.setItem('token', '')
      localStorage.setItem('username', '')
      localStorage.setItem('userId', '')
    }
  }
}