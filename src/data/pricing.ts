export interface PricingTier {
  code: "DIY" | "DWY" | "DFY";
  name: string;
  price: string;
  priceNote: string;
  description: string;
  included: string[];
  bestFor: string;
  featured?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    code: "DIY",
    name: "AI Opportunity Diagnostic",
    price: "$500",
    priceNote: "one-time",
    description: "A clear map of where automation will return the most for your business, and in what order to build it.",
    included: [
      "Business process review",
      "Automation opportunity map",
      "AI workflow recommendations",
      "Priority opportunities ranked by impact",
      "Implementation roadmap",
    ],
    bestFor: "Teams who want a plan before committing to build.",
  },
  {
    code: "DWY",
    name: "AI Revenue & Operations System",
    price: "$1,000",
    priceNote: "starting, per workflow",
    description: "We design and build your first automated workflow end-to-end, with your team involved at every stage.",
    included: [
      "Workflow design",
      "AI automation setup",
      "CRM integration",
      "Lead response configuration",
      "Appointment workflow",
      "Follow-up automation",
      "Testing",
      "Team handover",
    ],
    bestFor: "Businesses ready to automate one core workflow well.",
    featured: true,
  },
  {
    code: "DFY",
    name: "AI Automation Infrastructure",
    price: "$10,000+",
    priceNote: "project-based",
    description: "A full automation system across your business — voice, CRM, documents, and reporting, built and maintained by us.",
    included: [
      "Full automation architecture",
      "Custom AI agents",
      "Voice automation",
      "CRM integrations",
      "Document automation",
      "Business intelligence dashboards",
      "Advanced multi-step workflows",
      "Deployment",
      "Ongoing monitoring",
      "Continuous optimization",
    ],
    bestFor: "Businesses ready to run on AI-driven infrastructure.",
  },
];

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  existingWorkflow: string;
  solution: string;
  implementation: string;
  workflow: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
  illustrative: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "regional-roofing-contractor",
    client: "Regional Roofing Contractor",
    industry: "Roofing",
    challenge:
      "Storm season drove a spike in inbound calls that the office staff couldn't keep up with, and estimate requests went days without a response.",
    existingWorkflow: "Calls to a shared office line, voicemail during peak periods, estimates tracked in spreadsheets.",
    solution: "An AI voice agent to triage every call and an automated follow-up sequence for outstanding estimates.",
    implementation: "Deployed over three weeks: voice agent trained on service area and storm-damage intake, CRM connected for handoff to estimators.",
    workflow: ["Call received", "AI voice agent", "Damage assessment questions", "CRM record created", "Estimator notified", "Follow-up sequence"],
    outcome: "Faster first response on every inbound call, with no inquiry sitting in an unanswered voicemail.",
    metrics: [
      { label: "Response time", value: "< 1 min" },
      { label: "Calls triaged", value: "100%" },
      { label: "Follow-ups sent", value: "Automated" },
    ],
    illustrative: true,
  },
  {
    slug: "multi-location-dental-group",
    client: "Multi-Location Dental Group",
    industry: "Dental",
    challenge:
      "New patient inquiries came through five different channels and were manually triaged by front-desk staff already handling in-office patients.",
    existingWorkflow: "Phone and web form inquiries manually checked and returned throughout the day.",
    solution: "AI chat and lead response unified across all channels, feeding a single scheduling workflow.",
    implementation: "AI chat deployed on the website and connected to the practice management system for real-time availability.",
    workflow: ["Patient enquiry", "AI response", "Insurance & need qualification", "Appointment offered", "Confirmation sent", "Reminder sequence"],
    outcome: "New patient inquiries are answered immediately regardless of which location or channel they come through.",
    metrics: [
      { label: "Channels unified", value: "5 → 1" },
      { label: "Response time", value: "Immediate" },
      { label: "No-show reminders", value: "Automated" },
    ],
    illustrative: true,
  },
  {
    slug: "hvac-service-company",
    client: "HVAC Service Company",
    industry: "HVAC",
    challenge:
      "After-hours emergency calls went to a shared voicemail, and technicians found out about urgent jobs the next morning.",
    existingWorkflow: "After-hours calls to voicemail, checked manually at the start of the next business day.",
    solution: "An AI voice agent that detects emergency language and routes urgent calls to the on-call technician immediately.",
    implementation: "Voice agent integrated with the on-call schedule and dispatch software; non-urgent calls booked directly into the calendar.",
    workflow: ["After-hours call", "AI voice agent", "Urgency detection", "On-call technician alerted", "Non-urgent calls booked", "CRM updated"],
    outcome: "Emergency calls reach a technician the same night instead of waiting for the next business day.",
    metrics: [
      { label: "After-hours coverage", value: "24/7" },
      { label: "Urgent call routing", value: "Immediate" },
      { label: "Missed calls", value: "0" },
    ],
    illustrative: true,
  },
  {
    slug: "general-contracting-firm",
    client: "General Contracting Firm",
    industry: "Construction",
    challenge:
      "High-value project inquiries were qualified inconsistently, and site visits were scheduled through back-and-forth phone calls.",
    existingWorkflow: "Inquiries reviewed manually each morning; site visits scheduled by phone.",
    solution: "Structured AI qualification for every inquiry, with qualified leads booked directly for a site visit.",
    implementation: "Qualification workflow built around project type, budget range, and timeline, connected to the CRM and scheduling calendar.",
    workflow: ["Project enquiry", "AI qualification", "Project details captured", "CRM record created", "Site visit booked", "Estimator notified"],
    outcome: "Every inquiry is qualified the same way, and site visits are booked without a scheduling call.",
    metrics: [
      { label: "Qualification", value: "Consistent" },
      { label: "Site visits", value: "Self-booked" },
      { label: "CRM records", value: "Automatic" },
    ],
    illustrative: true,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "How is this different from a chatbot?",
    answer:
      "A chatbot answers questions. Our systems qualify leads, update your CRM, book appointments, and hand off to your team — the conversation is one step in a larger workflow, not the end point.",
  },
  {
    question: "Will this work with the CRM and tools we already use?",
    answer:
      "In most cases, yes. We integrate with common CRMs, calendars, and industry-specific software. If you use a system we haven't connected before, we'll scope that during your audit.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "A single workflow (DWY) typically takes two to four weeks from kickoff to handover. Full infrastructure builds (DFY) are scoped individually based on the number of systems involved.",
  },
  {
    question: "Do we need technical staff to maintain this?",
    answer:
      "No. We handle setup, integration, and monitoring. Your team interacts with the system through your existing CRM and dashboards, not through code or configuration files.",
  },
  {
    question: "What happens to calls or chats the AI can't handle?",
    answer:
      "Every workflow includes escalation rules. When a request falls outside what the AI is scoped to handle, it hands off to your team with full context, rather than guessing.",
  },
  {
    question: "Is our customer data secure?",
    answer:
      "Yes. Data is encrypted in transit and at rest, and access is scoped to the systems required for your workflow. We can share our current security practices during your audit.",
  },
];
