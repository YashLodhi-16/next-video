import React from "react";
import styles from "../page.module.css";

const Env = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles["heading-one"]}>Env Variables.</h1>
      <h2 className={styles["heading-two"]}>
        Password: {process.env.MY_SCERET_PASSWORD}
      </h2>
    </main>
  );
};

export default Env;
