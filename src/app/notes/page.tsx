"use client";

import Link from "next/link";
import styles from "../page.module.css";
import { useNotes } from "./useNotes";
import { numberWithDelimiter } from "@/utils/number";

export default function Notes() {
  const {
    items,
    totalValue,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    clearAllItems,
    deleteItem,
  } = useNotes();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 style={{ paddingBottom: "1rem" }}>Notes & Items</h1>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Item Name:</label>
              <input
                id="name"
                type="text"
                {...register("name")}
                placeholder="Enter item name"
                className={errors.name ? styles.error : ""}
              />
              {errors.name && (
                <span className={styles.errorMessage}>
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="quantity">Quantity:</label>
              <input
                id="quantity"
                type="number"
                min="1"
                step="1"
                {...register("quantity", {
                  valueAsNumber: true,
                })}
                placeholder="Enter quantity"
                className={errors.quantity ? styles.error : ""}
              />
              {errors.quantity && (
                <span className={styles.errorMessage}>
                  {errors.quantity.message}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="price">Price:</label>
              <input
                id="price"
                type="text"
                {...register("price")}
                placeholder="Enter price"
                className={errors.price ? styles.error : ""}
              />
              {errors.price && (
                <span className={styles.errorMessage}>
                  {errors.price.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? "Adding..." : "Add Item"}
            </button>
          </form>

          {/* Items List */}
          <div style={{ marginTop: "2rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <h2>Items List ({items.length} items)</h2>
              {items.length > 0 && (
                <button
                  onClick={clearAllItems}
                  style={{
                    background: "#dc3545",
                    color: "white",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                  }}
                >
                  Clear All
                </button>
              )}
            </div>

            {items.length === 0 ? (
              <p
                style={{
                  textAlign: "center",
                  color: "#666",
                  fontStyle: "italic",
                }}
              >
                No items added yet. Add your first item above!
              </p>
            ) : (
              <div>
                {items.map(item => (
                  <div
                    key={item.id}
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      padding: "1rem",
                      marginBottom: "0.5rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "white",
                    }}
                  >
                    <div style={{ marginRight: "0.5rem" }}>
                      <h3 style={{ margin: "0 0 0.5rem 0", color: "black" }}>
                        {item.name}
                      </h3>
                      <p style={{ margin: "0", color: "#666" }}>
                        Quantity: {item.quantity} | Price:{" "}
                        {numberWithDelimiter(item.price)} | Total:{" "}
                        {numberWithDelimiter(item.price * item.quantity)}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteItem(item.id)}
                      style={{
                        background: "#dc3545",
                        color: "white",
                        border: "none",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "0.8rem",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))}

                <div
                  style={{
                    borderTop: "2px solid #007bff",
                    paddingTop: "1rem",
                    marginTop: "1rem",
                    textAlign: "right",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                >
                  Total Value: {numberWithDelimiter(totalValue)}
                </div>
              </div>
            )}
          </div>

          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <Link
              href="/"
              className={styles.submitButton}
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
