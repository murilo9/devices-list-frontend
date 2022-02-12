import { Avatar, Box, List, Skeleton, Typography } from '@mui/material';
import react, { ReactNode } from 'react';

type DevicesListProps = {
  children: ReactNode,
  loading?: boolean
}

const SKELETON_COUNT = 8;

export default function DevicesList({ children, loading = false }: DevicesListProps) {
  const skeletonLoader = [];
  for (let i = 0; i < SKELETON_COUNT; i++) {
    skeletonLoader.push(
      <Box sx={{ display: 'flex', alignItems: 'center', paddingX: 2 }} key={i}>
        <Skeleton variant="circular">
          <Avatar />
        </Skeleton>
        <Box sx={{ width: 1, marginLeft: 2, marginY: 1 }}>
          <Typography variant="h5">
            <Skeleton />
          </Typography>
          <Typography variant="caption">
            <Skeleton />
          </Typography>
        </Box>
      </Box>
    )
  }
  return <>
    <List sx={{ width: '100%', maxWidth: 768, height: 1, bgcolor: 'background.paper', marginRight: 'auto', marginLeft: 'auto' }}>
      {loading ? skeletonLoader : children}
    </List>
  </>
}