<script>
	import ANewButton from '$lib/components/atoms/a-new-button.svelte';
	import ASearchInput from '$lib/components/atoms/a-search-input.svelte';
	import ATopHeaderScreen from '$lib/components/atoms/a-top-header-screen.svelte';
	import CharmPlus from '$lib/components/icons/charm-plus.svelte';
	import MiDelete from '$lib/components/icons/mi-delete.svelte';

	let formOpen = $state(false);

	const MOCK = [
		'Auto-Assign Hardware to IT Support',
		'Some other automation',
		'Another automation'
	];
</script>

<ATopHeaderScreen>
	{#snippet header()}
		<div class="flex w-full items-center justify-between">
			<h1 class="text-3xl font-bold text-base-content/70">Automation Rules</h1>
			<ANewButton
				onclick={() => {
					formOpen = !formOpen;
				}}
				label="Create New Rule"
			/>
		</div>
	{/snippet}
	<div class="flex flex-row items-start gap-6">
		<div class="flex-[0.9] rounded-2xl border border-black/10 bg-white">
			<div class="border-b border-black/5 p-4">
				<h4 class="mb-4 text-lg font-bold">Rules</h4>
				<ASearchInput class="text-black" placeholder="Search rules..." />
			</div>
			<ul class="list w-full rounded-box shadow-md">
				{#each MOCK as item, index (index)}
					<li class="list-row flex w-full">
						<div class="flex min-w-full flex-row justify-between">
							<p>{item}</p>
							<input type="checkbox" class="toggle toggle-info" />
						</div>
					</li>
				{/each}
			</ul>
		</div>
		<form
			action=""
			class="flex flex-2 flex-col gap-4 rounded-2xl border border-black/10 bg-white p-4"
		>
			<fieldset class="fieldset w-full">
				<legend class="fieldset-legend">Rule Name</legend>
				<input type="text" class="input w-full" placeholder="My New Rule..." />
			</fieldset>
			<fieldset class="fieldset w-full rounded-box border border-base-300 p-4">
				<p class="text-lg font-bold">When</p>
				<div class="flex flex-row items-center gap-4">
					<p class="text-lg text-primary">A Ticket is</p>
					<select class="select">
						<option disabled selected>Pick a condition</option>
						<option>Created</option>
						<option>Updated</option>
						<option>Deleted</option>
					</select>
				</div>
			</fieldset>
			<fieldset class="fieldset w-full rounded-box border border-base-300 p-4">
				<p class="mb-4 text-lg font-bold">If All the following conditions are met:</p>
				<div class="flex flex-row items-center gap-4">
					<div class="flex flex-1 flex-row items-center gap-4">
						<select class="select flex-1">
							<option disabled selected>Pick a property</option>
							<option>Category</option>
							<option>Location</option>
							<option>Priority</option>
						</select>
						<select class="select flex-1">
							<option disabled selected>Pick a condition</option>
							<option>Is</option>
							<option>Is Not</option>
						</select>
						<select class="select flex-1">
							<option disabled selected>Pick a value</option>
							<option>Hardware</option>
							<option>Software</option>
							<option>General</option>
						</select>
					</div>
					<button class="text-error">
						<MiDelete />
					</button>
				</div>
				<button class="mt-4 flex max-w-fit items-start rounded-xl border border-black/10 p-2 px-4">
					<div class="flex items-center text-info">
						<CharmPlus /> <span>Add Condition</span>
					</div>
				</button>
			</fieldset>
			<fieldset class="fieldset w-full rounded-box border border-base-300 p-4">
				<p class="mb-4 text-lg font-bold">Then perform these actions:</p>
				<div class="flex flex-row items-center gap-4">
					<div class="flex flex-1 flex-row items-center gap-4">
						<select class="select flex-1">
							<option disabled selected>Pick an action</option>
							<option>Assign Team</option>
							<option>Set Priority</option>
						</select>
						<p>to</p>
						<select class="select flex-1">
							<option disabled selected>Pick a value</option>
							<option>It Support</option>
							<option>Hardware</option>
						</select>
					</div>
					<button class="text-error">
						<MiDelete />
					</button>
				</div>
				<button class="mt-4 flex max-w-fit items-start rounded-xl border border-black/10 p-2 px-4">
					<div class="flex items-center text-info">
						<CharmPlus /> <span>Add Action</span>
					</div>
				</button>
			</fieldset>
		</form>
	</div>
</ATopHeaderScreen>
