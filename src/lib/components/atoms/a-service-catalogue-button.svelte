<script lang="ts">
	import CicsProgram from '../icons/cics-program.svelte';
	import Cog from '../icons/cog.svelte';
	import LaptopMacOutline from '../icons/laptop-mac-outline.svelte';
	import Padlock from '../icons/padlock.svelte';

	export type CatalogueChoiceType = 'hardware' | 'software' | 'general' | 'access';

	type Props = {
		onClick?: () => void;
		selected: CatalogueChoiceType;
		choice: CatalogueChoiceType;
		label: string;
	};

	let { choice, selected, label, onClick }: Props = $props();
</script>

<button
	onclick={onClick}
	data-active={selected === choice}
	class="flex flex-1 flex-col items-center justify-center gap-2 overflow-hidden rounded border border-base-300 bg-white p-3 px-8 data-[active=true]:bg-primary data-[active=true]:text-white"
>
	{#if choice === 'hardware'}
		<LaptopMacOutline size={30} />
	{:else if choice === 'software'}
		<CicsProgram size={30} />
	{:else if choice === 'access'}
		<Padlock size={30} />
	{:else}
		<Cog size={30} />
	{/if}
	<p class="text-sm font-semibold whitespace-nowrap">{label}</p>
</button>
