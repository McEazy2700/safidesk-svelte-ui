<script lang="ts">
	import type { SvgProps } from '$lib/types/svg';

	let props: SvgProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={props.size ?? '24'}
	height={props.size ?? '24'}
	viewBox="0 0 48 48"
	class={props.class}
>
	<g fill="none" stroke="#009ed7" stroke-width="4">
		<path stroke-linecap="round" d="M4 7h40M4 23h11M4 39h11" />
		<path d="M31.5 34a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17Z" />
		<path stroke-linecap="round" d="m37 32l7 7.05" />
	</g>
</svg>
