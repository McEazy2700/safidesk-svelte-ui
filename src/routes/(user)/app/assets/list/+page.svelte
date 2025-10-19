<script>
	import ANewButton from '$lib/components/atoms/a-new-button.svelte';
	import ASearchInput from '$lib/components/atoms/a-search-input.svelte';
	import ATopHeaderScreen from '$lib/components/atoms/a-top-header-screen.svelte';
	import MAssetsTable from '$lib/components/molecules/m-assets-table.svelte';
	import { ASSET_CATEGORIES, ASSET_STATUS } from '$lib/constants/assets';
</script>

<ATopHeaderScreen>
	{#snippet header()}
		<div class="flex w-full items-center justify-between">
			<h3 class="text-xl font-semibold text-primary capitalize">Assets</h3>
			<ANewButton href="/app/assets/new" label="New Asset" />
		</div>
	{/snippet}
	<div class="flex flex-col gap-4 xl:flex-row">
		<div class="flex flex-[1.5] flex-col gap-4">
			<ASearchInput class="w-full bg-white text-base-content" />
			<MAssetsTable />
		</div>
		<div class="flex-1 rounded-xl bg-white p-4">
			<h3 class="border-b border-black/10 pb-4 font-semibold">Filters</h3>
			<div class="mt-2 flex flex-col gap-2">
				<h4 class="font-bold">Category</h4>
				<div class="flex flex-col gap-2">
					{#each Object.keys(ASSET_CATEGORIES) as category, index (index)}
						<div class="flex flex-row gap-2">
							<input type="checkbox" class="checkbox" />
							<span>{category}</span>
						</div>
					{/each}
				</div>
			</div>
			<div class="mt-4 flex flex-col gap-2">
				<h4 class="font-bold">Status</h4>
				<div class="flex flex-col gap-2">
					{#each Object.values(ASSET_STATUS) as status, index (index)}
						<div class="flex flex-row gap-2">
							<input type="checkbox" class="checkbox" />
							<span>{status}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</ATopHeaderScreen>
