<script>
	import ANewButton from '../atoms/a-new-button.svelte';
	import ATopHeaderScreen from '../atoms/a-top-header-screen.svelte';
	import CharmPlus from '../icons/charm-plus.svelte';
	import MaterialSymbolFolderOpenRounded from '../icons/material-symbol-folder-open-rounded.svelte';
	import MStaffTable from '../molecules/m-staff-table.svelte';
	import MSummaryCountItem from '../molecules/m-summary-count-item.svelte';
</script>

<ATopHeaderScreen>
	{#snippet header()}
		<div class="flex w-full items-center justify-between">
			<h3 class="text-2xl font-bold text-primary capitalize">Admin Dashboard</h3>
			<div class="flex flex-row gap-2">
				<button class="btn items-center rounded-4xl btn-outline btn-lg">Cancel</button>
				<ANewButton href="/app/assets/" label="New Staff" />
			</div>
		</div>
	{/snippet}
	<div>
		<div class="grid flex-[1.5] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2">
			<MSummaryCountItem primary showTrend label="Total Users" count={2304} lastMonthCount={0} />
			<MSummaryCountItem showTrend label="Total Staff" count={506} lastMonthCount={0} />
			<MSummaryCountItem showTrend label="Total Assets" count={3029} lastMonthCount={0} />
			<MSummaryCountItem showTrend label="Total Tickets" count={3029} lastMonthCount={0} />
		</div>
		<div class="mt-4 grid w-full grid-cols-2 gap-2">
			<div class="flex flex-col gap-2 rounded-xl bg-white p-4">
				<h3 class="mb-2 text-xl font-bold">Quick Actions</h3>
				<div class="grid grid-rows-2 gap-4">
					<div class="flex flex-row gap-2">
						<button class="btn"><CharmPlus size={15} /> Add New staff</button>
						<button class="btn"
							><MaterialSymbolFolderOpenRounded size={20} /> Manslen Settings</button
						>
					</div>
					<div class="flex flex-row gap-2">
						<button class="btn btn-primary"><CharmPlus size={15} /> Add New Roles</button>
						<button class="btn btn-primary"
							><MaterialSymbolFolderOpenRounded size={20} /> System Settings</button
						>
					</div>
				</div>
			</div>
			<div class="flex flex-col gap-2 rounded-xl bg-white p-4">
				<h3 class="mb-2 text-xl font-bold">Recent Admin Activity</h3>
				<div class="flex-1 rounded-xl bg-base-100 p-2">
					<div class="w-50">
						<span class="font-light">Setting Changed: Email notifications updated </span>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-4 rounded-xl bg-white p-4">
			<h3 class="text-xl font-bold">Staff Overview</h3>
			<MStaffTable />
		</div>
	</div>
</ATopHeaderScreen>
