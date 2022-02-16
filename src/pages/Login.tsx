import { Alert, Box, Button, Card, CardContent, CardHeader, FormControl, Link, TextField } from '@mui/material';
import react, { useState } from 'react';
import Brand from '../components/Brand';
import useAuth from '../hooks/useAuth';

export default function Login() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [error, setError] = useState('')
  const auth = useAuth();

  const onGotoSignUpClick = (ev: any) => {
    ev.preventDefault()
    setShowSignUpForm(true)
  }

  const onGotoLoginClick = (ev: any) => {
    ev.preventDefault()
    setShowSignUpForm(false)
  }

  const onLogin = () => {
    const username = (document.getElementById('signin-username') as HTMLInputElement)?.value
    const password = (document.getElementById('signin-password') as HTMLInputElement)?.value
    auth.signIn({ username, password }).catch(error => {
      const errorMessage = error.response?.data as string
      if (errorMessage) {
        setError(errorMessage)
      }
      else {
        setError('There was an error while loading the devices list. Make sure the server is up.')
      }
    })
  }

  return <>
    <Box sx={{ flexGrow: 1, bgcolor: 'rgb(231, 235, 240)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ width: 1, mx: 2, maxWidth: 340, height: 500, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardHeader title={<Brand />} sx={{ textAlign: 'center', mt: 2 }}></CardHeader>
        <CardContent>
          {error ? <Alert severity="warning" sx={{ mb: 2 }}>{error}</Alert> : null}
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
                <Button variant="contained" disableElevation>Sign Up</Button>
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