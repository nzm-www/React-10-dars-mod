import React, { useContext } from "react";
import styles from "./header.module.css";
import { ThemeContext } from "../../App";
import logo from "../../Images/logo.svg";
import { FaShopify } from "react-icons/fa6";

function Header() {
  const theme = useContext(ThemeContext);
  console.log(theme);

  function handleChangeTheme(event) {
    theme.setTheme(event.target.value);
    localStorage.setItem("theme", event.target.value);

    if (event.target.value == "light") {
      document.querySelector("body").style.backgroundColor = "white ";
      document.querySelector("body").style.color = "black ";
    } else {
      document.querySelector("body").style.backgroundColor = "black ";
      document.querySelector("body").style.color = "white ";
    }
  }

  return (
    <>
      <div className={styles.header}>
        <div>
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul className={styles.navitms}>
            <li className={styles.navitms}>
              <a href="">Home</a>
            </li>
            <li className={styles.navitms}>
              <a href="">Categories</a>
            </li>
            <li className={styles.navitms}>
              <a href="">Sales</a>
            </li>
            <li className={styles.navitms}>
              <a href="">FAQ</a>
            </li>
            <li className={styles.navitms}>
              <a href="">About</a>
            </li>
            <li className={styles.navitms}>
              <a href="">Contact</a>
            </li>
            <div className={styles.mode}>
              <b className={styles.shop}>
                <FaShopify />
              </b>
              <select
                className={styles.select}
                value={theme.theme}
                onChange={handleChangeTheme}
              >
                <option value="dark">L I G H T</option>
                <option value="light">D A R K </option>
              </select>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
