<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import IconParkOutlineSearch from '../icons/icon-park-outline-search.svelte';

	let props: HTMLInputAttributes = $props();
</script>

<label class={twMerge('validator input bg-white/10 text-white', String(props.class ?? ''))}>
	<IconParkOutlineSearch />
	<input {...props} type="search" placeholder={props.placeholder ?? 'Search...'} />
</label>
