import MenuIcon from '@mui/icons-material/Menu';
import { Alert, Box } from '@mui/material';
import react, { useEffect, useState } from 'react';
import getDevicesList from '../api/getDevicesLIst';
import DeviceItem from '../components/DeviceItem';
import DevicesList from '../components/DevicesLIst';
import TopBar from '../components/TopBar';
import Device from '../types/Device';

export default function Main() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loadingDevices, setLoadingDevices] = useState(true);
  const [error, setError] = useState('');

  const loadDevices = () => {
    getDevicesList().then(result => {
      if (result.failed) {

        setError('There was an error while loading the devices list.');
      }
      else {
        setDevices(result.payload)
      }
      setLoadingDevices(false);
    })
  }

  useEffect(() => {
    loadDevices();
  }, [])

  return <>
    <Box sx={{ flexGrow: 1, bgcolor: 'rgb(231, 235, 240)', height: '100vh', overflowY: 'auto' }}>
      <TopBar />
      <Box sx={{ padding: 3, paddingTop: 10 }}>
        {error ? <Alert color="warning">{error}</Alert> : null}
        <DevicesList loading={loadingDevices}>
          {devices.map((device, index) =>
            <DeviceItem {...device} key={device._id} index={index} amountInCart={Math.abs(Math.floor((Math.random() * 10) - 1))} />)}
        </DevicesList>
      </Box>
    </Box>
  </>
}