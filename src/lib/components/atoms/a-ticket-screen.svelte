<script lang="ts">
	import type { Snippet } from 'svelte';
	type Props = {
		header?: Snippet;
		children?: Snippet;
	};
	let { header, children }: Props = $props();
</script>

<div class="h-full overflow-hidden">
	<div class="flex h-[80px] items-center border-b border-black/10 p-2 px-4">
		{@render header?.()}
	</div>
	<div class="relative h-[calc(100%-70px)]">
		<div class="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
			<img src="/images/logo.png" alt="logo" class="aspect-square w-[60%] opacity-20" />
		</div>

		<div class="relative z-10 h-full overflow-y-auto p-4">
			<div class="flex flex-col gap-4">
				{@render children?.()}
			</div>
		</div>
	</div>
</div>
