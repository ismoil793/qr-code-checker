import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#2A55A3",
    },
    secondary: {
      main: "#3265C2",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
