import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    body2: {
      color: '#272F4C',
    },
    fontFamily: `"Roboto", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    color: `#272F4C`,
  },
  palette: {
    primary: {
      main: '#FF9D3A',
    },
    secondary: {
      main: red[500],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // padding: '8px 12px',
          // padding: '7px 14px',
          padding: '6px 12px',
          fontSize: 14,
          textTransform: 'none',
        },
        contained: {
          padding: '6px 14px',
        },
        containedPrimary: {
          color: '#ffffff',

          '&:hover': {
            backgroundColor: '#FF9D3A',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: 14,
          height: 'auto',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          height: 'auto',
          // padding: '6px 0',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          // fontSize: 14,
        },
        outlined: {
          // transform: 'translate(14px, 15px) scale(1)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // fontSize: 14,
          background: '#ffffff',
        },
        input: {
          // padding: '14px 14px',
          // height: 'auto',
        },
        multiline: {
          // padding: '16px 14px',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        // popup: {
        //   zIndex: 9999,
        // },
        input: {
          // padding: '6px 6px !important',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontSize: 15,
          fontWeight: 500,
        },
        subheader: {
          fontSize: 14,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '28px 24px 18px 24px',
          '&:last-child': {
            paddingBottom: 18,
          },
          '& .MuiTable-root': {
            margin: '-28px -24px -18px -24px',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: '6px 16px',
          textTransform: 'none',
          fontWeight: 400,
          minWidth: 0,

          '@media (min-width: 600px)': {
            fontSize: 14,
            minWidth: 0,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        stickyHeader: {
          backgroundColor: '#FFFFFF',
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        ul: {
          background: '#FFFFFF',
          boxShadow: `0 5px 10px 0 rgba(0,0,0,0.10)`,
          borderRadius: `6px`,
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          minWidth: 35,
          height: 35,
          borderRadius: 0,
          fontWeight: 600,
          margin: 0,
          padding: '0 9px',
        },
        page: {
          '&:hover': {
            backgroundColor: '#FF9D3A',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 10,
          color: '#7D9AA5',
          marginTop: 11,
        },
      },
    },
    // MuiPickersToolbar: {
    //   styleOverrides: {
    //     toolbar: {
    //       color: '#ffffff'
    //     },
    //   }
    // },
    // MuiPickersToolbarText: {
    //   styleOverrides: {
    //     toolbarTxt: {
    //       color: '#ffffff'
    //     }
    //   }
    // }
  },

  // props: {
  //   MuiTable: {
  //     className: 'Table',
  //   },
  // },
});

export default theme;
