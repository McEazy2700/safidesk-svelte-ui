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
	<path
		fill="none"
		stroke="#009ed7"
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M5.5 5.5h15.857v15.857H5.5zm19.07 7.928l10-10l10 10l-10 10zM5.5 26.643h15.857V42.5H5.5zm21.143 0H42.5V42.5H26.643z"
		stroke-width="1"
	/>
</svg>
