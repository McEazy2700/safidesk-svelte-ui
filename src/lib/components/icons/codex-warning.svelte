<script lang="ts">
	import type { SvgProps } from '$lib/types/svg';

	let props: SvgProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={props.size ?? '24'}
	height={props.size ?? '24'}
	viewBox="0 0 24 24"
	class={props.class}
>
	<g fill="none" stroke="currentColor" stroke-width="2">
		<rect width="14" height="14" x="5" y="5" rx="4" />
		<path stroke-linecap="round" d="M12 9v3m0 3.02v-.01" />
	</g>
</svg>
