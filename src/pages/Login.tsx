import { Box, Button, Card, CardContent, CardHeader, FormControl, Link, TextField } from '@mui/material';
import react, { useState } from 'react';
import Brand from '../components/Brand';

export default function Login() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const onGotoSignUpClick = (ev: any) => {
    ev.preventDefault()
    setShowSignUpForm(true)
  }

  const onGotoLoginClick = (ev: any) => {
    ev.preventDefault()
    setShowSignUpForm(false)
  }

  return <>
    <Box sx={{ flexGrow: 1, bgcolor: 'rgb(231, 235, 240)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ width: 1, mx: 2, maxWidth: 340, height: 500, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardHeader title={<Brand />} sx={{ textAlign: 'center', mt: 2 }}></CardHeader>
        <CardContent>
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
                  <TextField id="username" label="Username" variant="outlined" size="small" sx={{ mb: 2 }} />
                  <TextField id="password" type="password" label="Password" variant="outlined" size="small" />
                </>
            }
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            {
              showSignUpForm ?
                <Button variant="contained" disableElevation>Sign Up</Button>
                :
                <Button variant="contained" disableElevation>Login</Button>
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