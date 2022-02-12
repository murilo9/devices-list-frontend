import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, IconButton, TextField, Typography } from '@mui/material';
import react, { useState } from 'react';
import Device from '../types/Device';
import CloseIcon from '@mui/icons-material/Close';

type ItemModalProps = {
  showItemModal: boolean,
  device: Device,
  setShowItemModal: (set: boolean) => void
}

export default function ItemModal({ showItemModal, device, setShowItemModal }: ItemModalProps) {
  const handleItemModalClose = () => setShowItemModal(false)

  return <>
    <Dialog
      open={showItemModal}
      onClose={handleItemModalClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="lg"
    >
      <DialogTitle id="alert-dialog-title">
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">{device.name}</Typography>
          <IconButton onClick={handleItemModalClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Grid container sx={{ width: 560, pt: 1, maxWidth: 1 }}>
            <Grid item xs={12} sm={7}>
              <Box sx={{ height: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography sx={{ mb: { xs: 2, sm: 0 } }}>{device.description}</Typography>
                <Typography variant="h6" color="text.primary">
                  $ {device.price.toFixed(2)}
                </Typography>
              </Box>
            </Grid>
            <Divider orientation="vertical" flexItem sx={{ mx: 2, display: { xs: 'none', sm: 'initial' } }}></Divider>
            <Grid item xs={12} sm={4} sx={{ mt: { xs: 3, sm: 0 } }}>
              <TextField size="small" label="Amount" sx={{ mb: 1, width: 1 }} />
              <Button fullWidth sx={{ mb: 1 }} variant="outlined">
                Add to cart
              </Button>
              <Button color="warning" fullWidth variant="outlined">
                Remove from cart
              </Button>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleItemModalClose}>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  </>
}