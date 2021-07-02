import { SvgIcon, SvgIconProps } from '@material-ui/core'
import React, { ReactElement } from 'react'

export function UnfoldMoreIcon(props: SvgIconProps): ReactElement {
  return (
    <SvgIcon {...props}>
      <path
        d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
        fill="black"
      />
    </SvgIcon>
  )
}

export function ExpandMoreIcon(props: SvgIconProps): ReactElement {
  return (
    <SvgIcon {...props}>
      <path
        d="M12 5.83L15.17 9L16.58 7.59L12 3L7.40997 7.59L8.82997 9L12 5.83ZM12 18.17L8.82997 15L7.41997 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
        fill="#25252D"
      />
      <path d="M8.82998 15L12 18.17L15.17 15L16.59 16.41L12 21L7.41998 16.41L8.82998 15Z" fill="#BFBFCA" />
    </SvgIcon>
  )
}

export function ExpandLessIcon(props: SvgIconProps): ReactElement {
  return (
    <SvgIcon {...props}>
      <path
        d="M12 5.83L15.17 9L16.58 7.59L12 3L7.40997 7.59L8.82997 9L12 5.83ZM12 18.17L8.82997 15L7.41997 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
        fill="#BFBFCA"
      />
      <path d="M8.82998 15L12 18.17L15.17 15L16.59 16.41L12 21L7.41998 16.41L8.82998 15Z" fill="#25252D" />
    </SvgIcon>
  )
}
