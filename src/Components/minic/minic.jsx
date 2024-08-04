import React from "react";
import styles from "./minic.module.css";
import mini from "../../Images/mini.svg";
import { useTranslation } from "react-i18next";

function minic() {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.nzm}>
      <div className={styles.minincard}>
        <img src={mini} alt="" />
        <h2>{t("minititle")}</h2>
        <p>{t('minidesc')}</p>
      </div>
    </div>
  );
}

export default minic;
