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
      main: '#135DE8',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: 50,
          ...(ownerState.variant === 'outlined' && {
            padding: '11px 33px',
            color: '#000',
            border: '2px solid #000',
            '&:hover': {
              color: '#fff',
              background: '#000',
              border: '2px solid #000',
              transition: theme.transitions.create('all', {
                duration: theme.transitions.duration.standard
              })
            }
          })
        })
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#000',
          stroke: '#fff',
          strokeWidth: '1px'
        }
      }
    }
  },
  typography: {
    fontFamily: dmSans.style.fontFamily,
    allVariants: {
      textTransform: 'none'
    }
  },
});

export default theme;
