import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 900,
      lg: 1200,
      xl: 1536,
    }
  },
  typography: {
    h1: {
      fontWeight: '700',
      fontSize: '53px',
      lineHeight: '0%',
      color: '#000',
    },
    h2:{
      fontWeight: '700',
      fontSize: '37px',
      lineHeight: '0%',
      color: '#1a0b5b',
    },
    h4:{
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '175%',
      color: '#8a8fb9',
    },
    body1: {
      fontWeight: '600',
      fontSize: '16px',
      color: '#f1f1f1'
    },
    body2: {
      fontWeight: '500',
      fontSize: '16px',
      color: '#0d0e43'
    },
    h3:{
      fontWeight:'700',
      fontSize:'16px',
      color:'#fb2e86'
    }
  },
});
