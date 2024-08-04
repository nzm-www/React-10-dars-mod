import React, { createContext, useEffect, useState } from "react";
import "./App.css";
export const ThemeContext = createContext();
import Header from "./Components/header/Header";
import { useTranslation } from "react-i18next";
import Main from "./Components/main/main";
import Minic from "./Components/minic/minic";

function App() {
  const { t, i18n } = useTranslation();

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }

    if (localStorage.getItem("theme") == "light") {
      document.querySelector("body").style.backgroundColor = "white ";
    } else {
      document.querySelector("body").style.backgroundColor = "black ";
    }
  }, []);

  function handleLaunguage(even) {
    i18n.changeLanguage(even.target.value);
  }

  return (
    <div className="container">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <div className="til">
          <select className="select" onChange={handleLaunguage}>
            <option value="uz">UZB</option>
            <option value="ru">RUS</option>
            <option value="en">ENG</option>
          </select>
        </div>
        <Main />
        <div className="minic">
          <Minic />
          <Minic />
          <Minic />
          <Minic />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
