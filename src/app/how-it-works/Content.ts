// Common (industry-neutral) content, generalised from the shared points in the
// Home Services, Healthcare and Automotive workflow images.

export interface Agent { name: string; sub: string; items: string[] }

export const tagline = "Respond when the customer needs you most.";

export const pains = [
  "Missed calls and new enquiries",
  "After-hours service requests",
  "Urgent requests left unanswered",
  "Slow quote and estimate follow-up",
  "Scheduling gaps and no-shows",
  "Customer contacts a competitor",
];

export const agents: [Agent, Agent] = [
  {
    name: "AI Response & Booking Agent",
    sub: "24/7 Voice & SMS Assistant",
    items: [
      "Handles incoming calls and messages instantly",
      "Identifies urgent vs. non-urgent requests",
      "Qualifies leads and captures customer details",
      "Books appointments automatically",
      "Routes to the right team member",
    ],
  },
  {
    name: "AI Follow-Up & Retention Agent",
    sub: "Automates Estimates, Follow-Ups & Customer Communication",
    items: [
      "Follows up on quotes and unbooked enquiries",
      "Sends reminders and confirmations",
      "Re-engages past customers",
      "Requests reviews and feedback",
      "Integrates with CRM and scheduling tools",
    ],
  },
];

export const opportunities = [
  "24/7 call answering and intake",
  "Lead capture and qualification",
  "Appointment booking and scheduling",
  "Urgent request routing",
  "Quote and estimate follow-up",
  "SMS/email reminders and updates",
  "Review and feedback collection",
  "Reactivation of past customers",
];

export const impact = [
  "Capture more enquiries, even after hours",
  "Increase bookings and conversion rate",
  "Reduce no-shows and scheduling gaps",
  "Improve customer experience and reviews",
  "Lower administrative workload",
  "Grow revenue and repeat business",
];

export const flow = [
  "Customer calls / texts (24/7)",
  "AI answers & identifies need",
  "Qualifies lead & captures details",
  "Books appointment or routes to the right team member",
  "Sends confirmations & follow-ups",
  "Tracks, reminds & re-engages",
];

export const outcomes: [string, string][] = [
  ["More bookings", "Capture every lead, even after hours."],
  ["Faster response", "Customers get instant answers."],
  ["Better customer experience", "Automated booking, updates and reminders."],
  ["Higher revenue", "More jobs, repeat customers and reviews."],
];