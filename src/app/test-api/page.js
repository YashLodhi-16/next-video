import React from "react";
import styles from "../page.module.css";
const base_url = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
const fetchData = async () => {
  const url = `${base_url}/api/userdata`;
  const res = await fetch(url);
  return await res.json();
};
const TestApi = async () => {
  if (!base_url) {
    return null;
  }
  const data = await fetchData();
  return (
    <main className={styles.main} style={{ alignItems: "start" }}>
      <h1 className={styles["heading-one"]}>
        This Page is Created To Test Apis.
      </h1>
      {data &&
        data.result.map((value, index) => {
          return (
            <div key={index}>
              <h2 className={styles["heading-two"]}>Name: {value.name}</h2>
              <p className={styles["common-text"]}>
                Age: {value.age}, Class: {value.class}, School: {value.school}
              </p>
            </div>
          );
        })}
    </main>
  );
};

export default TestApi;
