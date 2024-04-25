import Box from "@/components/Box";
import styles from "../page.module.css";

const FirstRoute = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles["heading-one"]}>This is First Route.</h1>
      <Box />
    </main>
  );
};

export default FirstRoute;
