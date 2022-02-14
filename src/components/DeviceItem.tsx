import { Box, Divider, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import react from 'react';
import Device from '../types/Device';
import DeviceIcon from './DeviceIcon';
import TotalInCart from './TotalInCart';

type DeviceItemProps = {
  device: Device,
  index: number,
  onDeviceItemClick: (index: number) => void
}

export default function DeviceItem({ device, index, onDeviceItemClick }: DeviceItemProps) {
  const handleDeviceItemClick = () => onDeviceItemClick(index)
  return <>
    {index !== 0 ? <Divider variant="inset" component="li" /> : null}
    <ListItemButton onClick={handleDeviceItemClick}>
      <ListItemAvatar color="error">
        <DeviceIcon type={device.type} />
      </ListItemAvatar>
      <ListItemText primary={
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: { xs: 1, sm: 0 } }}>
          <span>{device.name}</span>
          <TotalInCart deviceId={device._id} />
        </Box>
      }
        secondary={device.description} />
    </ListItemButton>
  </>
}