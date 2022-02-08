import { DesktopWindows, DeviceHub, Laptop, PhoneAndroid, Print, TabletAndroid, Watch } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { blue, brown, green, grey, orange, pink, yellow } from '@mui/material/colors';
import react from 'react'
import DeviceType from '../types/DeviceType';

type DeviceIconProps = {
  type: DeviceType
}

const colors = {
  PHONE: pink[500],
  TABLET: green[500],
  NOTEBOOK: blue[500],
  DESKTOP: orange[500],
  WATCH: yellow[500],
  PRINTER: brown[500],
  MISC: grey[500]
}

export default function DeviceIcon({ type }: DeviceIconProps) {
  let deviceIcon = <DeviceHub sx={{ color: colors[type] }} />
  switch (type) {
    case DeviceType.PHONE:
      deviceIcon = <PhoneAndroid />
      break;
    case DeviceType.TABLET:
      deviceIcon = <TabletAndroid />
      break;
    case DeviceType.NOTEBOOK:
      deviceIcon = <Laptop />
      break;
    case DeviceType.DESKTOP:
      deviceIcon = <DesktopWindows />
      break;
    case DeviceType.WATCH:
      deviceIcon = <Watch />
      break;
    case DeviceType.PRINTER:
      deviceIcon = <Print />
  }
  return <>
    <Avatar sx={{ bgcolor: colors[type] }}>
      {deviceIcon}
    </Avatar>
  </>
}