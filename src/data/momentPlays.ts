// Content for the "Moments That Matter Most" workflow map, for all three industries.
// Each play is matched to an entry in `industries[].peakMoments` by its `text`, so the moment
// and the workflow stage that handles it still come from industries.ts; this file only adds
// what the system does there and what the business gets out of it.

export interface MomentPlay {
  /** Must equal a `peakMoments[].text` for this industry. */
  text: string;
  /** What the system does at that stage. */
  action: string;
  /** What changes for the business. */
  outcome: string;
}

export interface MomentMapContent {
  /** Short line under the root node (the workflow's first stage). */
  rootNote: string;
  plays: MomentPlay[];
}

export const momentPlays: Record<string, MomentMapContent> = {
  "home-services": {
    rootNote: "Every job starts with a call or a text.",
    plays: [
      {
        text: "An HVAC system fails on the hottest day of the year",
        action: "The voice agent picks up right away and starts intake while the caller is still on the line.",
        outcome: "The job is captured before a competitor answers.",
      },
      {
        text: "A pipe bursts and water is actively damaging the home",
        action: "Asks about the leak, how long it has been running and the address, then flags it as an emergency.",
        outcome: "Emergencies jump the queue instead of waiting for a callback.",
      },
      {
        text: "A storm causes visible roof damage",
        action: "Collects photos by text and offers real open slots for an inspection.",
        outcome: "An estimate is booked against live availability, with confirmation sent.",
      },
      {
        text: "Power goes out and the breaker panel needs inspection",
        action: "Routes the job to the right technician by availability, location and specialty.",
        outcome: "The right technician is on the way, and the customer knows it.",
      },
    ],
  },
  healthcare: {
    rootNote: "Every patient relationship starts with an inquiry.",
    plays: [
      {
        text: "A patient is in pain and needs an urgent appointment",
        action: "Responds immediately, captures patient details and offers the earliest opening. Clinical questions go to your staff.",
        outcome: "An urgent patient is booked instead of calling the next practice.",
      },
      {
        text: "A cosmetic consultation inquiry arrives after hours",
        action: "Asks which treatment the patient wants and their timeline, then offers consultation times.",
        outcome: "High-value consultations are booked overnight, not left in an inbox.",
      },
      {
        text: "A patient cancels last-minute and the slot needs refilling",
        action: "Notifies your waitlist the moment the slot opens.",
        outcome: "The gap is refilled instead of sitting empty.",
      },
      {
        text: "A patient is due for a recall and hasn't rebooked",
        action: "Re-engages overdue patients by text and email with a direct way to book.",
        outcome: "Recall patients come back without front-desk phone tag.",
      },
    ],
  },
  "automotive-services": {
    rootNote: "Every repair starts with a call or a text.",
    plays: [
      {
        text: "A customer needs an urgent repair but can't reach the shop",
        action: "Answers calls and texts, captures the make, model and issue, and books the appointment.",
        outcome: "The customer isn't left on hold or sent to voicemail.",
      },
      {
        text: "A vehicle can't be driven and the owner needs a tow tonight",
        action: "Sorts urgent repairs and tow requests from routine service as they come in.",
        outcome: "Tow and roadside requests reach you tonight, not tomorrow.",
      },
      {
        text: "A vehicle is waiting on repair approval while the customer is unreachable",
        action: "Delivers the estimate and follows up by text and email until the customer approves.",
        outcome: "Vehicles don't sit in the bay waiting on an answer.",
      },
      {
        text: "A customer reaches a service interval and receives no reminder",
        action: "Sends a maintenance reminder when the interval arrives.",
        outcome: "Repeat visits are driven by the system, not by memory.",
      },
    ],
  },
};
