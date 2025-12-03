import type { PolicyType } from "$lib/types/policy";

export const dummyPolicies: PolicyType[] = [
  {
    policyName: "Critical Hardware Failure",
    priority: 'High',
    responseTime: 15,
    resolutionTime: 4,
    escalationRule: "Notify",
    calenderHours: "24/7",
    notificationOption: "Email",
    notificationTime: 5,
    preBreachLabel: true,
    responseTimeMetric: "Seconds",
    resolutionTimeMetric: "Minutes",
  },

  {
    policyName: "Standard Software Inquiry",
    priority: 'Medium',
    responseTime: 1,
    resolutionTime: 24,
    escalationRule: "None",
    calenderHours: "24/7",
    notificationOption: "Email",
    notificationTime: 45,
    preBreachLabel: true,
    responseTimeMetric: "Minutes",
    resolutionTimeMetric: "Hours",
  },

  {
    policyName: "Password Reset Request",
    priority: 'Low',
    responseTime: 4,
    resolutionTime: 48,
    escalationRule: "None",
    calenderHours: "Business Hours (Mon-Fri 8-4)",
    notificationOption: "Whatsapp",
    notificationTime: 30,
    preBreachLabel: true,
    responseTimeMetric: "Minutes",
    resolutionTimeMetric: "Hours",
  }
]
