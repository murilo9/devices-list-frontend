import { DevicesOther } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';

export default function TopBar() {
  return <>
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ mr: 2 }}>
          <DevicesOther />
        </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Devices List
          </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  </>
}