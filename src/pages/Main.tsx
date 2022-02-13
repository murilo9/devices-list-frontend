import MenuIcon from '@mui/icons-material/Menu';
import { Alert, Box, Button, Modal } from '@mui/material';
import react, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getDevicesList from '../api/getDevicesLIst';
import DeviceItem from '../components/DeviceItem';
import DevicesList from '../components/DevicesLIst';
import ItemModal from '../components/ItemModal';
import TopBar from '../components/TopBar';
import { AppState } from '../store/initialState';
import { setDevicesList } from '../store/rootSlice';
import Device from '../types/Device';

export default function Main() {
  const [loadingDevices, setLoadingDevices] = useState(true);
  const [error, setError] = useState('');
  const [showItemModal, setShowItemModal] = useState(false);
  const [selectedDeviceIndex, setSelectedDeviceIndex] = useState(-1);

  const dispatch = useDispatch();
  const devices = useSelector((state: AppState) => state.devicesList)
  const state = useSelector((state: AppState) => state)

  const handleOnDeviceItemClick = (index: number) => {
    setSelectedDeviceIndex(index)
    setShowItemModal(true)
  }

  const loadDevices = () => {
    getDevicesList().then(result => {
      if (result.failed) {
        setError('There was an error while loading the devices list.');
      }
      else {
        const devices = result.payload
        setSelectedDeviceIndex(0)
        dispatch(setDevicesList(devices))
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
            <DeviceItem
              {...device}
              key={device._id}
              index={index}
              amountInCart={Math.abs(Math.floor((Math.random() * 10) - 1))}
              onDeviceItemClick={handleOnDeviceItemClick}
            />)}
        </DevicesList>
      </Box>
      {`selectedDeviceIndex: ${selectedDeviceIndex}`}
      {
        devices.length ?
          <ItemModal showItemModal={showItemModal} setShowItemModal={setShowItemModal} device={devices[selectedDeviceIndex]}></ItemModal>
          : null
      }
    </Box>
  </>
}