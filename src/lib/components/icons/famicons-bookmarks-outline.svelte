<script lang="ts">
	import type { SvgProps } from '$lib/types/svg';

	let props: SvgProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={props.size ?? '24'}
	height={props.size ?? '24'}
	viewBox="0 0 512 512"
	class={props.class}
>
	<path
		fill="none"
		stroke="currentColor"
		stroke-linejoin="round"
		stroke-width="32"
		d="M128 80V64a48.14 48.14 0 0 1 48-48h224a48.14 48.14 0 0 1 48 48v368l-80-64"
	/>
	<path
		fill="none"
		stroke="currentColor"
		stroke-linejoin="round"
		stroke-width="32"
		d="M320 96H112a48.14 48.14 0 0 0-48 48v352l152-128l152 128V144a48.14 48.14 0 0 0-48-48Z"
	/>
</svg>
