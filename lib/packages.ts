export type PackageKey = "watch" | "care" | "ready" | "custom";

export const packages = [
  {
    key: "watch",
    name: "Boat Watch",
    priceCents: 22500,
    cadence: "monthly",
    description: "Essential recurring vessel oversight for owners who want confidence while they are away.",
  },
  {
    key: "care",
    name: "Boat Care",
    priceCents: 39500,
    cadence: "monthly",
    description: "Comprehensive ongoing vessel oversight, care coordination, and follow-through.",
    featured: true,
  },
  {
    key: "ready",
    name: "Boat Ready",
    priceCents: 69500,
    cadence: "monthly",
    description: "Highest-level recurring oversight, readiness preparation, priority support, and deeper coordination.",
  },
  {
    key: "custom",
    name: "Custom",
    priceCents: null,
    cadence: "custom",
    description: "Bespoke support for complex vessels, owners, or operating requirements.",
  },
] as const;
