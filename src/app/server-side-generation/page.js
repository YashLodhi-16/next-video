import Link from "next/link";
import styles from "../page.module.css";

export const getData = async () => {
  const url = "https://dummyjson.com/users";
  const res = await fetch(url);
  return await res.json();
};

const ServerSideGeneration = async () => {
  const { users } = await getData();
  return (
    <main className={styles.main}>
      <h1 className={styles["heading-one"]}>Posts List</h1>
      {users &&
        users.map((value, index) => {
          return (
            <Link key={index} href={`/server-side-generation/${value.id}`}>
              <h2 className={styles["heading-two"]}>
                Name: {value.firstName} {value.lastName}
              </h2>
            </Link>
          );
        })}
    </main>
  );
};

export default ServerSideGeneration;
