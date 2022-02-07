import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import react from 'react';
import TopBar from '../components/TopBar';

export default function Main() {
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <TopBar />
    </Box>
  </>
}