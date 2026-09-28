"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { FAQItem } from "@/data/pricing";
import styles from "./FAQAccordion.module.css";

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.wrap}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={styles.item} key={item.question}>
            <button
              className={styles.question}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
            >
              <span>{item.question}</span>
              <Plus size={18} className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`} aria-hidden />
            </button>
            <div id={`faq-panel-${i}`} className={styles.answerWrap} style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
              <div className={styles.answerInner}>
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
