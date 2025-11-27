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
	<path
		fill="none"
		stroke="#000"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="m7 10l5 5m0 0l5-5"
	/>
</svg>
