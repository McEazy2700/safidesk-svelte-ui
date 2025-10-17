<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { cast } from '$lib/utils/typing';
	import CharmPlus from '../icons/charm-plus.svelte';

	type Props = {
		href: Pathname;
		label: string;
	};

	let { href, label }: Props = $props();
</script>

<div>
	<a href={resolve(cast<any>(href))} class="btn flex items-center rounded-full btn-lg btn-info">
		<CharmPlus />
		<span>{label}</span>
	</a>
</div>
