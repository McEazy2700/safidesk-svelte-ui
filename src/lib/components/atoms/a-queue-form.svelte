<script lang="ts">
	import { QueueMutation } from '$lib/services/utils/mutations/queue.svelte';
	import { slugify } from '$lib/utils/urls';
	import CharmPlus from '../icons/charm-plus.svelte';

	let title = $state('');
	let slug = $derived(slugify(title));

	function handleCreate() {
		QueueMutation.create({
			title,
			slug
		});
	}
</script>

<details class="dropdown dropdown-end">
	<summary class="btn rounded-full btn-outline btn-sm btn-info">
		<CharmPlus />
		<span>Add Queue</span>
	</summary>
	<div
		class="dropdown-content menu z-1 w-lg rounded-box border border-black/10 bg-white p-2 shadow-sm"
	>
		<div class="flex flex-col gap-4 p-2">
			<span class="text-xl font-semibold">Create Queue</span>
			<div class="flex flex-col gap-2">
				<input bind:value={title} class="input w-full" type="text" placeholder="Title..." />
				<input disabled value={slug} class="input w-full" type="text" placeholder="Slug..." />
				<button onclick={handleCreate} type="button" class="btn mt-4 btn-primary">
					{#if QueueMutation.loading}
						<span class="loading"></span>
					{:else}
						Save
					{/if}
				</button>
			</div>
		</div>
	</div>
</details>
