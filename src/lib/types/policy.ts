export type PriorityType = "Low" | "Medium" | "High";
export type TimeMetricType = "Hours" | "Minutes" | "Days";
export type CalenerHourOptionsType = "24/7" | "Business Hours (Mon-Fri 8-4)";

export type PolicyType = {
  policyName: string;
  responseTime: number;
  priority: PriorityType;
  resolutionTime: number;
  escalationRule: string;
  preBreachLabel: boolean;
  notificationTime: number;
  notificationOption: string;
  responseTimeMetric: TimeMetricType;
  resolutionTimeMetric: TimeMetricType;
  calenderHours: CalenerHourOptionsType;
};
