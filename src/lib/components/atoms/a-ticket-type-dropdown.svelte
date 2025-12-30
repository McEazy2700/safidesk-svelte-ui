<script lang="ts">
	import { TICKET_TYPES } from '$lib/constants/tickets';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		disabled?: boolean;
		ticketType?: string;
	};
	let { disabled, ticketType = $bindable() }: Props = $props();
</script>

<div
	class={twMerge(
		'dropdown w-full',
		disabled && 'pointer-events-none cursor-not-allowed text-base-content/60'
	)}
>
	<div
		tabindex="0"
		role="button"
		class="btn m-1 w-full justify-start border-black/10 bg-white btn-outline"
	>
		<span class="border-r border-black/10 pr-4">Ticket Type</span>
		<span class="pl-4 capitalize">{ticketType}</span>
	</div>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<ul tabindex="0" class="dropdown-content menu z-1 w-full rounded-box bg-base-100 p-2 shadow-sm">
		{#each TICKET_TYPES as ticket, index (index)}
			<li>
				<button onclick={() => (ticketType = ticket)} type="button" class="capitalize">
					{ticket}
				</button>
			</li>
		{/each}
	</ul>
</div>
