import { Alert, Box, Button, Card, CardContent, CardHeader, FormControl, Link, TextField } from '@mui/material';
import react, { useState } from 'react';
import Brand from '../components/Brand';
import useAuth from '../hooks/useAuth';
import signUp from '../requests/signUp';

export default function Login() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [error, setError] = useState('')
  const [info, setInfo] = useState('')
  const auth = useAuth();

  const clearMessages = () => {
    setError('')
    setInfo('')
  }

  // Shows the sign up form
  const onGotoSignUpClick = (ev: any) => {
    ev.preventDefault()
    setShowSignUpForm(true)
    clearMessages()
  }

  // Shows the login form
  const onGotoLoginClick = (ev: any) => {
    ev.preventDefault()
    setShowSignUpForm(false)
    clearMessages()
  }

  // Try to sign in. Reloads page on success. Shows error on failure.
  const onLogin = () => {
    const username = (document.getElementById('signin-username') as HTMLInputElement)?.value
    const password = (document.getElementById('signin-password') as HTMLInputElement)?.value
    auth.signIn({ username, password })
      .then(() => {
        window.location.reload()
      })
      .catch(error => {
        const errorMessage = error.response?.data as string || 'There was an error while loading the devices list. Make sure the server is up.'
        clearMessages()
        setError(errorMessage)
      })
  }

  // Try to sign up. Reloads page on success. Shows error on failure.
  const onSignUp = () => {
    const username = (document.getElementById('signup-username') as HTMLInputElement)?.value
    const password = (document.getElementById('signup-password') as HTMLInputElement)?.value
    const passwordAgain = (document.getElementById('signup-password-again') as HTMLInputElement)?.value
    signUp({ username, password, passwordAgain }).then(user => {
      clearMessages()
      setInfo('User created successfully. You may now login')
    })
      .catch(error => {
        const errorMessage = error.response?.data as string || 'There was an error while signing up. Please try again.'
        clearMessages()
        setError(errorMessage)
      })
  }

  return <>
    <Box sx={{ flexGrow: 1, bgcolor: 'rgb(231, 235, 240)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ width: 1, mx: 2, maxWidth: 340, height: 540, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardHeader title={<Brand />} sx={{ textAlign: 'center', mt: 2 }}></CardHeader>
        <CardContent>
          {error ? <Alert severity="warning" sx={{ mb: 2 }}>{error}</Alert> : null}
          {info ? <Alert severity="info" sx={{ mb: 2 }}>{info}</Alert> : null}
          <FormControl fullWidth sx={{ mb: 2 }}>
            {
              showSignUpForm ?
                <>
                  <TextField id="signup-username" label="Username" variant="outlined" size="small" sx={{ mb: 2 }} />
                  <TextField id="signup-password" type="password" label="Password" variant="outlined" size="small" sx={{ mb: 2 }} />
                  <TextField id="signup-password-again" type="password" label="Repeat password" variant="outlined" size="small" />
                </>
                :
                <>
                  <TextField id="signin-username" label="Username" variant="outlined" size="small" sx={{ mb: 2 }} />
                  <TextField id="signin-password" type="password" label="Password" variant="outlined" size="small" />
                </>
            }
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            {
              showSignUpForm ?
                <Button variant="contained" disableElevation onClick={onSignUp}>Sign Up</Button>
                :
                <Button variant="contained" disableElevation onClick={onLogin}>Login</Button>
            }
          </FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {
              showSignUpForm ?
                <Link href="#" onClick={(ev: any) => onGotoLoginClick(ev)} sx={{ display: 'inline' }} underline="hover">Login</Link>
                :
                <Link href="#" onClick={(ev: any) => onGotoSignUpClick(ev)} sx={{ display: 'inline' }} underline="hover">Sign Up</Link>
            }
          </Box>
        </CardContent>
      </Card>
    </Box>
  </>
}