// Content for the "One call, two outcomes" timeline and "Inside the system" explorer,
// for all three industries. Everything here follows each industry's own hero workflow.

export interface FrontDeskRow {
  /** Scenario clock time (illustrative). */
  time: string;
  /** Must match a string in this industry's `workflow` array. */
  stage: string;
  without: string;
  withUs: string;
}

export interface FrontDeskScenario {
  label: string;
  headline: string;
}

export type Channel = "voice" | "sms" | "email";

export interface ThreadLine {
  from: "customer" | "ai" | "system";
  text: string;
}

export interface SystemFeatureMeta {
  title: string;
  description: string;
  agent: string;
  /** Workflow stages this feature runs on (must match this industry's `workflow` strings). */
  stages: string[];
  channels: Channel[];
  thread: ThreadLine[];
}

export interface IndustrySystem {
  scenario: FrontDeskScenario;
  rows: FrontDeskRow[];
  systemFeatures: SystemFeatureMeta[];
}

const AGENT_FOLLOWUP = "AI Follow-Up & Retention Agent";

export const industrySystems: Record<string, IndustrySystem> = {
  "home-services": {
    scenario: {
      label: "Illustrative scenario",
      headline: "Tuesday, 6:47 PM. A pipe bursts, and you're on another job.",
    },
    rows: [
      {
        time: "6:47 PM",
        stage: "Customer call",
        without: "Your phone rings while you're under a sink. It goes to voicemail.",
        withUs: "The call is picked up and answered professionally, even mid-job.",
      },
      {
        time: "6:48 PM",
        stage: "Qualification",
        without: "Nobody can tell an emergency from a quote request until someone calls back.",
        withUs: "The AI asks about the leak, the scope and the timeline, and flags it as an emergency.",
      },
      {
        time: "6:49 PM",
        stage: "CRM",
        without: "The details live in a voicemail you'll replay later, if you remember.",
        withUs: "Service type, address and photos land in your CRM, ready for the crew.",
      },
      {
        time: "6:52 PM",
        stage: "Technician dispatched",
        without: "By the time you call back, the customer has already booked a competitor.",
        withUs: "The job is routed to the on-call technician and the customer gets a confirmation.",
      },
      {
        time: "Next day",
        stage: "Follow-up",
        without: "The estimate goes out and nobody follows up. Your evening goes to returning calls.",
        withUs: "Follow-ups run on open estimates until the customer replies. Your evening stays yours.",
      },
    ],
    systemFeatures: [
      {
        title: "Always-On Call Handling",
        description: "Every inbound call and text is picked up by the AI voice agent immediately, day or night, so no customer reaches a busy signal or voicemail.",
        agent: "AI Response & Booking Agent",
        stages: ["Customer call", "AI voice agent"],
        channels: ["voice", "sms"],
        thread: [
          { from: "customer", text: "My AC just stopped and the house is already hot." },
          { from: "ai", text: "I'm sorry about that. I can get a technician out. What's the address, and when did it stop?" },
          { from: "system", text: "Call answered in under 2 rings" },
        ],
      },
      {
        title: "Instant Qualification",
        description: "The AI asks about the issue, urgency, and service type in the first exchange, sorting emergency calls from routine ones before a human gets involved.",
        agent: "AI Response & Booking Agent",
        stages: ["Qualification"],
        channels: ["voice", "sms"],
        thread: [
          { from: "customer", text: "A pipe burst and water is coming through the ceiling." },
          { from: "ai", text: "That's urgent. Is the water shut off, and can I get your address?" },
          { from: "system", text: "Flagged as urgent · Priority: Emergency" },
        ],
      },
      {
        title: "Location & Service Matching",
        description: "Captures the property location and matches it against your service area and trade specialties, so only relevant jobs move forward.",
        agent: "AI Response & Booking Agent",
        stages: ["Service type & location"],
        channels: ["voice", "sms"],
        thread: [
          { from: "customer", text: "Do you work in my area, and do you handle water heaters?" },
          { from: "ai", text: "Let me check your address against our service area and trades." },
          { from: "system", text: "In area · Trade matched" },
        ],
      },
      {
        title: "Calendar-Synced Booking",
        description: "Books directly into your CRM and calendar in real time, so double-bookings and scheduling conflicts stop happening.",
        agent: "AI Response & Booking Agent",
        stages: ["CRM", "Appointment"],
        channels: ["voice", "sms"],
        thread: [
          { from: "customer", text: "I need a roof estimate after the storm. Here are some photos." },
          { from: "ai", text: "Thanks, I have the photos. I have Thursday at 10 AM or Friday at 2 PM. Which works?" },
          { from: "system", text: "Booked against live availability · Saved to CRM" },
        ],
      },
      {
        title: "Technician Routing",
        description: "Once booked, the job is routed to the right technician based on availability and proximity, with the details sent automatically.",
        agent: "AI Response & Booking Agent",
        stages: ["Technician dispatched"],
        channels: ["voice", "sms"],
        thread: [
          { from: "system", text: "Routed to the on-call technician by availability and location" },
          { from: "ai", text: "A technician has been dispatched. You'll get a confirmation by text." },
        ],
      },
      {
        title: "Automated Follow-Through",
        description: "After the job, it follows up on open quotes, requests reviews, and checks back in with customers who haven't booked again.",
        agent: AGENT_FOLLOWUP,
        stages: ["Follow-up"],
        channels: ["sms", "email"],
        thread: [
          { from: "system", text: "Estimate sent · No reply yet" },
          { from: "ai", text: "Hi, just checking in on the estimate we sent. Happy to answer questions or lock in a time." },
          { from: "customer", text: "Yes, let's get it booked for next week." },
        ],
      },
    ],
  },

  healthcare: {
    scenario: {
      label: "Illustrative scenario",
      headline: "Saturday, 7:10 PM. A new patient calls about tooth pain.",
    },
    rows: [
      {
        time: "7:10 PM",
        stage: "Patient inquiry",
        without: "The clinic is closed. The call goes to a voicemail nobody hears until Monday.",
        withUs: "The call is answered immediately, even on a Saturday evening.",
      },
      {
        time: "7:11 PM",
        stage: "AI response",
        without: "The patient doesn't know if they can get seen before Monday, so they look elsewhere.",
        withUs: "The AI explains next-day availability and starts booking the visit.",
      },
      {
        time: "7:12 PM",
        stage: "Qualification",
        without: "Nobody can tell urgent pain from a routine request until staff calls back.",
        withUs: "The AI notes the pain level and symptom, and flags it as time-sensitive.",
      },
      {
        time: "7:13 PM",
        stage: "Appointment",
        without: "By Monday morning, the patient has already called another practice.",
        withUs: "A same-week slot is booked and confirmed before the call ends.",
      },
      {
        time: "Day of visit",
        stage: "Reminder",
        without: "No reminder goes out, and the patient forgets or no-shows.",
        withUs: "An automated reminder goes out the day before, cutting down on no-shows.",
      },
    ],
    systemFeatures: [
      {
        title: "Always-On Inquiry Response",
        description: "Every patient inquiry is answered immediately, whether it arrives during clinic hours or after you've closed for the day.",
        agent: "AI Patient Response Agent",
        stages: ["Patient inquiry", "AI response"],
        channels: ["voice", "sms"],
        thread: [
          { from: "customer", text: "I have a toothache and I'm not sure if you're open this late." },
          { from: "ai", text: "We're closed right now, but I can help get you booked. Can you describe the pain?" },
          { from: "system", text: "Inquiry answered after hours" },
        ],
      },
      {
        title: "Care-Path Qualification",
        description: "Sorts new-patient requests, urgent needs, and consultation inquiries, so clinical questions reach your staff and routine ones get booked directly.",
        agent: "AI Patient Response Agent",
        stages: ["Qualification"],
        channels: ["voice", "sms"],
        thread: [
          { from: "customer", text: "It's a sharp pain when I bite down, started yesterday." },
          { from: "ai", text: "Thanks for sharing that. I'll flag this as time-sensitive for our team." },
          { from: "system", text: "Flagged as urgent · Clinical detail routed to staff" },
        ],
      },
      {
        title: "Real-Time Appointment Booking",
        description: "Books against your actual calendar and sends confirmation immediately, for new and returning patients alike.",
        agent: "AI Patient Response Agent",
        stages: ["Appointment"],
        channels: ["voice", "sms"],
        thread: [
          { from: "ai", text: "I have Monday at 9 AM or 11:30 AM. Which works better for you?" },
          { from: "customer", text: "9 AM works." },
          { from: "system", text: "Booked against live availability · Confirmation sent" },
        ],
      },
      {
        title: "Automated Reminders",
        description: "Sends reminders ahead of every visit to cut down on no-shows and last-minute cancellations.",
        agent: "AI Patient Response Agent",
        stages: ["Reminder", "Visit"],
        channels: ["sms", "email"],
        thread: [
          { from: "system", text: "Appointment tomorrow at 9 AM" },
          { from: "ai", text: "Reminder: your appointment is tomorrow at 9 AM. Reply CONFIRM or call to reschedule." },
        ],
      },
      {
        title: "Visit Follow-Up",
        description: "Checks in after treatment and follows up with patients who didn't book after a consultation.",
        agent: AGENT_FOLLOWUP,
        stages: ["Follow-up"],
        channels: ["sms", "email"],
        thread: [
          { from: "system", text: "Consultation completed · No booking yet" },
          { from: "ai", text: "Just checking in after your consultation. Would you like to schedule your next visit?" },
        ],
      },
      {
        title: "Patient Reactivation",
        description: "Re-engages patients who are overdue for a recall or haven't returned in a while, turning inactive records back into booked visits.",
        agent: AGENT_FOLLOWUP,
        stages: ["Reactivation"],
        channels: ["sms", "email"],
        thread: [
          { from: "system", text: "Six months since last visit · Recall due" },
          { from: "ai", text: "It's time for your regular check-up. Want to grab a slot this month?" },
        ],
      },
    ],
  },

  "automotive-services": {
    scenario: {
      label: "Illustrative scenario",
      headline: "Monday, 8:05 AM. A customer's car won't start before work.",
    },
    rows: [
      {
        time: "8:05 AM",
        stage: "Customer call or text",
        without: "The shop opens at 8, and the first bay is already busy. The call goes unanswered.",
        withUs: "The text is answered immediately, before the first bay even opens.",
      },
      {
        time: "8:06 AM",
        stage: "AI answers",
        without: "The customer doesn't know if the shop can help today, so they call around.",
        withUs: "The AI confirms you can look at it today and starts gathering details.",
      },
      {
        time: "8:07 AM",
        stage: "Vehicle details captured",
        without: "Nobody notes the make, model, or symptoms until the customer arrives and repeats it.",
        withUs: "Make, model, and symptoms are captured by text, ready for the service advisor.",
      },
      {
        time: "8:08 AM",
        stage: "Urgency qualified",
        without: "The front desk can't tell if it's urgent until someone calls back later in the day.",
        withUs: "The AI flags it as same-day, since the customer needs the car for work.",
      },
      {
        time: "8:10 AM",
        stage: "Appointment booked",
        without: "By the time anyone calls back, the customer has booked at a competing shop.",
        withUs: "A same-day bay slot is booked and confirmed before the call ends.",
      },
    ],
    systemFeatures: [
      {
        title: "Always-On Call & Text Response",
        description: "Every call and text is answered immediately, even when your team is mid-repair.",
        agent: "AI Service Response Agent",
        stages: ["Customer call or text", "AI answers"],
        channels: ["voice", "sms"],
        thread: [
          { from: "customer", text: "My car won't start and I need it looked at today." },
          { from: "ai", text: "Sorry to hear that. What's the make, model, and year?" },
          { from: "system", text: "Message answered in under a minute" },
        ],
      },
      {
        title: "Vehicle Detail Capture",
        description: "Collects the make, model, and issue upfront, so your service advisors start with the full picture.",
        agent: "AI Service Response Agent",
        stages: ["Vehicle details captured"],
        channels: ["voice", "sms"],
        thread: [
          { from: "customer", text: "2018 Honda Accord. It just clicks when I turn the key." },
          { from: "ai", text: "Got it, that sounds like it could be the battery or starter." },
          { from: "system", text: "Vehicle and symptom logged" },
        ],
      },
      {
        title: "Urgency Triage",
        description: "Separates urgent repairs and tow requests from routine service, so nothing that matters sits in a queue.",
        agent: "AI Service Response Agent",
        stages: ["Urgency qualified"],
        channels: ["voice", "sms"],
        thread: [
          { from: "customer", text: "I need it for work today if possible." },
          { from: "ai", text: "I can flag this as same-day priority for the team." },
          { from: "system", text: "Priority: Same-day" },
        ],
      },
      {
        title: "Real-Time Bay Booking",
        description: "Books the appointment against your actual bay availability and sends confirmation automatically.",
        agent: "AI Service Response Agent",
        stages: ["Appointment booked"],
        channels: ["voice", "sms"],
        thread: [
          { from: "ai", text: "I can get you in at 4 PM today. Want me to book that?" },
          { from: "customer", text: "Yes, please." },
          { from: "system", text: "Booked against live bay availability · Confirmation sent" },
        ],
      },
      {
        title: "Estimate Follow-Through",
        description: "Delivers estimates and follows up automatically until the customer approves, keeping bays from sitting idle.",
        agent: AGENT_FOLLOWUP,
        stages: ["Estimate & approval"],
        channels: ["sms", "email"],
        thread: [
          { from: "system", text: "Estimate sent · No reply yet" },
          { from: "ai", text: "Just checking in on the estimate we sent. Happy to answer questions or get it approved." },
        ],
      },
      {
        title: "Maintenance Reactivation",
        description: "Sends maintenance reminders and brings customers back for repeat service.",
        agent: AGENT_FOLLOWUP,
        stages: ["Repair updates", "Maintenance reminder"],
        channels: ["sms", "email"],
        thread: [
          { from: "system", text: "Service interval reached · No visit booked" },
          { from: "ai", text: "It's about time for your next oil change. Want to grab a slot this week?" },
        ],
      },
    ],
  },
};
