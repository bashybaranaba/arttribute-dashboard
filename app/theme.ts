"use client";
import { createTheme } from "@mui/material/styles";
import { Chakra_Petch } from "next/font/google";

const chakra_petch = Chakra_Petch({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#2962ff",
    },
    secondary: {
      main: "#fff",
      contrastText: "#2962ff",
    },
    error: {
      main: "#ff1744",
    },
  },
  typography: {
    fontFamily: chakra_petch.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
