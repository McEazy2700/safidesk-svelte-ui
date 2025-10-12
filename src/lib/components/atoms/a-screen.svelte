<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
	};

	let { children }: Props = $props();
</script>

<div class="h-[calc(100vh-70px)] overflow-y-auto">
	{@render children?.()}
</div>
