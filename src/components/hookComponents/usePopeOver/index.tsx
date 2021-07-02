import { MouseEvent, useState } from 'react'

const usePopOver = (): [
  null | HTMLElement,
  () => void,
  {
    handleAnchoredClick: (event: MouseEvent<any>) => void
    setAnchorEl: (elem: null | HTMLElement) => void
  }
] => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleAnchoredClick = (event: MouseEvent<any>) => setAnchorEl(event.currentTarget)
  const handleAnchoredClose = () => {
    setAnchorEl(null)
  }

  return [anchorEl, handleAnchoredClose, { handleAnchoredClick, setAnchorEl }]
}

export default usePopOver
