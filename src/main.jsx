import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // Import your theme
import App from "./App.jsx";
import "@fontsource/outfit";
import "@fontsource/outfit/700.css"; 
import "@fontsource/outfit/900.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
