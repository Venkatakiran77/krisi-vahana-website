import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#58A953" },
    secondary: { main: "#D9B44A" },
    background: { default: "#1A1F1A" },
    text: { primary: "#FFFFFF" }
  }
});

export default darkTheme;
