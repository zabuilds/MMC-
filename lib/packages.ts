export type PackageKey = "harbour" | "steward" | "reserve" | "private";

export const packages = [
  {
    key: "harbour",
    name: "Harbour",
    priceCents: 22500,
    cadence: "monthly",
    description: "Essential recurring vessel oversight.",
  },
  {
    key: "steward",
    name: "Steward",
    priceCents: 39500,
    cadence: "monthly",
    description: "Comprehensive ongoing vessel care and coordination.",
    featured: true,
  },
  {
    key: "reserve",
    name: "Reserve",
    priceCents: 67500,
    cadence: "monthly",
    description: "Highest-level recurring oversight, readiness, priority support, and deeper coordination.",
  },
  {
    key: "private",
    name: "Private",
    priceCents: null,
    cadence: "custom",
    description: "Bespoke support for complex vessels, owners, or operating requirements.",
  },
] as const;
