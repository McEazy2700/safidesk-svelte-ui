import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
	input: "https://itms-mvp.onrender.com/swagger/?format=openapi",
	output: "src/lib/services/api",
});
