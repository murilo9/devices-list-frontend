import { ShoppingCart } from '@mui/icons-material';
import { Box, Chip } from '@mui/material';
import react from 'react';
import useTotalItemsInCart from '../hooks/useTotalItemsInCart';

type TotalInCartProps = {
  deviceId: string
}

export default function TotalInCart({ deviceId }: TotalInCartProps) {
  const totalItemsInCart = useTotalItemsInCart(deviceId)
  return <>
    <Chip
      sx={{ paddingX: 1 }}
      size="small"
      label={totalItemsInCart}
      color={totalItemsInCart ? 'success' : 'default'}
      icon={<ShoppingCart sx={{ width: '14px' }} />}
    ></Chip>
  </>
}