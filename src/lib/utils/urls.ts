export function slugify(text: string): string {
  return text.toLowerCase().split(" ").join("-")
}
