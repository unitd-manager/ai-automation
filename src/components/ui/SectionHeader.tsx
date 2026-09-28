import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  index?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Set true when the header sits on a dark background, so title/description stay legible. */
  dark?: boolean;
}

export default function SectionHeader({ index, title, description, align = "left", dark = false }: SectionHeaderProps) {
  return (
    <div className={`${styles.header} ${align === "center" ? styles.center : ""} ${dark ? styles.dark : ""}`}>
      {index && <span className={`${styles.index} mono`}>{index}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
