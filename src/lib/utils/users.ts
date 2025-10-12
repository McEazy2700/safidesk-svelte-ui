import type { UserResponseData } from "$lib/types/api/auth";

export function getUserType(user: UserResponseData) {
  if (user.user.is_staff) {
    return "admin";
  }
  if (!user.user.is_staff && !user.groups && !user.queues) {
    return "user";
  }
  return "staff";
}
