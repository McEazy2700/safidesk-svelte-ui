<script>
	import ANewButton from '$lib/components/atoms/a-new-button.svelte';
	import ANewPolicyForm from '$lib/components/atoms/a-new-policy-form.svelte';
	import ATopHeaderScreen from '$lib/components/atoms/a-top-header-screen.svelte';
	import CharmPlus from '$lib/components/icons/charm-plus.svelte';
	import LightClose from '$lib/components/icons/light-close.svelte';

	let newPolicy = $state(false);
</script>

<ATopHeaderScreen>
	{#snippet header()}
		<div class="flex w-full items-center justify-between">
			<h1 class="text-3xl font-bold text-base-content/70">Service Level Agreement (SLAs)</h1>
			<label for="my-drawer-5" class="drawer-button btn btn-primary"
				><CharmPlus /> Create New Policy</label
			>
		</div>
	{/snippet}
	<div class="drawer drawer-end">
		<input id="my-drawer-5" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<!-- Page content here -->
		</div>
		<div class="drawer-side">
			<label for="my-drawer-5" aria-label="close sidebar" class="drawer-overlay"></label>
			<div class="menu min-h-full w-[50%] bg-base-200 p-4">
				<!-- Sidebar content here -->
				<div>
					<div
						class="mb-5 flex h-[50px] w-full items-center justify-between border-b border-black/10"
					>
						<h1 class="text-3xl font-bold text-base-content/70">Define New SLA Policy</h1>
						<LightClose />
					</div>
					<ANewPolicyForm />
				</div>
			</div>
		</div>
	</div>

	<div class="rounded-lg bg-white p-4">
		<table class="table">
			<thead>
				<tr>
					<th>POLICY NAME</th>
					<th>TARGET PRIORITY</th>
					<th>RESPONSE TIME</th>
					<th>RESOLUTION TIME</th>
					<th>RESOLUTION RULE</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Critical Hardware Failure</td>
					<td>High</td>
					<td>13 Mins</td>
					<td>4 Hours</td>
					<td>Notify</td>
				</tr>
				<tr>
					<td>Standard Software Inquiry</td>
					<td>Medium</td>
					<td>1 Hour</td>
					<td>24 Hours</td>
					<td>None</td>
				</tr>
				<tr>
					<td>Password Reset Request</td>
					<td>Low</td>
					<td>4 Hours</td>
					<td>48 Hours</td>
					<td>None</td>
				</tr>
			</tbody>
		</table>
	</div>
</ATopHeaderScreen>
