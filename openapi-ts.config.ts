import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "https://itmsmvp-81072574537.europe-west1.run.app/swagger/?format=openapi",
  output: "src/lib/services/api",
});
