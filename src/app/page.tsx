"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import styles from "./page.module.css";
import { formSchema, type FormData } from "./schema";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    // Save email and name to localStorage (ignore password)
    const userData = {
      email: data.email,
      name: data.name,
      registeredAt: new Date().toISOString(),
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Registration successful:", userData);
    alert(
      `Registration successful!\nEmail: ${userData.email}\nName: ${userData.name}\n\nData saved to localStorage!`
    );
    reset();
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 style={{ paddingBottom: "1rem" }}>User Registration</h1>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                className={errors.email ? styles.error : ""}
              />
              {errors.email && (
                <span className={styles.errorMessage}>
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                {...register("name")}
                placeholder="Enter your name"
                className={errors.name ? styles.error : ""}
              />
              {errors.name && (
                <span className={styles.errorMessage}>
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                {...register("password")}
                placeholder="Enter your password"
                className={errors.password ? styles.error : ""}
              />
              {errors.password && (
                <span className={styles.errorMessage}>
                  {errors.password.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>

          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <p style={{ fontSize: "0.9rem", color: "#666" }}>
              Note: Email and name will be saved to localStorage. Password is
              not stored.
            </p>
            <div style={{ marginTop: "1rem" }}>
              <Link
                href="/notes"
                className={styles.submitButton}
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                Go to Notes Page
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
