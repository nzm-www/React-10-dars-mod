import React from "react";
import styles from "./main.module.css";
import bratan from "../../Images/bartan.svg";
import sabzi from "../../Images/sabzi.svg";
import { useTranslation } from "react-i18next";


import "../../App.css";
function main() {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.allbox}>
        <div>
          <h1>{t("firstext")}</h1>
          <p className={styles.mainp}>
          {t ('desc')}
          </p>
          <div className={styles.sorch}>
            <div className={styles.input}>
              <input type="text" placeholder="Search here" />
            </div>
            <div className={styles.lup}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div className={styles.chekbox}>
            <div className={styles.first}>
              <label className={styles.chek}>
                <input type="checkbox" name="" id="" />
                <p>FreshVegetables</p>
              </label>
              <label className={styles.chek}>
                <input type="checkbox" name="" id="" />
                <p>CashonDelivery</p>
              </label>
            </div>
            <div className={styles.first}>
              <label className={styles.chek}>
                <input type="checkbox" name="" id="" />
                <p>100%Guarantee</p>
              </label>
              <label className={styles.chek}>
                <input type="checkbox" name="" id="" />
                <p>FastDelivery</p>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.ongtaraf}>
          <div>
            <img src={bratan} alt="" />
          </div>
          <div>
            <div className={styles.minibox}>
              <img src={sabzi} alt="" />
              <h2>Fresh Spinach</h2>
              <p>$12.00</p>
            </div>
            <div className={styles.minibox}>
              <img src={sabzi} alt="" />
              <h2>Fresh Spinach</h2>
              <p>$12.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default main;
