<script>
	import ANewPolicyForm from '$lib/components/atoms/a-new-policy-form.svelte';
	import ATopHeaderScreen from '$lib/components/atoms/a-top-header-screen.svelte';
	import CharmPlus from '$lib/components/icons/charm-plus.svelte';
	import LightClose from '$lib/components/icons/light-close.svelte';
	import { getSlaFormState } from '$lib/stores/forms/sla.svelte';
	import { dummyPolicies } from '$lib/utils/dummy/policy';

	const formState = getSlaFormState();
</script>

<ATopHeaderScreen>
	{#snippet header()}
		<div class="flex w-full items-center justify-between">
			<h1 class="text-3xl font-bold text-base-content/70">Service Level Agreement (SLAs)</h1>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<label
				onclick={() => {
					formState.currentPolicy = undefined;
				}}
				for="my-drawer-5"
				class="drawer-button btn btn-primary"><CharmPlus /> Create New Policy</label
			>
		</div>
	{/snippet}
	<div class="drawer drawer-end">
		<input id="my-drawer-5" bind:checked={formState.edit} type="checkbox" class="drawer-toggle" />
		<div class="drawer-side">
			<label for="my-drawer-5" aria-label="close sidebar" class="drawer-overlay"></label>
			<div class="menu min-h-full w-[50%] bg-base-200 p-4">
				<div>
					<div
						class="mb-5 flex h-[50px] w-full items-center justify-between border-b border-black/10"
					>
						<h1 class="text-3xl font-bold text-base-content/70">Define New SLA Policy</h1>
						<label for="my-drawer-5" aria-label="close sidebar">
							<LightClose />
						</label>
					</div>
					<ANewPolicyForm />
					<div class="flex flex-row justify-end gap-4">
						<label for="my-drawer-5" aria-label="close sidebar" class="btn bg-gray-300"
							>Cancel</label
						>
						<button class="btn btn-primary">Save Policy</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="flex flex-row">
		<div class="flex-3 rounded-lg bg-white p-4">
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
					{#each dummyPolicies as policy}
						<tr
							class="cursor-pointer transition-all hover:bg-base-200/50"
							onclick={() => {
								formState.setCurrentPolicy(policy);
								formState.toggleEdit();
							}}
						>
							<td><label for="my-drawer-5" class="drawer-button">{policy.policyName}</label></td>
							<td><label for="my-drawer-5" class="drawer-button">{policy.priority}</label></td>
							<td
								><label for="my-drawer-5" class="drawer-button">{policy.responseTime} Mins</label
								></td
							>
							<td
								><label for="my-drawer-5" class="drawer-button">{policy.resolutionTime} Hours</label
								></td
							>
							<td><label for="my-drawer-5" class="drawer-button">{policy.escalationRule}</label></td
							>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</ATopHeaderScreen>
