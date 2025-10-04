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
	<g
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="1.5"
	>
		<path d="m3 7l6 6l4-4l8 8" />
		<path d="M17 17h4v-4" />
	</g>
</svg>
