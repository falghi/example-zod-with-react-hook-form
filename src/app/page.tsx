"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Homepage</h1>

          <div style={{ textAlign: "center" }}>
            <div style={{ marginTop: "1rem" }}>
              <Link
                href="/notes"
                className={styles.submitButton}
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                Go to Notes Page
              </Link>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <Link
                href="/register"
                className={styles.submitButton}
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                Go to Register Page
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
