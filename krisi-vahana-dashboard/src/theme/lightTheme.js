import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#2F6D3A" },
    secondary: { main: "#D9B44A" },
    background: { default: "#F8F8F5" },
    text: { primary: "#1E4728" }
  }
});

export default lightTheme;
