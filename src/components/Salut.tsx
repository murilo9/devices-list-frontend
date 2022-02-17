import { Typography } from '@mui/material'
import react from 'react'

type SalutProps = {
  username: string
}

export default function Salut({ username }: SalutProps) {
  const hours = new Date().getHours()
  let dayPeriod = 'night'
  if (hours >= 6) dayPeriod = 'morning'
  if (hours >= 12) dayPeriod = 'afternoon'
  if (hours >= 18) dayPeriod = 'evening'
  return <>
    <Typography variant="h5" sx={{ width: 1, maxWidth: 768, marginX: 'auto', mb: 3 }}>
      {`It's a nice ${dayPeriod} for shopping, ${username}!`}
    </Typography>
  </>
}