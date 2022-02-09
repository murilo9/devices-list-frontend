import { DevicesOther } from '@mui/icons-material';
import { Avatar, Box, ListItemAvatar, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import react from 'react';

export default function Brand() {
  return <>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar sx={{ width: 72, height: 72, mb: 2, bgcolor: purple[500] }}>
        <DevicesOther sx={{ fontSize: '40px' }} />
      </Avatar>
      <Typography variant="h5">Devices List</Typography>
    </Box>
  </>
}