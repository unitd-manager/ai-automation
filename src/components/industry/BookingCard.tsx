import { Check } from "lucide-react";
import type { DemoBooking } from "@/data/industries";
import styles from "./BookingCard.module.css";

const steps = ["Booked", "Confirmed", "In Progress", "Complete"];
const activeStep = 1; // "Confirmed"

export default function BookingCard({ booking }: { booking: DemoBooking }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        <span className={styles.liveDot} aria-hidden />
        <span className={styles.cardLabel}>Live booking</span>
      </div>

      <ol className={styles.stepper} aria-label="Booking status">
        {steps.map((step, i) => (
          <li key={step} className={i <= activeStep ? styles.stepDone : styles.stepPending}>
            <span className={styles.stepDot}>{i < activeStep ? <Check size={11} strokeWidth={3} /> : null}</span>
            <span className={styles.stepLabel}>{step}</span>
          </li>
        ))}
      </ol>

      <dl className={styles.details}>
        <div>
          <dt>Customer</dt>
          <dd>{booking.customer}</dd>
        </div>
        <div>
          <dt>Job</dt>
          <dd>{booking.job}</dd>
        </div>
        <div>
          <dt>Priority</dt>
          <dd className={styles.priority}>{booking.priority}</dd>
        </div>
        <div>
          <dt>Scheduled</dt>
          <dd>{booking.scheduled}</dd>
        </div>
        <div>
          <dt>{booking.assigneeLabel}</dt>
          <dd>{booking.assignee}</dd>
        </div>
      </dl>

      <div className={styles.statRow}>
        {booking.stats.map((s) => (
          <span key={s} className={styles.stat}>{s}</span>
        ))}
      </div>
    </div>
  );
}
