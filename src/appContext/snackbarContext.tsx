import { IconButton, makeStyles, Snackbar, SnackbarContent, Theme } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { createContext, memo, ReactNode, useContext, useState } from 'react'
const useStyles = makeStyles((theme: Theme) => ({
  success: {
    borderColor: theme.palette.success.main,
    backgroundColor: theme.palette.success.light,
    color: theme.palette.common.black,
  },
  error: {
    borderColor: theme.palette.error.main,
    backgroundColor: theme.palette.error.light,
    color: theme.palette.common.black,
  },
  info: {
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.black,
  },
  warning: {
    borderColor: theme.palette.warning.main,
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.common.black,
  },
}))

export interface State {
  open: boolean
  message: string
  type: 'info' | 'error' | 'success' | 'warning' | ''
}
const defaultState: State = {
  open: false,
  message: '',
  type: 'info',
}
interface SnackbarContextType {
  handleSnackbarSet: (message: string, type?: string) => void
}

const defaultSnackbarContext: SnackbarContextType = {
  handleSnackbarSet: (message: string, type?: string) => {
    return null
  },
}

const SnackBarContext = createContext<State>(defaultState)
const SnackbarSetContext = createContext<SnackbarContextType>(defaultSnackbarContext)
type PropsContainer = {
  children: ReactNode
}

type PropsProvider = {
  setSnackbarState: any
  children: ReactNode
}

const SnackbarProvider = memo(({ setSnackbarState, children }: PropsProvider) => {
  const handleSnackbarSet = (message: string, type = 'info') => {
    setSnackbarState({
      message,
      open: true,
      type,
    })
  }

  return <SnackbarSetContext.Provider value={{ handleSnackbarSet }}>{children}</SnackbarSetContext.Provider>
})

SnackbarProvider.displayName = 'snackbarProvider'

const SnackbarContainer = ({ children }: PropsContainer): any => {
  const classes = useStyles()
  const [snackbarState, setSnackbarState] = useState<State>(defaultState)

  const handleClose = () => {
    setSnackbarState({ open: false, message: '', type: '' })
  }

  return (
    <SnackBarContext.Provider value={snackbarState}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={snackbarState.open}
        onClose={handleClose}
        key={'top-right'}
        autoHideDuration={1500}
      >
        <SnackbarContent
          className={classes[snackbarState.type || 'info']}
          message={snackbarState.message ? <span>{snackbarState.message}</span> : null}
          action={[
            <IconButton key="close" color="inherit" onClick={handleClose}>
              <Close />
            </IconButton>,
          ]}
        />
      </Snackbar>
      <SnackbarProvider setSnackbarState={setSnackbarState}>{children}</SnackbarProvider>
    </SnackBarContext.Provider>
  )
}
const useSetSnackbar = (): SnackbarContextType => useContext(SnackbarSetContext)
const useSnackBarState = (): State => useContext(SnackBarContext)
export { SnackbarContainer, useSnackBarState, useSetSnackbar }
