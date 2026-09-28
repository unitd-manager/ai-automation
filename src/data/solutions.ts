export interface Solution {
  slug: string;
  name: string;
  category: string;
  icon: string;
  problem: string;
  solution: string;
  workflow: string[];
  capabilities: string[];
  integrations: string[];
  impact: string;
}

export const solutions: Solution[] = [
  {
    slug: "ai-lead-response",
    name: "AI Lead Response",
    category: "Lead & Customer Automation",
    icon: "Zap",
    problem:
      "Most inbound leads are contacted hours after they inquire. By then, they've already called a competitor.",
    solution:
      "Every form submission, missed call, and web inquiry gets an immediate, qualified response — before the lead goes cold.",
    workflow: ["Inquiry received", "AI response sent", "Lead qualified", "Routed to CRM", "Rep notified"],
    capabilities: [
      "Sub-minute response to every channel",
      "Qualification questions matched to your sales process",
      "Automatic routing by service type or territory",
      "Full conversation log attached to the lead record",
    ],
    integrations: ["HubSpot", "Salesforce", "ServiceTitan", "Jobber"],
    impact: "Fewer leads go cold between first contact and first response.",
  },
  {
    slug: "ai-voice-agents",
    name: "AI Voice Agents",
    category: "Lead & Customer Automation",
    icon: "PhoneCall",
    problem:
      "Calls that go unanswered after hours, during peak season, or when your team is on a job site are calls that go to a competitor.",
    solution:
      "An AI voice agent answers every call, understands intent, qualifies the caller, and books or transfers based on urgency.",
    workflow: ["Call rings in", "AI voice agent answers", "Intent identified", "Booking or transfer", "CRM updated"],
    capabilities: [
      "Natural, low-latency conversation handling",
      "Emergency and urgency detection and prioritization",
      "Live transfer to on-call staff when required",
      "Call summaries and recordings synced to your CRM",
    ],
    integrations: ["Twilio", "RingCentral", "ServiceTitan", "HubSpot"],
    impact: "Every call gets answered, regardless of time or call volume.",
  },
  {
    slug: "ai-chat",
    name: "AI Chat",
    category: "Lead & Customer Automation",
    icon: "MessageSquare",
    problem:
      "Website visitors have questions in the moment. A contact form that gets answered tomorrow rarely gets answered at all.",
    solution:
      "A chat agent trained on your services, pricing structure, and service area answers in real time and captures qualified leads.",
    workflow: ["Visitor opens chat", "AI answers questions", "Lead details captured", "Synced to CRM", "Follow-up triggered"],
    capabilities: [
      "Trained on your service catalog and FAQs",
      "Handoff to a human for complex requests",
      "Structured lead capture, not just transcripts",
      "Embeds on any website without a rebuild",
    ],
    integrations: ["Website widget", "HubSpot", "Salesforce", "Slack"],
    impact: "Visitors get answers immediately, instead of abandoning the page.",
  },
  {
    slug: "appointment-automation",
    name: "Appointment Booking",
    category: "Sales & Appointment Automation",
    icon: "CalendarCheck",
    problem:
      "Manual scheduling means back-and-forth calls, double bookings, and appointments that never make it onto the calendar.",
    solution:
      "Qualified leads are booked directly into your team's calendar, with automated confirmations and rescheduling.",
    workflow: ["Lead qualified", "Availability checked", "Appointment booked", "Confirmation sent", "Reminder sequence"],
    capabilities: [
      "Two-way calendar sync",
      "Buffer rules by technician, room, or location",
      "Automated confirmation and reminder sequences",
      "Reschedule and cancellation handling without a phone call",
    ],
    integrations: ["Google Calendar", "Calendly", "ServiceTitan", "Acuity"],
    impact: "Fewer scheduling calls, fewer no-shows, more booked appointments.",
  },
  {
    slug: "follow-up-automation",
    name: "Follow-Up",
    category: "Sales & Appointment Automation",
    icon: "Repeat",
    problem:
      "Estimates and quotes get sent, then forgotten. Most revenue lost to \"they went with someone else\" is really lost to no follow-up.",
    solution:
      "A structured follow-up sequence keeps every open opportunity moving — until it's won, lost, or explicitly paused.",
    workflow: ["Quote or estimate sent", "Follow-up sequence starts", "Response monitored", "Escalation to rep", "Outcome logged"],
    capabilities: [
      "Multi-touch sequences across SMS and email",
      "Automatic pausing when a customer replies",
      "Escalation to a human at defined intervals",
      "Win/loss reasons logged for reporting",
    ],
    integrations: ["HubSpot", "Salesforce", "Twilio", "Gmail"],
    impact: "Open opportunities get a consistent, timely follow-up cadence.",
  },
  {
    slug: "crm-automation",
    name: "CRM Automation",
    category: "CRM & Operations",
    icon: "Database",
    problem:
      "Customer data is scattered across spreadsheets, inboxes, and sticky notes — so nobody has a full picture of the customer.",
    solution:
      "Every interaction — call, chat, form, appointment — writes back to a single CRM record automatically.",
    workflow: ["Interaction occurs", "Data normalized", "Record created or updated", "Fields enriched", "Team notified"],
    capabilities: [
      "Deduplication and record matching",
      "Custom field mapping to your existing CRM",
      "Automatic task and reminder creation",
      "Audit trail for every automated update",
    ],
    integrations: ["HubSpot", "Salesforce", "Pipedrive", "ServiceTitan"],
    impact: "One accurate customer record instead of scattered, manual entry.",
  },
  {
    slug: "document-automation",
    name: "Document Processing",
    category: "CRM & Operations",
    icon: "FileText",
    problem:
      "Invoices, estimates, permits, and intake forms are read, typed, and filed by hand — slowly, and with errors.",
    solution:
      "Documents are read, structured, and routed automatically, with the extracted data flowing straight into your systems.",
    workflow: ["Document received", "Data extracted", "Fields validated", "Routed to system", "Exception flagged"],
    capabilities: [
      "Extraction from PDFs, scans, and photos",
      "Validation rules to catch errors before they propagate",
      "Routing by document type or department",
      "Exceptions flagged for human review, not silently dropped",
    ],
    integrations: ["QuickBooks", "DocuSign", "Google Drive", "SharePoint"],
    impact: "Less manual data entry, fewer transcription errors.",
  },
  {
    slug: "business-intelligence",
    name: "Business Intelligence",
    category: "Business Intelligence",
    icon: "BarChart3",
    problem:
      "Owners make decisions on gut feel because response times, conversion rates, and job costs live in five different tools.",
    solution:
      "A single dashboard pulls from every connected system, so you can see what's working and what's costing you money.",
    workflow: ["Data connected", "Metrics normalized", "Dashboard built", "Alerts configured", "Reviewed weekly"],
    capabilities: [
      "Unified reporting across CRM, calendar, and finance tools",
      "Configurable alerts for metrics that fall out of range",
      "Weekly and monthly summary reports",
      "Exportable views for team and investor updates",
    ],
    integrations: ["HubSpot", "QuickBooks", "Google Sheets", "Slack"],
    impact: "A clear, current view of the metrics that drive the business.",
  },
  {
    slug: "custom-ai-agents",
    name: "Custom AI Agents",
    category: "Business Intelligence",
    icon: "Bot",
    problem:
      "Off-the-shelf tools cover common cases, but your process has exceptions, edge cases, and internal systems no template accounts for.",
    solution:
      "We build agents scoped to your exact process — internal tools, vendor systems, and business rules included.",
    workflow: ["Process mapped", "Agent scoped", "Built & integrated", "Tested against edge cases", "Deployed & monitored"],
    capabilities: [
      "Built against your internal tools and APIs",
      "Custom business logic and approval rules",
      "Ongoing monitoring and iteration",
      "Documentation your team can maintain",
    ],
    integrations: ["Custom APIs", "Internal databases", "Legacy systems"],
    impact: "Automation for the parts of the process no template can reach.",
  },
];

export const solutionCategories = [
  "Lead & Customer Automation",
  "Sales & Appointment Automation",
  "CRM & Operations",
  "Business Intelligence",
];
