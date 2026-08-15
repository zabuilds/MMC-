export type CapacityStatus = "Green" | "Yellow" | "Red";

export type CapacitySnapshot = {
  activeClients: number;
  activeVessels: number;
  visitsDueThisWeek: number;
  openActions: number;
  criticalOpenItems: number;
  availableOperatorCapacity: number;
  status: CapacityStatus;
  managementAction: string;
};

export function calculateCapacityStatus(input: Omit<CapacitySnapshot, "status" | "managementAction">): CapacitySnapshot {
  const utilization = input.activeVessels / Math.max(input.availableOperatorCapacity, 1);
  const status: CapacityStatus = input.criticalOpenItems > 0 || utilization >= 1.1
    ? "Red"
    : input.openActions >= 5 || utilization >= 0.85
      ? "Yellow"
      : "Green";

  const managementAction = status === "Red"
    ? "Protect service quality: intervene, reallocate capacity, and pause new commitments if required."
    : status === "Yellow"
      ? "Monitor closely: prioritize open work and review upcoming commitments before adding load."
      : "Capacity is within the current operating guardrails.";

  return { ...input, status, managementAction };
}

export const constructionCapacity = calculateCapacityStatus({
  activeClients: 8,
  activeVessels: 11,
  visitsDueThisWeek: 9,
  openActions: 3,
  criticalOpenItems: 0,
  availableOperatorCapacity: 14,
});
