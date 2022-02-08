import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import react from 'react';
import DeviceItem from '../components/DeviceItem';
import DevicesList from '../components/DevicesLIst';
import TopBar from '../components/TopBar';
import DeviceType from '../types/DeviceType';

const devicesMock = [
  {
    _id: 0,
    name: 'Apple Watch',
    type: DeviceType.WATCH,
    description: 'A smart watch. Use it if a watch is not enough for you.'
  },
  {
    _id: 1,
    name: 'iPhone',
    type: DeviceType.PHONE,
    description: 'A very desirable phone. A show of status in most places.'
  },
  {
    _id: 2,
    name: 'Redmi 7',
    type: DeviceType.PHONE,
    description: 'An option against Apple and Samsung domain.'
  },
  {
    _id: 3,
    name: 'Acer Nitro',
    type: DeviceType.NOTEBOOK,
    description: 'A more accessible notebook for gaming.'
  },
  {
    _id: 4,
    name: 'Desktop Positivo',
    type: DeviceType.DESKTOP,
    description: 'A cheap option.'
  },
  {
    _id: 5,
    name: 'HP Printer',
    type: DeviceType.PRINTER,
    description: 'A nice and useful printer.'
  },
  {
    _id: 6,
    name: 'Samsung Galaxy 8',
    type: DeviceType.PHONE,
    description: 'A good option for Android lovers'
  },
  {
    _id: 7,
    name: 'iPad',
    type: DeviceType.TABLET,
    description: 'When a simple tablet is not enough.'
  },
]

export default function Main() {
  return <>
    <Box sx={{ flexGrow: 1, bgcolor: 'rgb(231, 235, 240)', height: '100vh', overflowY: 'auto' }}>
      <TopBar />
      <Box sx={{ padding: 3, paddingTop: 10 }}>
        <DevicesList>
          {devicesMock.map((device, index) =>
            <DeviceItem {...device} key={device._id} index={index} amountInCart={Math.abs(Math.floor((Math.random() * 10) - 1))} />)}
        </DevicesList>
      </Box>
    </Box>
  </>
}