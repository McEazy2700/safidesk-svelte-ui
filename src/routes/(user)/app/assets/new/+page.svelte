<script>
	import ACalendarInput from '$lib/components/atoms/a-calendar-input.svelte';
	import ASearchInput from '$lib/components/atoms/a-search-input.svelte';
	import ATiptap from '$lib/components/atoms/a-tiptap.svelte';
	import ATopHeaderScreen from '$lib/components/atoms/a-top-header-screen.svelte';
	import { ASSET_CATEGORIES, ASSET_STATUS } from '$lib/constants/assets';
</script>

<ATopHeaderScreen>
	{#snippet header()}
		<div class="flex w-full items-center justify-between">
			<h3 class="text-xl font-semibold text-primary capitalize">New Asset</h3>
			<button class="btn rounded-full btn-primary">Save</button>
		</div>
	{/snippet}
	<div class="grid gap-4 lg:grid-cols-2">
		<div class="rounded-xl bg-white p-4">
			<h3 class="border-b border-black/10 pb-2">Core Asset Details</h3>
			<div class="flex gap-4 2xl:flex-row">
				<fieldset class="fieldset flex-1">
					<legend class="fieldset-legend">Asset Name</legend>
					<input type="text" class="input w-full" placeholder="Lenovo Legion 10" />
				</fieldset>
				<fieldset class="fieldset flex-1">
					<legend class="fieldset-legend">Category</legend>
					<select class="select w-full">
						<option disabled selected>Select Category</option>
						{#each Object.keys(ASSET_CATEGORIES) as category, index (index)}
							<option>{category}</option>
						{/each}
					</select>
				</fieldset>
			</div>
			<div class="flex gap-4 2xl:flex-row">
				<fieldset class="fieldset flex-1">
					<legend class="fieldset-legend">Status</legend>
					<select class="select w-full">
						<option disabled selected>Select Status</option>
						{#each ASSET_STATUS as status, index (index)}
							<option>{status}</option>
						{/each}
					</select>
				</fieldset>
				<fieldset class="fieldset flex-1">
					<legend class="fieldset-legend">Manufacturer</legend>
					<input type="text" class="input w-full" placeholder="Lenovo" />
				</fieldset>
			</div>
			<div class="flex gap-4 2xl:flex-row">
				<fieldset class="fieldset flex-1">
					<legend class="fieldset-legend">Model</legend>
					<input type="text" class="input w-full" placeholder="Legion 10" />
				</fieldset>
				<fieldset class="fieldset flex-1">
					<legend class="fieldset-legend">Serial Number</legend>
					<input type="text" class="input w-full" placeholder="098402" />
				</fieldset>
			</div>
		</div>
		<div class="rounded-xl bg-white p-4">
			<h3 class="border-b border-black/10 pb-2">Financial & Assignment Details</h3>
			<div class="flex gap-4 2xl:flex-row">
				<fieldset class="fieldset flex-1">
					<legend class="fieldset-legend">Assigned To</legend>
					<ASearchInput placeholder="Search assignee..." class="w-full text-black" />
				</fieldset>
				<fieldset class="fieldset flex-1">
					<legend class="fieldset-legend">Department</legend>
					<input type="text" class="input w-full" placeholder="Human Resources" />
				</fieldset>
			</div>
			<div class="flex gap-4 2xl:flex-row">
				<fieldset class="fieldset flex-1">
					<legend class="fieldset-legend">Purchase Date</legend>
					<ACalendarInput />
				</fieldset>
				<fieldset class="fieldset flex-1">
					<legend class="fieldset-legend">Purchase Cost (₦)</legend>
					<input type="number" class="input w-full" placeholder="1,200,000" />
				</fieldset>
			</div>
		</div>
		<div class="flex flex-col gap-4 rounded-xl bg-white p-4 lg:col-span-2">
			<h3 class="border-b border-black/10 pb-2">Description</h3>
			<ATiptap hideSend />
		</div>
	</div>
</ATopHeaderScreen>
