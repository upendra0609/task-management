import "./App.css";
import { ThemeProvider } from "@emotion/react";
import darkTheme from "./theme/darkTheme";
import Navbar from "./page/navbar/Navbar";
import Home from "./page/Home";
import Auth from "./page/auth/Auth";
import { useState } from "react";

function App() {
  const { user, setUser } = useState(true);

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Home />
      {/* {user ? (
        <div>
          <Navbar />
          <Home />
        </div>
      ) : (
        <Auth />
      )} */}
    </ThemeProvider>
  );
}

export default App;
