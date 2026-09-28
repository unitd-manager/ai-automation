import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: "180px", textAlign: "center" }}>
      <div className="container">
        <p className="mono" style={{ color: "var(--color-accent)", marginBottom: "1rem" }}>404</p>
        <h1 style={{ fontSize: "var(--fs-h1)", marginBottom: "1rem" }}>Page not found.</h1>
        <p style={{ color: "var(--color-muted)", marginBottom: "2rem" }}>
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Button href="/">Back to Home</Button>
          <Link href="/contact" style={{ alignSelf: "center", fontSize: "0.9rem", color: "var(--color-primary)" }}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
