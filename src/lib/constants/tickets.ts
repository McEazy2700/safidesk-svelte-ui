export const STATUS_NAMES: Record<number, string> = {
  1: "open",
  2: "reopened",
  3: "resolved",
  4: "closed",
  5: "duplicate",
};

export const PRIORITY_NAMES: Record<number, string> = {
  1: "critical",
  2: "high",
  3: "normal",
  4: "low",
  5: "very_low",
};

export const PRIORITY_COLORS: Record<number, string> = {
  1: "text-red-600",
  2: "text-orange-500",
  3: "text-blue-500",
  4: "text-green-500",
  5: "text-gray-400",
};

export const TICKET_RESPONSE_DURATIONS: Record<number, number> = {
  1: 2,
  2: 3,
  3: 3,
};
