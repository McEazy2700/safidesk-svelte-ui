import { Toast } from "$lib/stores/toast.svelte";
import { capitalize } from "./text";

export function handleError(err: any) {
  console.log(err);
  Object.keys(err).forEach((v) => {
    const val = err[v];
    console.log(v, val);
    if (Array.isArray(val)) {
      val.forEach((i) => {
        if (typeof i === "string") {
          console.log(i);
          Toast.append({
            type: "error",
            message: `${capitalize(String(v).split("_").join(" "))}: ${i}`,
          });
        }
      });
    }
  });
}
