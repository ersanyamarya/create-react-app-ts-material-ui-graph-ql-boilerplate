import { Typography, Grid } from '@material-ui/core'
import React, { ReactElement } from 'react'

export default function NotFound(): ReactElement {
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={10}>
        <Typography variant="h1" align="center">
          I can't find this page 😭
        </Typography>
      </Grid>
    </Grid>
  )
}
