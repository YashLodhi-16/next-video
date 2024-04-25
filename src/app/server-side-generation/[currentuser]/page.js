import { getData } from "../page";
import styles from "../../page.module.css";

const { users } = await getData();

const ServerSideGeneration = async ({ params }) => {
  return (
    <main className={styles.main}>
      <h1 className={styles["heading-one"]}> Current User</h1>
      {users &&
        users
          .filter((value) => {
            return value.id === Number.parseInt(params.currentuser);
          })
          .map((value, index) => {
            return (
              <div
                key={index}
                className={styles["ul"]}
                style={{ alignItems: "start" }}
              >
                <h2 className={styles["heading-two"]}>
                  Name: {value.firstName} {value.lastName}
                </h2>
                <p className={styles["heading-three"]}>Email: {value.email}</p>
                <p className={styles["heading-four"]}>Phone: {value.phone}</p>
              </div>
            );
          })}
    </main>
  );
};

export default ServerSideGeneration;
export async function generateStaticParams() {
  return users.map((id) => ({
    currentuser: id.id.toString(),
  }));
}
