import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#254676",
    },
    secondary: {
      main: '#000',
    },
  },
  typography: {
    fontFamily: ['Inter'].join(','),
  },
});