<script lang="ts">
	import type { SvgProps } from '$lib/types/svg';

	let props: SvgProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={props.size ?? '24'}
	height={props.size ?? '24'}
	viewBox="0 0 32 32"
	class={props.class}
	tabindex="0"
	role="button"
>
	<path
		fill="none"
		stroke="#fff"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="M5 8h22M5 16h22M5 24h22"
	/>
</svg>
