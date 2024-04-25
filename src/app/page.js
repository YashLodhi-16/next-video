import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles["heading-one"]}>This Main Page Of This App.</h1>
      <nav>
        <h2
          style={{ marginBottom: "2.5rem" }}
          className={styles["heading-two"]}
        >
          Navigate
        </h2>
        <ul className={styles.ul}>
          <li>
            <Link href="/first-route" className={styles["common-text"]}>
              First Route
            </Link>
          </li>
          <li>
            <Link href="/second-route" className={styles["common-text"]}>
              Second Route
            </Link>
          </li>
          <li>
            <Link
              href="/server-side-generation"
              className={styles["common-text"]}
            >
              Server Side Generation
            </Link>
          </li>
          <li>
            <Link href="/env" className={styles["common-text"]}>
              ENV
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
