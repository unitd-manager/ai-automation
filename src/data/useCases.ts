export interface UseCaseSolution {
  title: string;
  description: string;
  points: string[];
  linkLabel: string;
}

export interface UseCasePage {
  slug: string;
  name: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  targetBusinesses: string[];
  painPoints: { title: string; description: string }[];
  solutions: UseCaseSolution[];
  opportunities: string[];
  workflow: string[];
  impacts: { value: string; label: string; description: string }[];
  integrations: string[];
  ctaTitle: string;
  ctaDescription: string;
}

export const useCases: UseCasePage[] = [
  {
    slug: "home-services",
    name: "Home Services",
    eyebrow: "AI automation for local service businesses",
    heroTitle: "Capture every lead, even when the phone keeps ringing.",
    heroDescription: "Respond to customers 24/7, automate bookings and follow-ups, and turn more enquiries into booked jobs across plumbing, HVAC, electrical, roofing, and more.",
    targetBusinesses: ["Plumbing", "HVAC", "Electrical", "Roofing", "Drain cleaning", "Water heater repair", "Appliance repair", "Garage doors", "Pest control", "Landscaping"],
    painPoints: [
      { title: "Missed calls", description: "Customers call when they need help. If nobody answers, they quickly contact another provider." },
      { title: "After-hours requests", description: "Emergency service requests arrive outside normal business hours, when your team is offline." },
      { title: "Emergency jobs", description: "Burst pipes, HVAC failures, and electrical problems need a fast, organized response." },
      { title: "Slow quote follow-up", description: "Leads go cold when estimates and callbacks are delayed or forgotten." },
      { title: "Scheduling gaps", description: "Technician availability changes while potential customers are still waiting for an answer." },
      { title: "Lost customers", description: "A slow response creates an easy opening for a competitor to win the job." },
    ],
    solutions: [
      { title: "AI Emergency Response Agent", description: "A 24/7 voice and SMS assistant for urgent service requests.", points: ["Answers calls and messages instantly", "Identifies the issue and captures customer details", "Qualifies leads and books appointments", "Routes urgent requests to the right technician"], linkLabel: "Explore emergency response" },
      { title: "AI Follow-Up & Quote Agent", description: "Automated estimate reminders and customer communication that keep the pipeline moving.", points: ["Follows up on quote requests automatically", "Sends estimate reminders and updates", "Re-engages old leads and previous customers", "Connects with CRM and scheduling tools"], linkLabel: "Explore quote follow-up" },
    ],
    opportunities: ["24/7 call answering", "Lead capture and qualification", "Appointment booking", "Technician routing and dispatch", "Quote follow-up", "SMS and email updates", "Review collection", "Customer reactivation"],
    workflow: ["Customer calls or messages", "AI responds instantly", "Lead is qualified", "Appointment is booked or routed", "Confirmation and reminders", "Follow-up and re-engagement"],
    impacts: [{ value: "More jobs", label: "Capture after-hours enquiries", description: "Every inbound opportunity gets a response." }, { value: "Faster", label: "Response time", description: "Customers get an answer while intent is high." }, { value: "Less admin", label: "Manual workload", description: "Your team spends more time on service and less on repetitive updates." }, { value: "More repeat", label: "Customer revenue", description: "Follow-up and reactivation bring past customers back." }],
    integrations: ["CRM", "Phone and SMS", "Email", "Calendar", "Scheduling system", "Webhooks and APIs"],
    ctaTitle: "Find out what your service business can automate.",
    ctaDescription: "We will map your calls, bookings, and follow-up process to find the fastest path to more booked work.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    eyebrow: "Administrative automation for healthcare practices",
    heroTitle: "Turn patient enquiries into scheduled appointments.",
    heroDescription: "Respond promptly, fill open slots, and automate reminders and reactivation for dental, med spa, dermatology, therapy, and other independent practices.",
    targetBusinesses: ["Dental clinics", "Medical practices", "Med spas", "Dermatology", "Cosmetic dentistry", "Orthodontics", "Physical therapy", "Chiropractic", "Optometry", "Audiology"],
    painPoints: [
      { title: "Missed new-patient enquiries", description: "High-intent patients often call when the front desk is busy or closed." },
      { title: "Unanswered consultations", description: "A delayed response can send a prospective patient to another practice." },
      { title: "Last-minute cancellations", description: "Open slots are difficult to refill without an immediate waitlist workflow." },
      { title: "Empty appointment slots", description: "Calendar gaps reduce revenue even when demand exists." },
      { title: "Patients who do not book", description: "Consultation enquiries need consistent, helpful follow-up after the first conversation." },
      { title: "Inactive patients", description: "Recall and reactivation opportunities disappear without timely reminders." },
    ],
    solutions: [
      { title: "AI Patient Rescue Agent", description: "A non-clinical enquiry and appointment assistant for the front desk.", points: ["Handles calls and messages", "Responds to patient enquiries promptly", "Captures details and appointment preferences", "Books or routes requests to staff", "Sends confirmations and reminders"], linkLabel: "Explore patient response" },
      { title: "AI Follow-Up & Retention Agent", description: "Automated communication for unbooked enquiries, recalls, and patient reactivation.", points: ["Follows up with unbooked enquiries", "Supports waitlist and cancellation recovery", "Follows up after consultations", "Requests reviews and feedback", "Connects with practice management tools"], linkLabel: "Explore patient retention" },
    ],
    opportunities: ["Patient enquiry response", "Appointment booking", "Cancellation recovery", "Waitlist notifications", "Appointment reminders", "Consultation follow-up", "Patient reactivation", "Practice management integration"],
    workflow: ["Patient calls or messages", "AI responds promptly", "Needs and details are captured", "Request is booked or routed", "Confirmation and reminders", "Follow-up and reactivation"],
    impacts: [{ value: "More bookings", label: "Capture enquiries around the clock", description: "Patients get a clear next step without waiting." }, { value: "Fewer gaps", label: "Fill open appointment slots", description: "Cancellation and waitlist workflows act quickly." }, { value: "Better", label: "Patient experience", description: "Timely updates make the administrative journey easier." }, { value: "Higher", label: "Patient retention", description: "Recall and reactivation sequences encourage return visits." }],
    integrations: ["Practice management system", "CRM", "Phone and SMS", "Email", "Calendar", "Webhooks and APIs"],
    ctaTitle: "Build a calmer, more responsive front desk.",
    ctaDescription: "We will identify the administrative workflows that can improve bookings without replacing clinical judgment or care.",
  },
  {
    slug: "automotive",
    name: "Automotive Services",
    eyebrow: "AI automation for independent automotive businesses",
    heroTitle: "Turn missed calls into more repair bookings.",
    heroDescription: "Automate intake, booking, estimate follow-up, and customer updates for independent repair shops, mobile mechanics, towing teams, and service centers.",
    targetBusinesses: ["Auto repair shops", "Tire and wheel shops", "Body and collision repair", "Oil change shops", "Brake and muffler shops", "Transmission repair", "Glass repair", "Car detailing", "Towing operators", "Mobile mechanics"],
    painPoints: [
      { title: "Missed calls", description: "New customers and existing drivers often call while technicians are already busy." },
      { title: "Urgent breakdowns", description: "A stranded customer needs quick triage and a clear next step." },
      { title: "Slow estimate approval", description: "Repair work is delayed when approval requests and follow-ups sit unanswered." },
      { title: "Booking friction", description: "Back-and-forth scheduling costs time for both the shop and the customer." },
      { title: "No-shows", description: "Open bays and technician time are lost when reminders and rescheduling are manual." },
      { title: "Customers choose another shop", description: "A slow answer can lose a repair job before the team ever speaks to the driver." },
    ],
    solutions: [
      { title: "AI Call & Booking Agent", description: "A 24/7 intake assistant for calls, messages, service details, and appointments.", points: ["Answers calls and SMS", "Captures vehicle and service details", "Qualifies urgency without mechanical diagnosis", "Books service appointments", "Routes roadside requests to the right provider"], linkLabel: "Explore call and booking" },
      { title: "AI Follow-Up & Service Agent", description: "Automated estimate, reminder, status, and maintenance communication.", points: ["Follows up on estimates and approvals", "Sends repair-status updates", "Manages reminders and rescheduling", "Reactivates maintenance customers", "Connects with CRM and calendar tools"], linkLabel: "Explore service follow-up" },
    ],
    opportunities: ["24/7 call answering", "Service intake and routing", "Appointment booking", "Estimate follow-up", "Repair-status updates", "Reminders and rescheduling", "Maintenance reactivation", "Review collection"],
    workflow: ["Customer calls or texts", "AI captures vehicle issue", "Service type and urgency are qualified", "Appointment or tow is routed", "Confirmation and updates", "Follow-up and review request"],
    impacts: [{ value: "More bookings", label: "Capture repair and towing jobs", description: "Every customer gets a useful response while intent is high." }, { value: "Faster", label: "Intake and booking", description: "Less phone tag means more completed appointments." }, { value: "Fewer", label: "Missed calls and no-shows", description: "Automated reminders make the schedule more reliable." }, { value: "More repeat", label: "Maintenance revenue", description: "Reactivation keeps customers connected to your shop." }],
    integrations: ["CRM", "Phone and SMS", "Email", "Calendar", "Shop management system", "Webhooks and APIs"],
    ctaTitle: "Put more qualified repair work on the calendar.",
    ctaDescription: "We will map your intake, booking, and estimate process to find the automation with the clearest return.",
  },
];

export const getUseCase = (slug: string) => useCases.find((useCase) => useCase.slug === slug);