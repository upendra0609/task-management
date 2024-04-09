import "./App.css";
import { ThemeProvider } from "@emotion/react";
import darkTheme from "./theme/darkTheme";
import Navbar from "./page/navbar/Navbar";
import Home from "./page/Home";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
