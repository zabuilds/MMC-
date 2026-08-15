export type VisitStatus = "scheduled" | "assigned" | "in_progress" | "completed" | "cancelled";
export type FindingStatus = "open" | "acknowledged" | "actioned" | "verified" | "closed";
export type ActionStatus = "open" | "assigned" | "in_progress" | "blocked" | "completed" | "verified" | "closed";
export type Priority = "routine" | "attention" | "urgent" | "critical";

export type Vessel = {
  id: string;
  name: string;
  owner: string;
  marina: string;
};

export type Visit = {
  id: string;
  vesselId: string;
  scheduledFor: string;
  status: VisitStatus;
  operator: string | null;
};

export type Finding = {
  id: string;
  visitId: string;
  title: string;
  summary: string;
  priority: Priority;
  status: FindingStatus;
};

export type Action = {
  id: string;
  findingId: string;
  title: string;
  owner: string;
  dueDate: string | null;
  status: ActionStatus;
};

export type Evidence = {
  id: string;
  visitId: string;
  type: "photo" | "video" | "document" | "note";
  label: string;
};

export const demoVessels: Vessel[] = [
  { id: "v-001", name: "Morning Star", owner: "Client A", marina: "George Town" },
  { id: "v-002", name: "Sea Glass", owner: "Client B", marina: "Camana Bay" },
];

export const demoVisits: Visit[] = [
  { id: "visit-001", vesselId: "v-001", scheduledFor: "09:00", status: "scheduled", operator: "Operator 1" },
  { id: "visit-002", vesselId: "v-002", scheduledFor: "10:30", status: "in_progress", operator: "Operator 2" },
];

export const demoFindings: Finding[] = [
  { id: "finding-001", visitId: "visit-002", title: "Bilge pump check", summary: "Pump requires follow-up inspection.", priority: "urgent", status: "open" },
];

export const demoActions: Action[] = [
  { id: "action-001", findingId: "finding-001", title: "Coordinate pump inspection", owner: "Operations", dueDate: "Today", status: "assigned" },
];

export const demoEvidence: Evidence[] = [
  { id: "evidence-001", visitId: "visit-002", type: "photo", label: "Bilge compartment photo" },
];
