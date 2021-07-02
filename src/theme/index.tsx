import { createMuiTheme, PaletteType, responsiveFontSizes, Theme } from '@material-ui/core'
import { primary, primaryGradient, secondary, common, success, warning, error, info } from './colors'

const fontFamily = ['Open Sans', 'Roboto'].join(',')
const getTheme = (type: PaletteType = 'light'): Theme => {
  const theme = responsiveFontSizes(
    createMuiTheme({
      palette: {
        type,
        primary,
        secondary,
        common,
        success,
        warning,
        error,
        info,
      },
      shape: {
        borderRadius: 2.5,
      },
      typography: {
        fontFamily,
        fontSize: 12,
        subtitle1: {
          letterSpacing: '1.5px',
        },
        subtitle2: {
          letterSpacing: '1.6px',
        },
      },
      overrides: {
        MuiFab: {
          secondary: { background: primaryGradient },
          root: {
            fontSize: '1.2em',
          },
        },
        MuiOutlinedInput: {
          adornedEnd: {
            paddingRight: '0',
          },
        },

        MuiSnackbarContent: {
          root: {
            padding: '0px',
            paddingRight: '2em',
            paddingLeft: '2em',
          },
        },
        MuiCssBaseline: {
          '@global': {
            html: {
              WebkitFontSmoothing: 'auto',
              scrollBehavior: 'smooth',
              fontFamily: fontFamily,
            },
            body: {
              fontFamily: fontFamily,
              width: '100vw',
              height: '100vh',
              boxSizing: 'border-box',
            },
          },
        },
      },
      props: {
        MuiButton: {
          variant: 'contained',
          color: 'primary',
          disableElevation: false,
          disableRipple: false,
          size: 'medium',
        },
        MuiTextField: {
          variant: 'outlined',
          color: 'primary',
          fullWidth: false,
          size: 'small',
        },

        MuiTypography: {
          color: 'textPrimary',
        },
        MuiCircularProgress: {
          size: 80,
          thickness: 3,
        },
        MuiFab: {
          color: 'secondary',
          size: 'large',
          variant: 'extended',
        },
      },
    })
  )

  theme.typography.h1 = {
    fontFamily,
    fontSize: '5.2em',
    [theme.breakpoints.down('md')]: {
      fontSize: '4.5em',
    },
  }
  theme.overrides = {}
  theme.overrides.MuiInputBase = {
    root: {
      width: '16em',
    },
  }

  theme.overrides.MuiAppBar = {
    colorPrimary: {
      backgroundColor: theme.palette.primary.dark,
    },
  }
  theme.overrides.MuiPaper = {
    root: {
      backgroundColor: theme.palette.common.white,
    },
  }

  theme.overrides.MuiButton = {
    root: {
      color: theme.palette.primary.dark,
      fontSize: '1em',
    },
    contained: {
      width: '12em',
    },

    outlined: {
      borderWidth: '20px',
      width: '12em',
    },
  }

  theme.overrides.MuiTableCell = {
    sizeSmall: {
      padding: theme.spacing(0),
    },
    root: {
      padding: theme.spacing(0),
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
    },
  }
  return theme
}

export default getTheme
