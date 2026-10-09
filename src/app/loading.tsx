import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading} role="status">
      <span className={styles.visuallyHidden}>Loading page</span>
      <div className={styles.content} aria-hidden="true">
        <span className={styles.eyebrow} />
        <span className={styles.title} />
        <span className={styles.titleShort} />
        <span className={styles.description} />
        <span className={styles.descriptionShort} />
        <div className={styles.cards}>
          <span className={styles.card} />
          <span className={styles.card} />
          <span className={styles.card} />
        </div>
      </div>
    </div>
  );
}
