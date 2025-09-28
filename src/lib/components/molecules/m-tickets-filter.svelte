<script lang="ts">
	import { goto } from '$app/navigation';
	import FemiconsFilter from '../icons/femicons-filter.svelte';
	import MageFilter from '../icons/mage-filter.svelte';
	import MynauiUndoSolid from '../icons/mynaui-undo-solid.svelte';
	import { page } from '$app/state';
	import { cast } from '$lib/utils/typing';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import ATicketStatusDropdown from '../atoms/a-ticket-status-dropdown.svelte';
	import ATicketPriorityDropdown from '../atoms/a-ticket-priority-dropdown.svelte';

	let status = $state<number>();
	let priority = $state<number>();

	function apply() {
		const newPath = page.url.pathname;
		const queryParams = page.url.searchParams;
		if (status) {
			queryParams.set('status', status.toString());
		} else {
			queryParams.delete('status');
		}
		if (priority) {
			queryParams.set('priority', priority.toString());
		} else {
			queryParams.delete('priority');
		}
		goto(resolve(cast<Pathname>(`${newPath}?${queryParams.toString()}`)));
	}
</script>

<div class="dropdown">
	<div tabindex="0" role="button" class="btn m-1 px-1 text-base-content/60 btn-ghost btn-sm">
		<MageFilter />
		<span class="sr-only">Filter Tickets</span>
	</div>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<div
		tabindex="0"
		class="dropdown-content w-lg rounded-box border border-black/5 bg-white shadow-sm"
	>
		<div class="p-4">
			<div class="flex w-full items-center justify-between">
				<div class="flex items-center gap-2 text-sm whitespace-nowrap">
					<FemiconsFilter size={20} />
					<span class="font-semibold text-primary">Tickets Filter</span>
				</div>
				<button
					onclick={() => {
						status = undefined;
						priority = undefined;
						apply();
					}}
					type="button"
					class="btn flex items-center gap-2 text-sm whitespace-nowrap btn-ghost btn-sm"
				>
					<MynauiUndoSolid size={20} />
					<span>Reset</span>
				</button>
			</div>
			<div class="mt-4 min-h-[40vh]">
				<ATicketStatusDropdown bind:status />
				<ATicketPriorityDropdown bind:priority />
			</div>
		</div>
		<div class="flex w-full justify-end border-t border-black/10 p-2">
			<button onclick={apply} type="button" class="btn btn-info">Apply</button>
		</div>
	</div>
</div>
