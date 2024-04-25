import React from "react";
import styles from "../page.module.css";
const fetchData = async () => {
  const url = "/api/userdata";
  const res = await fetch(process.env.DEVELOPMENT_URL + url);
  return await res.json();
};
const TestApi = async () => {
  const data = await fetchData();
  console.log("data");
  return (
    <main className={styles.main}>
      <h1 className={styles["heading-one"]}>
        This Page is Created To Test Apis.
      </h1>
    </main>
  );
};

export default TestApi;
