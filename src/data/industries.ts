export interface Industry {
  slug: string;
  name: string;
  segments: string[];
  hero: string;
  opportunity: string;
  painPoints: string[];
  peakMoments: string[];
  workflow: string[];
}

export const industries: Industry[] = [
  {
    slug: "home-services",
    name: "Home Services",
    segments: ["HVAC", "Plumbing", "Roofing", "Electrical"],
    hero: "Respond Faster When Customers Need You Most.",
    opportunity: "Automating call response and dispatch during breakdowns and emergencies.",
    painPoints: [
      "Missed calls during peak service hours",
      "After-hours emergency inquiries",
      "Slow response to online estimate requests",
      "Scheduling conflicts and double-bookings",
      "No-shows on booked appointments",
      "Estimates that never get a follow-up",
    ],
    peakMoments: [
      "An HVAC system fails on the hottest day of the year",
      "A pipe bursts and water is actively damaging the home",
      "A storm causes visible roof damage",
      "Power goes out and the breaker panel needs inspection",
    ],
    workflow: ["Customer call", "AI voice agent", "Qualification", "Service type & location", "CRM", "Appointment", "Technician dispatched", "Follow-up"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    segments: ["Dental", "Med Spa", "Dermatology"],
    hero: "Turn Patient Enquiries Into Scheduled Appointments.",
    opportunity: "Automating new-patient response and appointment scheduling.",
    painPoints: [
      "Missed calls during clinical hours",
      "New patient inquiries left unanswered",
      "Gaps in the appointment calendar",
      "No-shows with no rebooking sequence",
      "Manual follow-up after treatment",
      "Inactive patients who never get reactivated",
    ],
    peakMoments: [
      "A patient is in pain and needs an urgent appointment",
      "A cosmetic consultation inquiry arrives after hours",
      "A patient cancels last-minute and the slot needs refilling",
      "A patient is due for a recall and hasn't rebooked",
    ],
    workflow: ["Patient enquiry", "AI response", "Qualification", "Appointment", "Reminder", "Visit", "Follow-up", "Reactivation"],
  },
  {
    slug: "construction",
    name: "Construction",
    segments: ["Roofing", "Remodeling", "General Contractors"],
    hero: "Capture More Project Opportunities Without Adding More Admin.",
    opportunity: "Automating lead qualification and site-visit scheduling.",
    painPoints: [
      "Project inquiries that go unanswered for days",
      "Slow response to high-value leads",
      "Estimate follow-up that falls through the cracks",
      "Lead qualification handled inconsistently",
      "Site visit scheduling by phone tag",
      "Proposals tracked across spreadsheets, not a system",
    ],
    peakMoments: [
      "A homeowner requests quotes from multiple contractors at once",
      "A commercial client needs a fast turnaround on a bid",
      "Storm damage drives a spike in inbound inquiries",
      "A signed estimate is waiting on a scheduling response",
    ],
    workflow: ["Project enquiry", "AI response", "Qualification", "Project details", "CRM", "Site visit", "Estimate", "Follow-up", "Contract"],
  },
];
