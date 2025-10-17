<script>
	import ABarChart from '$lib/components/atoms/a-bar-chart.svelte';
	import ANewButton from '$lib/components/atoms/a-new-button.svelte';
	import APieChart from '$lib/components/atoms/a-pie-chart.svelte';
	import ATopHeaderScreen from '$lib/components/atoms/a-top-header-screen.svelte';
	import DevToolsRepair from '$lib/components/icons/dev-tools-repair.svelte';
	import FlowbiteDatabaseSolid from '$lib/components/icons/flowbite-database-solid.svelte';
	import MajesticBox from '$lib/components/icons/majestic-box.svelte';
	import MingcuteLaptopFill from '$lib/components/icons/mingcute-laptop-fill.svelte';
	import MSummaryCountItem from '$lib/components/molecules/m-summary-count-item.svelte';
</script>

<ATopHeaderScreen>
	{#snippet header()}
		<div class="flex w-full items-center justify-between">
			<h3 class="text-xl font-semibold text-primary capitalize">Assets Dahboard</h3>
			<ANewButton href="/app/assistance/tickets/lists/new" label="New Asset" />
		</div>
	{/snippet}

	<div class="flex w-full flex-col gap-8">
		<div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
			<MSummaryCountItem
				icon={FlowbiteDatabaseSolid}
				showTrend
				label="Total Assets"
				count={1230}
				lastMonthCount={0}
				primary
			/>
			<MSummaryCountItem
				icon={MingcuteLaptopFill}
				showTrend
				label="Deployed Assets"
				lastMonthCount={0}
				count={890}
			/>
			<MSummaryCountItem
				icon={MajesticBox}
				showTrend
				label="Assets in Storage"
				lastMonthCount={0}
				count={200}
			/>
			<MSummaryCountItem icon={DevToolsRepair} showTrend label="Assets in Repair" count={30} />
		</div>
		<div class="flex flex-col gap-6 xl:flex-row">
			<div class="w-full flex-1 rounded-xl bg-white p-4">
				<h4 class="text-lg font-bold">Assets by Status</h4>
				<APieChart
					height={300}
					data={[
						{ label: 'Deployed', value: 890, color: '#39bc6f' },
						{ label: 'In Repair', value: 30, color: '#e67900' },
						{ label: 'In Storage', value: 200 }
					]}
				/>
			</div>
			<div class="w-full flex-1 rounded-xl bg-white p-4">
				<h4 class="text-lg font-bold">Assets by Status</h4>
				<ABarChart
					height={300}
					width={800}
					labels={['Laptops', 'Monitors', 'Desktop CPUs', 'Headphonses', 'Software']}
					datasets={[
						{ label: 'Deployed', data: [45, 35, 65, 40, 55], color: '#39bc6f' },
						{ label: 'In Storage', data: [30, 28, 38, 32, 35], color: '#e67900' },
						{ label: 'Expired', data: [19, 6, 28, 0, 12], color: '#fe2752' }
					]}
				/>
			</div>
		</div>
		<div class="flex flex-col gap-6 xl:flex-row">
			<div class="flex w-full flex-1 flex-col gap-3 rounded-xl bg-white p-4">
				<h4 class="text-lg font-bold">Assets by Status</h4>
				<div class="flex flex-col gap-1 rounded-xl bg-base-200 p-2 px-4">
					<span class="text-error">Dell XPS 12 (Expired)</span>
					<span>HP Monitor P24 (Nov 15, 2025)</span>
				</div>
			</div>
			<div class="flex w-full flex-1 flex-col gap-3 rounded-xl bg-white p-4">
				<h4 class="text-lg font-bold">Recently Added</h4>
				<div class="flex flex-col gap-1 rounded-xl bg-base-200 p-2 px-4">
					<span>Cisco Router 4300 (Oct 16, 2025)</span>
					<span>Microsoft Office 2025 License (Sep 28, 2025)</span>
				</div>
			</div>
		</div>
	</div>
</ATopHeaderScreen>
