import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: "Practical guidance on AI automation, lead response, and operations for growing businesses.",
  path: "/resources/blog",
});

const posts = [
  {
    tag: "Lead Response",
    title: "Why Response Time Matters More Than Ad Spend",
    excerpt: "A faster response often outperforms a bigger marketing budget. Here's the operational reason why.",
  },
  {
    tag: "Operations",
    title: "What 'Peak-Emergency AI' Actually Means",
    excerpt: "The highest-value automation opportunities cluster around a few specific moments. Here's how to find yours.",
  },
  {
    tag: "CRM",
    title: "The Real Cost of a Disconnected CRM",
    excerpt: "Scattered customer data doesn't just create friction — it quietly costs revenue every month.",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <h1 className={styles.heroTitle}>Resources for Operators.</h1>
          <p className={styles.heroCopy}>
            Practical thinking on automation, operations, and where AI actually moves the needle for service
            businesses.
          </p>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <div className={styles.grid}>
            {posts.map((post) => (
              <article key={post.title} className={styles.card}>
                <span className={styles.tag}>{post.tag}</span>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer a Conversation to an Article?"
        description="Talk through your specific process with us directly — no article required."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
