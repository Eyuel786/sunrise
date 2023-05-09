import { DM_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  fallback: ['sans-serif']
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#49beb7',
    },
    secondary: {
      main: '#000',
    },
    error: {
      main: red.A400,
    },
    text: {
      secondary: 'rgba(0,0,0,0.4)'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          padding: '11px 33px',
          fontSize: '1rem',
          '&:hover': {
            transition: theme.transitions.create('all', {
              duration: theme.transitions.duration.standard
            }),
          },
          ...(ownerState.variant === 'outlined' && {
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: ownerState.color === 'primary' && theme.palette.primary.main ||
              ownerState.color === 'secondary' && theme.palette.secondary.main,
            '&:hover': {
              color: '#fff',
              background: ownerState.color === 'primary' && theme.palette.primary.main ||
                ownerState.color === 'secondary' && theme.palette.secondary.main,
            }
          }),
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
            color: '#fff',
            borderColor: theme.palette.primary.main
          })
        })
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          stroke: '#fff',
          strokeWidth: '1px'
        }
      }
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true
      }
    }
  },
  typography: {
    fontFamily: dmSans.style.fontFamily,
    allVariants: {
      textTransform: 'none'
    },
    containedBtn: {
      color: '#000',
      padding: '11px 33px',
    },
    outlinedBtn: {
      color: '#000',
      padding: '11px 33px',
      fontSize: '1rem',
      border: '2px solid #000',
      '&:hover': {
        color: '#fff',
        background: '#49beb7',
        border: '2px solid #49beb7',
      }
    }
  },
});

export default theme;
