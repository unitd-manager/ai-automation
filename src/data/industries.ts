export interface IndustryFeature {
  title: string;
  description: string;
}

export interface DemoBooking {
  customer: string;
  job: string;
  priority: string;
  scheduled: string;
  assigneeLabel: string;
  assignee: string;
  stats: [string, string, string];
}

export interface PeakMoment {
  text: string;
  /** The workflow stage (must match a string in this industry's `workflow` array) that handles this moment. */
  step: string;
}

export interface Industry {
  slug: string;
  name: string;
  segments: string[];
  hero: string;
  opportunity: string;
  connectsTo: string;
  painPoints: string[];
  peakMoments: PeakMoment[];
  workflow: string[];
  /** "Without us" side of the challenge comparison, paired 1:1 with resolutions. */
  challenges: string[];
  /** "With us" side of the challenge comparison, paired 1:1 with challenges. */
  resolutions: string[];
  /** "Built for [Industry]" feature grid. */
  features: IndustryFeature[];
  /** Live booking-card mockup shown in the hero. */
  demoBooking: DemoBooking;
}

export const industries: Industry[] = [
  {
    slug: "home-services",
    name: "Home Services",
    segments: ["HVAC", "Plumbing", "Roofing", "Electrical"],
    hero: "Respond Faster When Customers Need You Most.",
    opportunity: "Automating call response and dispatch during breakdowns and emergencies.",
    connectsTo: "Connects to the scheduling and CRM tools you already run.",
    painPoints: [
      "Missed calls during peak service hours",
      "After-hours emergency inquiries",
      "Slow response to online estimate requests",
      "Scheduling conflicts and double-bookings",
      "No-shows on booked appointments",
      "Estimates that never get a follow-up",
    ],
    peakMoments: [
      { text: "An HVAC system fails on the hottest day of the year", step: "AI voice agent" },
      { text: "A pipe bursts and water is actively damaging the home", step: "Qualification" },
      { text: "A storm causes visible roof damage", step: "Appointment" },
      { text: "Power goes out and the breaker panel needs inspection", step: "Technician dispatched" },
    ],
    workflow: ["Customer call", "AI voice agent", "Qualification", "Service type & location", "CRM", "Appointment", "Technician dispatched", "Follow-up"],
    challenges: [
      "Missing calls while you're on a ladder or under a sink",
      "Losing emergency jobs because you couldn't call back fast enough",
      "Spending evenings returning calls instead of being with family",
      "No system for following up on estimates that went cold",
      "Emergency calls after hours going straight to voicemail",
    ],
    resolutions: [
      "Every call answered professionally, even mid-job",
      "Emergency leads qualified and booked before a competitor responds",
      "Evenings free, the AI handles all communication 24/7",
      "Automated follow-ups on open estimates and pending quotes",
      "Emergency calls triaged and routed to the on-call technician",
    ],
    features: [
      { title: "Estimate Booking", description: "Callers and texters book estimates against your real availability. It collects service type, property details, and photos by text, then sends confirmation automatically." },
      { title: "Lead Qualification", description: "Asks the right questions upfront: service area, job scope, timeline. Qualified leads get booked immediately. Out-of-area inquiries get a polite redirect." },
      { title: "Job Dispatching", description: "Emergency and same-day requests get routed to the right technician based on availability, location, and specialty." },
      { title: "Quote Follow-Ups", description: "Sent an estimate but never heard back? It follows up automatically by text and email at intervals you set, until the customer responds." },
      { title: "Service Area & Scheduling", description: "Knows your service area, trades, and calendar. It answers questions about what you do and where you work, so only qualified leads reach your schedule." },
      { title: "Review & Reactivation", description: "After every completed job, it sends review requests and re-engages past customers who haven't booked in a while." },
    ],
    demoBooking: {
      customer: "David W.",
      job: "AC Repair",
      priority: "Urgent",
      scheduled: "Tomorrow, 9:00 AM",
      assigneeLabel: "Technician",
      assignee: "Mike T.",
      stats: ["38 calls answered", "16 jobs booked", "6 after hours"],
    },
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    segments: ["Dental", "Med Spa", "Dermatology"],
    hero: "Turn Patient Inquiries Into Scheduled Appointments.",
    opportunity: "Automating new-patient response and appointment scheduling.",
    connectsTo: "Connects to the practice management tools you already run.",
    painPoints: [
      "Missed calls during clinical hours",
      "New patient inquiries left unanswered",
      "Gaps in the appointment calendar",
      "No-shows with no rebooking sequence",
      "Manual follow-up after treatment",
      "Inactive patients who never get reactivated",
    ],
    peakMoments: [
      { text: "A patient is in pain and needs an urgent appointment", step: "AI response" },
      { text: "A cosmetic consultation inquiry arrives after hours", step: "Qualification" },
      { text: "A patient cancels last-minute and the slot needs refilling", step: "Appointment" },
      { text: "A patient is due for a recall and hasn't rebooked", step: "Reactivation" },
    ],
    workflow: ["Patient inquiry", "AI response", "Qualification", "Appointment", "Reminder", "Visit", "Follow-up", "Reactivation"],
    challenges: [
      "Missing new-patient calls during clinical hours",
      "Losing consultation inquiries that arrive after hours",
      "No system for filling a last-minute cancellation",
      "Patients who don't book after a consultation, with no follow-up",
      "Inactive patients who never get reactivated",
    ],
    resolutions: [
      "Every inquiry answered promptly, even during clinical hours",
      "After-hours consultation requests captured and booked",
      "Cancellations trigger waitlist notifications automatically",
      "Automated consultation follow-up until the patient books",
      "Inactive patients re-engaged with reactivation campaigns",
    ],
    features: [
      { title: "Patient Inquiry Response", description: "Responds to non-clinical inquiries, captures patient details, and books or requests an appointment. Clinical questions are routed to your staff." },
      { title: "Appointment Booking", description: "Books against your real calendar and sends confirmation automatically, for new and returning patients." },
      { title: "Cancellation Recovery", description: "The moment a slot opens up, your waitlist is notified, so it doesn't sit empty." },
      { title: "Reminders & Confirmations", description: "Reduces no-shows with automated reminders and confirmations ahead of every visit." },
      { title: "Consultation Follow-Up", description: "Follows up automatically with patients who didn't book after a consultation." },
      { title: "Patient Reactivation", description: "Re-engages patients who are overdue for a recall or haven't returned in a while." },
    ],
    demoBooking: {
      customer: "Sarah M.",
      job: "New Patient Cleaning",
      priority: "Routine",
      scheduled: "Thu, 2:30 PM",
      assigneeLabel: "Provider",
      assignee: "Dr. Patel",
      stats: ["27 inquiries answered", "12 appointments booked", "4 after hours"],
    },
  },
  {
    slug: "automotive-services",
    name: "Automotive Services",
    segments: ["Auto Repair", "Auto Body & Collision", "Tire & Wheel", "Towing & Roadside"],
    hero: "Keep Every Bay Booked and Every Customer Coming Back.",
    opportunity: "Automating repair inquiries, service booking, and estimate follow-up.",
    connectsTo: "Connects to the scheduling and shop management tools you already run.",
    painPoints: [
      "Missed repair inquiries while the shop is busy",
      "After-hours breakdown and tow requests",
      "Repair estimates waiting days for approval",
      "No-shows and last-minute cancellations leaving bays idle",
      "Customer calls a competing shop",
      "Maintenance reminders that never go out",
    ],
    peakMoments: [
      { text: "A customer needs an urgent repair but can't reach the shop", step: "AI answers" },
      { text: "A vehicle can't be driven and the owner needs a tow tonight", step: "Urgency qualified" },
      { text: "A vehicle is waiting on repair approval while the customer is unreachable", step: "Estimate & approval" },
      { text: "A customer reaches a service interval and receives no reminder", step: "Maintenance reminder" },
    ],
    workflow: ["Customer call or text", "AI answers", "Vehicle details captured", "Urgency qualified", "Appointment booked", "Estimate & approval", "Repair updates", "Maintenance reminder"],
    challenges: [
      "Missing repair inquiries while you're mid-job in the bay",
      "Losing urgent repair jobs to the shop that answers first",
      "Estimates sitting for days with no approval follow-up",
      "No-shows and cancellations leaving bays idle",
      "Maintenance reminders that never go out, losing repeat business",
    ],
    resolutions: [
      "Every call and text answered, even when you're under the hood",
      "Urgent repairs and tow requests captured and booked instantly",
      "Automated approval reminders on every open estimate",
      "Automated confirmations and rescheduling keep bays full",
      "Automated maintenance reminders bring customers back",
    ],
    features: [
      { title: "Service Response", description: "Answers calls and texts 24/7, captures the vehicle's make, model, and issue, and books the appointment." },
      { title: "Urgency Qualification", description: "Sorts urgent repairs and tow requests from routine service, so nothing that matters waits in a queue." },
      { title: "Appointment Booking", description: "Books against your real bay availability and sends confirmation automatically." },
      { title: "Estimate Follow-Ups", description: "Delivers the estimate and follows up automatically by text and email until the customer approves." },
      { title: "Repair Status Updates", description: "Keeps customers informed by text or email while their vehicle is in the shop." },
      { title: "Maintenance Reactivation", description: "Sends maintenance reminders and re-engages customers who haven't been back in a while." },
    ],
    demoBooking: {
      customer: "James R.",
      job: "Brake Inspection",
      priority: "Same-day",
      scheduled: "Today, 4:00 PM",
      assigneeLabel: "Service Bay",
      assignee: "Bay 3",
      stats: ["31 calls answered", "14 services booked", "5 after hours"],
    },
  },
];
