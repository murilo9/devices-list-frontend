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
  amountInCart: number
}

export default function DeviceItem({ name, description, type, index, amountInCart }: DeviceItemProps) {
  return <>
    {index !== 0 ? <Divider variant="inset" component="li" /> : null}
    <ListItemButton onClick={() => console.log('clicked')}>
      <ListItemAvatar color="error">
        <DeviceIcon type={type} />
      </ListItemAvatar>
      <ListItemText primary={
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{name}</span>
          <Chip sx={{ paddingX: 1 }} size="small" label={amountInCart} color={amountInCart ? 'success' : 'default'} icon={<ShoppingCart sx={{ width: '14px' }} />}></Chip>
        </Box>
      }
        secondary={description} />
    </ListItemButton>
  </>
}