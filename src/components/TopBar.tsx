import { DevicesOther } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import useAuth from '../hooks/useAuth';

export default function TopBar() {
  const auth = useAuth()

  const signOut = () => {
    auth.signOut()
    window.location.reload()
  };

  return <>
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ mr: 2 }}>
          <DevicesOther />
        </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Devices List
          </Typography>
        <Button color="inherit" onClick={signOut}>Logout</Button>
      </Toolbar>
    </AppBar>
  </>
}