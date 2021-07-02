import { Box, Button, Typography } from '@material-ui/core'
import { PhotoCameraRounded, SendOutlined } from '@material-ui/icons'
import React, { ReactElement, useState } from 'react'
import useStyles from './styles'
export default function Capture(): ReactElement {
  const classes = useStyles()
  const [source, setSource] = useState('')
  const handleCapture = (target: EventTarget & HTMLInputElement) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0]
        const newUrl = URL.createObjectURL(file)
        setSource(newUrl)
        console.log(newUrl)
      }
    }
  }
  return (
    <div className={classes.root}>
      <Typography variant="h2">Capture a picture</Typography>
      <br />
      <Box display="flex" justifyContent="center" className={classes.imgBox}>
        <img src={source} alt={'snap'} className={classes.img}></img>
      </Box>

      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        capture="environment"
        onChange={e => handleCapture(e.target)}
      />
      <br />
      <label htmlFor="icon-button-file">
        <Button aria-label="upload picture" component="span" startIcon={<PhotoCameraRounded />}>
          Capture Image
        </Button>
      </label>
      <Button
        aria-label="upload picture"
        variant="outlined"
        component="span"
        startIcon={<SendOutlined />}
        disabled={!source}
        style={{ marginLeft: '1em' }}
      >
        Capture Image
      </Button>
    </div>
  )
}
