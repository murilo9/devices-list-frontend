import { DesktopWindows, DeviceHub, Laptop, PhoneAndroid, Print, ShoppingCart, TabletAndroid, Watch } from '@mui/icons-material';
import { Avatar, Box, Chip, Divider, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import react from 'react';
import DeviceType from '../types/DeviceType';
import DeviceIcon from './DeviceIcon';

type DeviceItemProps = {
  name: string,
  description: string,
  type: DeviceType,
  index: number,
  amountInCart: number,
  onDeviceItemClick: (index: number) => void
}

export default function DeviceItem({ name, description, type, index, amountInCart, onDeviceItemClick }: DeviceItemProps) {
  const handleDeviceItemClick = () => onDeviceItemClick(index)
  return <>
    {index !== 0 ? <Divider variant="inset" component="li" /> : null}
    <ListItemButton onClick={handleDeviceItemClick}>
      <ListItemAvatar color="error">
        <DeviceIcon type={type} />
      </ListItemAvatar>
      <ListItemText primary={
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: { xs: 1, sm: 0 } }}>
          <span>{name}</span>
          <Chip sx={{ paddingX: 1 }} size="small" label={amountInCart} color={amountInCart ? 'success' : 'default'} icon={<ShoppingCart sx={{ width: '14px' }} />}></Chip>
        </Box>
      }
        secondary={description} />
    </ListItemButton>
  </>
}