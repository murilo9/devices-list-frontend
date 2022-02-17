import { Alert, Box, Button } from '@mui/material';
import react, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getDevicesList from '../requests/getDevicesLIst';
import DeviceItem from '../components/DeviceItem';
import DevicesList from '../components/DevicesLIst';
import ItemModal from '../components/ItemModal';
import TopBar from '../components/TopBar';
import { AppState } from '../store/initialState';
import { setCart, setDevicesList } from '../store/rootSlice';
import loadCart from '../utils/loadCart';
import useAuth from '../hooks/useAuth';
import Salut from '../components/Salut';

export default function Main() {
  const [loadingDevices, setLoadingDevices] = useState(true);
  const [error, setError] = useState('');
  const [showItemModal, setShowItemModal] = useState(false);
  const [selectedDeviceIndex, setSelectedDeviceIndex] = useState(-1);

  const { username, userId } = useAuth().getUser()

  const dispatch = useDispatch();
  const devices = useSelector((state: AppState) => state.devicesList)

  const handleOnDeviceItemClick = (index: number) => {
    setSelectedDeviceIndex(index)
    setShowItemModal(true)
  }

  const loadDevices = () => {
    getDevicesList().then(response => {
      const devices = response
      setSelectedDeviceIndex(0)
      dispatch(setDevicesList(devices))
    })
      .catch(error => {
        setError('There was an error while loading the devices list. Make sure the server is up.');
      })
      .finally(() => {
        setLoadingDevices(false);
      })
  }

  useEffect(() => {
    loadDevices()
    loadCart(dispatch, setCart, setError)
  }, [])

  return <>
    <Box sx={{ flexGrow: 1, bgcolor: 'rgb(231, 235, 240)', height: '100vh', overflowY: 'auto' }}>
      <TopBar />
      <Box sx={{ padding: 3, paddingTop: 10 }}>
        <Salut username={username} />
        {error ? <Alert severity="warning">{error}</Alert> : null}
        {
          error ? null :
            <DevicesList loading={loadingDevices}>
              {devices.map((device, index) =>
                <DeviceItem
                  device={device}
                  key={device._id}
                  index={index}
                  onDeviceItemClick={handleOnDeviceItemClick}
                />)}
            </DevicesList>
        }
      </Box>
      {
        devices.length ?
          <ItemModal showItemModal={showItemModal} setShowItemModal={setShowItemModal} device={devices[selectedDeviceIndex]}></ItemModal>
          : null
      }
    </Box>
  </>
}