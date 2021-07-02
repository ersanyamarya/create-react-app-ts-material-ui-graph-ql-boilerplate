import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // border: '1px solid #3333',
    padding: theme.spacing(3),
    // boxShadow: theme.shadows[3],
    textAlign: 'center',
    alignItems: 'center',
    '& > div': {
      marginBottom: theme.spacing(2),
    },
  },
}))

export default useStyles
