import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
	input: "http://35.222.70.109/swagger/?format=openapi",
	output: "src/lib/services/api",
});
