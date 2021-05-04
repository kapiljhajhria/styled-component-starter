import { ThemeProvider } from "styled-components";
import Top from "./Components/Top";
import { React, useState } from "react";

function App() {
  const mainTheme = {
    top: {
      color: "brown",
      fontSize: "2rem",
    },
    parent: {
      color: "yellow",
      fontSize: "2rem",
    },
    children: {
      color: "green",
      fontSize: "1rem",
    },
    button: {
      primary: {
        color: "yellow",
        hoverColor: "red",
      },
    },
  };

  const secondaryTheme = {
    top: {
      color: "red",
      fontSize: "4rem",
    },
    parent: {
      color: "blue",
      fontSize: "3rem",
    },
    children: {
      color: "green",
      fontSize: "1rem",
    },
    button: {
      primary: {
        color: "red",
        hoverColor: "yellow",
      },
    },
  };
  const [theme, setTheme] = useState(mainTheme);
  const themeHandler = () => {
    if (JSON.stringify(theme) === JSON.stringify(mainTheme)) {
      setTheme(secondaryTheme);
    } else {
      setTheme(mainTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <button onClick={themeHandler}>SwitchTheme</button>
      <Top />
    </ThemeProvider>
  );
}

export default App;
