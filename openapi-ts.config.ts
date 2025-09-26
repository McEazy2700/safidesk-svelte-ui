import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "https://itmsmvp-production.up.railway.app/swagger/?format=openapi",
  output: "src/lib/services/api",
});
