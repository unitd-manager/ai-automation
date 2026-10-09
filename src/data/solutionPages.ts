/**
 * Page content for the 7 solution pages. Every entry is process-based —
 * it describes the workflow being automated, never one industry.
 * Pain rows follow: Pain point → Peak moment → What it costs → AI fix.
 */
export interface PainRow { icon: string; title: string; moment: string; cost: string; fix: string }
export interface CompareRow { label: string; before: string; after: string }
export interface Faq { question: string; answer: string }

export interface SolutionPageContent {
  dataSlug: string; // slug in solutions.ts
  heroCta: string;
  painTitle: string;
  painDescription: string;
  pains: PainRow[];
  workflowTitle: string;
  workflowDescription: string;
  highlightStage: number;
  capDescription: string;
  compareTitle: string;
  compareDescription: string;
  compareRows: CompareRow[];
  faqs: Faq[];
  ctaTitle: string;
  ctaDescription: string;
}

export const solutionPages: Record<string, SolutionPageContent> = {
  "ai-voice-agents": {
    dataSlug: "ai-voice-agents",
    heroCta: "Talk to Us",
    painTitle: "Where Calls Are Lost",
    painDescription: "The same three gaps appear in any business that runs on inbound calls. A voice agent closes each one.",
    pains: [
      { icon: "PhoneMissed", title: "Missed urgent calls", moment: "An urgent request comes in after hours or while the team is fully booked.", cost: "The most valuable jobs go to whoever picks up first.", fix: "The agent answers instantly, identifies urgency, captures the details, and books or routes to the right person." },
      { icon: "Moon", title: "Unanswered peak-time calls", moment: "Call volume spikes and staff can't keep up with the phones and the work in front of them.", cost: "Callers hang up or reach voicemail and try the next option.", fix: "Every call is answered in parallel, so volume never decides who gets served." },
      { icon: "Route", title: "Calls that end without a next step", moment: "A call finishes with no booking, no notes, and no record of what was promised.", cost: "Requests are forgotten and customers have to call again.", fix: "Each call ends with a booking or a handoff, plus a summary written to your system." },
    ],
    workflowTitle: "From Ring to Recorded Outcome",
    workflowDescription: "The same path runs on every call, at any hour.",
    highlightStage: 1,
    capDescription: "What happens automatically between a call ringing and a resolved request.",
    compareTitle: "Voicemail and Callbacks vs. an AI Voice Agent",
    compareDescription: "What changes once every call is answered on the first ring.",
    compareRows: [
      { label: "Answer rate", before: "Depends on who is free", after: "Every call, every time" },
      { label: "After-hours coverage", before: "Voicemail", after: "24/7 live conversation" },
      { label: "Urgent requests", before: "Found in the morning", after: "Flagged and escalated at once" },
      { label: "Call records", before: "Handwritten or missing", after: "Summary and recording logged" },
    ],
    faqs: [
      { question: "Will callers know it's an AI?", answer: "The agent is transparent about being an automated assistant. It handles the conversation naturally, and callers can ask for a person at any time." },
      { question: "What happens with urgent or complex calls?", answer: "Urgency rules you define trigger a live transfer or an immediate alert to on-call staff, with the details already captured." },
      { question: "Can it work with our existing phone number?", answer: "Yes. It connects to your current number or system, so callers dial the same number they already use." },
      { question: "Where do call details go?", answer: "Summaries, recordings, and captured fields are written to your CRM automatically." },
    ],
    ctaTitle: "Ready to Stop Losing Calls?",
    ctaDescription: "We'll show you exactly how a voice agent fits into the way your calls are handled today.",
  },

  "ai-chat": {
    dataSlug: "ai-chat",
    heroCta: "Talk to Us",
    painTitle: "Where Enquiries Are Lost",
    painDescription: "The same three gaps appear on any website that depends on visitor questions. AI chat closes each one.",
    pains: [
      { icon: "MessageCircleQuestion", title: "Enquiries left unanswered", moment: "A visitor has a question outside office hours or while the team is busy.", cost: "The visitor leaves and the enquiry never becomes a booking.", fix: "The chat agent answers instantly, captures their details, and books or routes the request." },
      { icon: "Repeat", title: "The same questions, again and again", moment: "Staff spend the day answering the same handful of questions by message and email.", cost: "Skilled time goes to repetition instead of real work.", fix: "Common questions are handled automatically, and complex ones are handed to a person with the context attached." },
      { icon: "UserCheck", title: "Conversations that leave no lead", moment: "A visitor chats, gets an answer, and leaves without sharing contact details.", cost: "Interest is never captured, so there is nobody to follow up with.", fix: "Structured lead capture happens inside the conversation and syncs straight to your CRM." },
    ],
    workflowTitle: "From First Message to Captured Lead",
    workflowDescription: "The same path runs on every chat, whatever the question.",
    highlightStage: 1,
    capDescription: "What happens automatically between a visitor opening chat and a lead landing in your system.",
    compareTitle: "Contact Forms vs. AI Chat",
    compareDescription: "What changes once every visitor gets an answer in the moment.",
    compareRows: [
      { label: "Time to first answer", before: "Hours to next day", after: "Instant" },
      { label: "Common questions", before: "Answered again by staff", after: "Handled automatically" },
      { label: "Lead capture", before: "A form most people skip", after: "Captured inside the conversation" },
      { label: "CRM records", before: "Manual entry", after: "Updated automatically" },
    ],
    faqs: [
      { question: "What does the chat agent know?", answer: "It is trained on your services, pricing structure, service area, and FAQs, so it answers from your information rather than generic responses." },
      { question: "What if it can't answer something?", answer: "It hands the conversation to a person, with the full transcript and captured details attached." },
      { question: "Do we need to rebuild our website?", answer: "No. The widget embeds on any site without a rebuild." },
      { question: "Can it also work on messaging channels?", answer: "Yes. The same agent can be extended to other messaging channels during setup." },
    ],
    ctaTitle: "Ready to Answer Every Visitor?",
    ctaDescription: "We'll show you exactly how AI chat fits into your website and your existing process.",
  },

  "ai-lead-response": {
    dataSlug: "ai-lead-response",
    heroCta: "Talk to Us",
    painTitle: "Where Leads Are Lost Between Inquiry and Reply",
    painDescription: "The same three gaps appear regardless of channel. Lead response automation closes each one.",
    pains: [
      { icon: "PhoneMissed", title: "The channel that goes unanswered", moment: "A form, call, or message arrives after hours, mid-task, or while the team is on another lead.", cost: "The lead moves on and contacts a competitor instead.", fix: "Every channel gets an immediate, qualified response the moment the inquiry lands." },
      { icon: "Clock", title: "The gap between inquiry and reply", moment: "A customer asks several providers for a quote and books with whoever replies first.", cost: "Deals are lost on speed alone, before your team sees the lead.", fix: "Sub-minute replies by voice, SMS, or email, so you are first every time." },
      { icon: "UserCheck", title: "The handoff with no context", moment: "A rep picks up a lead knowing nothing about what they need or when.", cost: "Wasted calls, mismatched routing, and slower deals.", fix: "Qualifying questions run first, and the lead arrives with the answers attached." },
    ],
    workflowTitle: "From First Contact to a Routed, Ready Lead",
    workflowDescription: "The same path runs no matter which channel the inquiry came through.",
    highlightStage: 1,
    capDescription: "What happens automatically between a lead arriving and a rep picking it up.",
    compareTitle: "Manual Response vs. Automated Lead Response",
    compareDescription: "What changes once every inquiry gets an immediate, qualified reply.",
    compareRows: [
      { label: "Time to first response", before: "Hours to next business day", after: "Under a minute" },
      { label: "Coverage", before: "Business hours only", after: "24/7, every channel" },
      { label: "Qualification", before: "On the first call, if at all", after: "Done before a rep is involved" },
      { label: "Routing", before: "Manual, by whoever is free", after: "Automatic, by type or territory" },
    ],
    faqs: [
      { question: "Which channels does it cover?", answer: "Web forms, missed calls, and chat are covered as standard. SMS and other channels can be added during setup." },
      { question: "How does it qualify without sounding scripted?", answer: "Questions are matched to your actual sales process, so the conversation reads like your team asking." },
      { question: "How does routing decide who gets a lead?", answer: "Rules follow how you already assign work: by service type, territory, or availability." },
      { question: "What does a rep see?", answer: "The full conversation and qualification answers, attached to the lead record before the first call." },
    ],
    ctaTitle: "Ready to Stop Losing Leads to Slow Response?",
    ctaDescription: "We'll show you exactly how lead response automation fits into your existing process.",
  },

  "ai-appointment-booking": {
    dataSlug: "appointment-automation",
    heroCta: "Talk to Us",
    painTitle: "Where Bookings Are Lost",
    painDescription: "The same three gaps appear in any business that runs on a calendar. Booking automation closes each one.",
    pains: [
      { icon: "CalendarX", title: "Empty slots from last-minute cancellations", moment: "A customer cancels or fails to show shortly before the appointment.", cost: "Lost revenue and idle capacity that can't be recovered.", fix: "Cancelled slots are offered automatically to a waitlist or past customers." },
      { icon: "CalendarClock", title: "Scheduling by phone tag", moment: "Booking takes several calls or messages, and some never finish.", cost: "Qualified customers drop off before a time is agreed.", fix: "Availability is checked live and a slot is booked in the same conversation." },
      { icon: "BellOff", title: "No reminder, no attendance", moment: "A confirmed appointment approaches and nobody reminds the customer.", cost: "No-shows and wasted preparation time.", fix: "Confirmations and reminders run on a schedule, with self-service rescheduling built in." },
    ],
    workflowTitle: "From Qualified Lead to Confirmed Appointment",
    workflowDescription: "The same path runs for every booking, on every calendar.",
    highlightStage: 2,
    capDescription: "What happens automatically between a lead being ready and an appointment on the calendar.",
    compareTitle: "Manual Scheduling vs. Automated Booking",
    compareDescription: "What changes once booking, reminders, and rescheduling run on their own.",
    compareRows: [
      { label: "Booking a time", before: "Back-and-forth messages", after: "Booked in one conversation" },
      { label: "Availability checks", before: "Manual, per calendar", after: "Live, synced automatically" },
      { label: "Reminders", before: "Easy to forget", after: "Sent on schedule" },
      { label: "Cancelled slots", before: "Stay empty", after: "Refilled automatically" },
    ],
    faqs: [
      { question: "Which calendars does it work with?", answer: "Google Calendar, Calendly, Acuity, and most scheduling tools, with two-way sync." },
      { question: "Can it prevent double bookings?", answer: "Yes. Availability is checked live, and buffer rules keep slots from overlapping." },
      { question: "What happens when someone needs to reschedule?", answer: "They reschedule or cancel themselves by message, and the calendar and reminders update automatically." },
      { question: "Can it refill cancelled slots?", answer: "Yes. Freed slots can be offered to a waitlist or to past customers automatically." },
    ],
    ctaTitle: "Ready to Fill Your Calendar Automatically?",
    ctaDescription: "We'll show you exactly how booking automation fits into your existing calendar and process.",
  },

  "ai-follow-up": {
    dataSlug: "follow-up-automation",
    heroCta: "Talk to Us",
    painTitle: "Where Opportunities Go Cold",
    painDescription: "The same three gaps appear after any quote, estimate, or service. Follow-up automation closes each one.",
    pains: [
      { icon: "Hourglass", title: "Quotes sent, then silence", moment: "An estimate goes out and nobody follows up while the customer decides.", cost: "Won work is lost to \"they went with someone else.\"", fix: "A follow-up sequence starts the moment a quote goes out and continues until there is an answer." },
      { icon: "FolderInput", title: "Approvals stuck waiting", moment: "Work is ready to proceed but waiting on the customer's approval or reply.", cost: "Delayed jobs, idle capacity, and lost revenue.", fix: "Approval reminders and follow-ups run automatically, and a person steps in at set intervals." },
      { icon: "BellOff", title: "Past customers never re-engaged", moment: "A customer reaches a repeat or renewal point and hears nothing from you.", cost: "Repeat revenue and retention quietly slip away.", fix: "Automated reminders and reactivation messages bring customers back at the right time." },
    ],
    workflowTitle: "From Quote Sent to Outcome Logged",
    workflowDescription: "The same path runs for every open opportunity.",
    highlightStage: 1,
    capDescription: "What happens automatically between a quote going out and a deal won, lost, or paused.",
    compareTitle: "Manual Follow-Up vs. Automated Sequences",
    compareDescription: "What changes once every open opportunity has a consistent cadence.",
    compareRows: [
      { label: "After a quote is sent", before: "Follow-up if someone remembers", after: "Sequence starts automatically" },
      { label: "Customer replies", before: "Easy to keep messaging anyway", after: "Sequence pauses automatically" },
      { label: "Repeat customers", before: "Rarely contacted", after: "Reminded and reactivated" },
      { label: "Outcomes", before: "Not recorded", after: "Win/loss reasons logged" },
    ],
    faqs: [
      { question: "What channels are used?", answer: "SMS and email as standard, with sequences set to your timing and tone." },
      { question: "What if the customer replies?", answer: "The sequence pauses at once and the conversation goes to the right person." },
      { question: "Can it handle reminders for repeat services?", answer: "Yes. Time-based and interval-based reminders can be triggered from your records." },
      { question: "How do we see what's working?", answer: "Outcomes and reasons are logged for every opportunity, so results can be reported." },
    ],
    ctaTitle: "Ready to Stop Losing Deals to Silence?",
    ctaDescription: "We'll show you exactly how follow-up automation fits into your existing sales process.",
  },

  "ai-crm-automation": {
    dataSlug: "crm-automation",
    heroCta: "Talk to Us",
    painTitle: "Where Customer Data Breaks Down",
    painDescription: "The same three gaps appear in any team that tracks customers by hand. CRM automation closes each one.",
    pains: [
      { icon: "Database", title: "Interactions that never reach the record", moment: "A call, chat, or form happens and nobody logs it.", cost: "No one has the full picture of the customer.", fix: "Every interaction writes back to a single record automatically, whichever channel it came through." },
      { icon: "Copy", title: "Duplicate and messy records", moment: "The same customer is entered several times across channels and teams.", cost: "Conflicting data, wasted outreach, and unreliable reporting.", fix: "Records are matched and merged automatically, with fields mapped to your existing CRM." },
      { icon: "BellOff", title: "Tasks nobody creates", moment: "A lead needs a callback or a next step, and nothing prompts anyone.", cost: "Follow-through depends on memory and things get missed.", fix: "Tasks and reminders are created automatically, and every automated change is logged in an audit trail." },
    ],
    workflowTitle: "From Interaction to an Accurate Record",
    workflowDescription: "The same path runs for every customer touchpoint.",
    highlightStage: 2,
    capDescription: "What happens automatically between a customer interaction and an up-to-date record.",
    compareTitle: "Manual Data Entry vs. Automated CRM Sync",
    compareDescription: "What changes once every interaction updates one record on its own.",
    compareRows: [
      { label: "Logging interactions", before: "Manual, often skipped", after: "Automatic, every time" },
      { label: "Duplicate entries", before: "Created per channel", after: "Detected and merged" },
      { label: "Field updates", before: "Manual, easy to miss", after: "Mapped to your CRM" },
      { label: "Changes", before: "Untraceable", after: "Logged in an audit trail" },
    ],
    faqs: [
      { question: "Which CRMs are supported?", answer: "HubSpot, Salesforce, Pipedrive, and most others. Field mapping is set up during onboarding." },
      { question: "Can we see what an automation changed?", answer: "Yes. Every automated update is logged with what changed, when, and which workflow made the change." },
      { question: "Do we have to replace our CRM?", answer: "No. It keeps the CRM you already use accurate rather than replacing it." },
      { question: "How are duplicates handled?", answer: "Records are matched on key fields and merged automatically, with unclear cases flagged for review." },
    ],
    ctaTitle: "Ready for One Accurate Customer Record?",
    ctaDescription: "We'll show you exactly how CRM automation fits into the systems you already use.",
  },

  "ai-document-processing": {
    dataSlug: "document-automation",
    heroCta: "Talk to Us",
    painTitle: "Where Paperwork Breaks Down",
    painDescription: "The same three gaps appear in any process that runs on forms and documents. Document automation closes each one.",
    pains: [
      { icon: "FileWarning", title: "Documents typed in by hand", moment: "PDFs, scans, and photos arrive and someone has to key in the details.", cost: "Slow turnaround and transcription errors.", fix: "Documents are read and structured automatically, and the fields that matter flow into your systems." },
      { icon: "FolderInput", title: "Incomplete forms and missed deadlines", moment: "A form is submitted with gaps, or never submitted at all.", cost: "Administrative delays and lost bookings.", fix: "Fields are validated on arrival, and reminders go out automatically until the paperwork is complete." },
      { icon: "Route", title: "Documents that never reach the right place", moment: "A file lands in an inbox and waits for someone to sort it.", cost: "Lost documents and no visibility into what fell through.", fix: "Documents are routed by type or department, and exceptions are flagged for a person instead of dropped." },
    ],
    workflowTitle: "From Document Received to Data in Place",
    workflowDescription: "The same path runs for every document type.",
    highlightStage: 1,
    capDescription: "What happens automatically between a document arriving and clean data reaching your systems.",
    compareTitle: "Manual Entry vs. Automated Document Processing",
    compareDescription: "What changes once documents read, check, and file themselves.",
    compareRows: [
      { label: "Data entry", before: "Typed by hand", after: "Extracted automatically" },
      { label: "Validation", before: "Errors found later", after: "Caught on arrival" },
      { label: "Routing", before: "Sorted manually", after: "Automatic, by type or department" },
      { label: "Exceptions", before: "Silently missed", after: "Flagged for human review" },
    ],
    faqs: [
      { question: "What kinds of documents can it read?", answer: "PDFs, scans, and photos, including forms, estimates, and invoices, not just clean digital files." },
      { question: "What happens when it isn't sure?", answer: "Anything below the confidence threshold is flagged for a person to review, never silently accepted." },
      { question: "Where does the extracted data go?", answer: "Into the systems you already use, such as accounting tools, cloud storage, and your CRM." },
      { question: "Can it chase missing paperwork?", answer: "Yes. Incomplete submissions trigger automatic reminders until the form is complete." },
    ],
    ctaTitle: "Ready to Stop Typing What You Could Automate?",
    ctaDescription: "We'll show you exactly how document automation fits into the systems you already file into.",
  },
};