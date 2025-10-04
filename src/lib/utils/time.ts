export function formatToMonthDay(
  datetimeString?: string | null,
): string | null {
  if (!datetimeString) return null;
  const date = new Date(datetimeString);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function formatToFullDateTime(
  datetimeString?: string | Date | null,
): string | null {
  if (!datetimeString) return null;
  const date = new Date(datetimeString);

  const options: Intl.DateTimeFormatOptions = {
    month: "numeric",
    day: "2-digit",
    year: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hourCycle: "h12",
    timeZoneName: "shortOffset",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  let formatted = formatter.format(date);

  formatted = formatted.replace(",", "").replace(/\s+/, " ");
  const parts = formatted.split(" ");

  const ampmPart = parts[2];
  let zonePart = parts[3];

  if (!zonePart && ampmPart && ampmPart.length > 2) {
    zonePart = ampmPart.substring(ampmPart.length - 3);
  }

  const month = date.getMonth() + 1;
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);
  const hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, "0");

  const hour12 = hour % 12 || 12;

  const datePartFinal = `${month}/${day}/${year}`;
  const timePartFinal = `${hour12}:${minute}`;

  const zoneFormatter = new Intl.DateTimeFormat("en-US", {
    timeZoneName: "short",
    hourCycle: "h24",
    year: "numeric",
  });
  const zonePartFinal =
    zoneFormatter.formatToParts(date).find((p) => p.type === "timeZoneName")
      ?.value ?? "GMT";

  return `${datePartFinal} ${timePartFinal} ${zonePartFinal}`;
}

export function formatToFriendlyDateTime(
  datetimeString?: string | Date | null,
): string | null {
  if (!datetimeString) return null;
  const date = new Date(datetimeString);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function getFutureDate(days?: number): Date {
  const today = new Date();

  if (days && days > 0) {
    today.setDate(today.getDate() + days);
  }

  return today;
}
