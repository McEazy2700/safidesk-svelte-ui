<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { cast } from '$lib/utils/typing';
	import CharmPlus from '../icons/charm-plus.svelte';
	import { goto } from '$app/navigation';

	type Props = {
		href?: Pathname;
		label: string;
		className?: string;
		onclick?: () => void;
	};

	let { href, label, className, onclick }: Props = $props();

	function handleClick() {
		if (href) {
			goto(resolve(cast<any>(href)));
		} else {
			onclick?.();
		}
	}
</script>

<div>
	<button
		onclick={handleClick}
		class={className + ' ' + 'btn flex items-center rounded-full btn-lg btn-info'}
	>
		<CharmPlus />
		<span>{label}</span>
	</button>
</div>
