import { Alert, Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, IconButton, TextField, Typography } from '@mui/material';
import react, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Device from '../types/Device';
import CloseIcon from '@mui/icons-material/Close';
import { AppState } from '../store/initialState';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart, setCart } from '../store/rootSlice';
import useTotalItemsInCart from '../hooks/useTotalItemsInCart';
import saveCart from '../requests/saveCart';
import DeviceInCart from '../types/DeviceInCart';
import loadCart from '../utils/loadCart';

type ItemModalProps = {
  showItemModal: boolean,
  device: Device,
  setShowItemModal: (set: boolean) => void
}

export default function ItemModal({ showItemModal, device, setShowItemModal }: ItemModalProps) {
  const dispatch = useDispatch();
  const cart = useSelector((state: AppState) => state.cart)

  const [amount, setAmount] = useState(0)
  const [amountError, setAmountError] = useState('')
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('')

  const onAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const numberValue = Number(event.currentTarget.value)
    if (isNaN(numberValue)) {
      setAmountError('Must input a valid amount')
    }
    else {
      setAmountError('')
      setAmount(numberValue)
    }
  }

  const handleModalClose = () => {
    // Reset component state
    setShowItemModal(false)
    setAmount(0)
    setAmountError('')
    setSaveError('')
    // Reload cart
    loadCart(dispatch, setCart)
  }

  const handleSaveClick = () => {
    setSaving(true)
    saveCart(cart)
      .then((response: DeviceInCart[]) => {
        handleModalClose()
      })
      .catch(error => {
        setSaveError('There was a problem while saving the cart data. Please try again.')
      })
      .finally(() => {
        setSaving(false)
      })
  }
  const handleAddItemToCart = () => {
    dispatch(addItemToCart({ item: device, amount }))
  }
  const handleRemoveItemFromCart = () => {
    const itemId = device._id
    dispatch(removeItemFromCart({ itemId, amount }))
  }

  const totalItemsInCart = useTotalItemsInCart(device._id)

  return <>
    <Dialog
      open={showItemModal}
      onClose={handleModalClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="lg"
    >
      <DialogTitle id="alert-dialog-title" sx={{ borderBottom: '1px solid #DDDDDD' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">{device.name}</Typography>
          <IconButton onClick={handleModalClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      {saveError ? <Alert severity="warning">{saveError}</Alert> : null}
      <DialogContent sx={{ my: 3 }}>
        <Grid container sx={{ width: 560, pt: 1, maxWidth: 1 }}>
          <Grid item xs={12} sm={7}>
            <Box sx={{ height: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography sx={{ mb: { xs: 2, sm: 0 } }} color="text.secondary">{device.description}</Typography>
              <Typography variant="h6">
                $ {device.price.toFixed(2)}
              </Typography>
            </Box>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mx: 2, display: { xs: 'none', sm: 'initial' } }}></Divider>
          <Grid item xs={12} sm={4} sx={{ mt: { xs: 3, sm: 0 } }}>
            <TextField
              size="small"
              label="Amount"
              sx={{ mb: 1, width: 1 }}
              value={amount}
              onChange={onAmountChange}
              error={!!amountError}
              helperText={amountError}
              disabled={saving}
            />
            <Button fullWidth sx={{ mb: 1 }} variant="outlined" onClick={handleAddItemToCart}>
              Add to cart
              </Button>
            <Button color="warning" fullWidth variant="outlined" onClick={handleRemoveItemFromCart}>
              Remove from cart
            </Button>
            <Typography variant="body1" sx={{ mt: 2 }}>
              This item in cart: {totalItemsInCart}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ borderTop: '1px solid #DDDDDD' }}>
        <Button onClick={handleModalClose} disabled={saving} color="error">
          Cancel
        </Button>
        <Button onClick={handleSaveClick} disabled={saving}>
          {saving ? 'Saving...' : 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  </>
}