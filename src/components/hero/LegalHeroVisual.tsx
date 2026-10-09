import styles from "./LegalHeroVisual.module.css";

const FACES = ["front", "back", "right", "left", "top", "bottom"] as const;

export default function LegalHeroVisual() {
  return (
    <div className={styles.scene} aria-hidden>
      <div className={styles.aura} />
      <span className={styles.floor} />

      <div className={styles.cube}>
        <span className={styles.core} />
        {FACES.map((face, index) => (
          <div key={face} className={`${styles.face} ${styles[face]}`}>
            <svg className={styles.check} viewBox="0 0 64 64" fill="none">
              <path
                className={styles.checkPath}
                d="M16 33l11 11 22-24"
                style={{ animationDelay: `${index * 0.25}s` }}
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}