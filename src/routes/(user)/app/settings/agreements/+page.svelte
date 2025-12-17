<script>
	import ANewButton from '$lib/components/atoms/a-new-button.svelte';
	import MNewPolicyForm from '$lib/components/molecules/m-new-policy-form.svelte';
	import ATopHeaderScreen from '$lib/components/atoms/a-top-header-screen.svelte';
	import { PRIORITY_NAMES } from '$lib/constants/tickets';
	import { SlaMutations } from '$lib/services/utils/mutations/policies.svelte';
	import { getSlaFormState } from '$lib/stores/forms/sla.svelte';
	import { SlaPoliciesStore } from '$lib/stores/queries/policies.svelte';
	import { twMerge } from 'tailwind-merge';

	const formState = getSlaFormState();

	$effect(() => {
		SlaPoliciesStore.loadInitial();
	});

	const handleSave = () => {
		SlaMutations.save(formState.current, formState.current.id);
	};
</script>

<ATopHeaderScreen>
	{#snippet header()}
		<div class="flex w-full items-center justify-between">
			<h1 class="text-3xl font-bold text-base-content/70">Service Level Agreement (SLAs)</h1>
			<ANewButton
				onclick={() => {
					formState.clearCurrent();
					formState.toggleEdit();
				}}
				label="Create New Policy"
			/>
		</div>
	{/snippet}
	<div class="drawer drawer-end">
		<input id="my-drawer-5" bind:checked={formState.edit} type="checkbox" class="drawer-toggle" />
		<div class="drawer-side">
			<label for="my-drawer-5" aria-label="close sidebar" class="drawer-overlay"></label>
			<div class="menu h-screen w-[50%] overflow-y-auto bg-base-200 p-4">
				<MNewPolicyForm
					bind:priority={formState.current.priority}
					bind:ticketType={formState.current.ticket_type}
					bind:resolutionTime={formState.current.resolution_time}
					bind:responseTime={formState.current.response_time}
					bind:escalateToHighest={formState.current.escalate_to_highest_tech}
					onSave={handleSave}
				/>
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
				<tbody class="font-semibold text-base-content/50">
					{#each SlaPoliciesStore.list as policy}
						<tr
							class="cursor-pointer transition-all hover:bg-base-200/50"
							onclick={() => {
								formState.setCurrentPolicy(policy);
								formState.toggleEdit();
							}}
						>
							<td
								><label for="my-drawer-5" class="drawer-button text-base-content"
									>{policy.name}</label
								></td
							>
							<td>
								<label
									for="my-drawer-5"
									class={twMerge(
										'drawer-button rounded p-1 px-2 capitalize',
										policy.priority <= 2
											? 'bg-red-500/10 text-red-500'
											: policy.priority === 3
												? 'bg-amber-900/10 text-amber-900'
												: 'bg-green-500/10 text-green-500'
									)}>{PRIORITY_NAMES[policy.priority]}</label
								>
							</td>
							<td><label for="my-drawer-5" class="drawer-button">{policy.response_time}</label></td>
							<td
								><label for="my-drawer-5" class="drawer-button">{policy.resolution_time}</label></td
							>
							<td
								><label for="my-drawer-5" class="drawer-button"
									>{policy.escalate_to_highest_tech
										? 'Escalate to highest techinician'
										: 'None'}</label
								></td
							>
						</tr>
					{/each}
					{#if SlaPoliciesStore.loading}
						{#each Array.from({ length: 5 }) as _, index (index)}
							<tr class="cursor-pointer transition-all hover:bg-base-200/50">
								<td>
									<div class="min-h-[20px] w-[100px] skeleton"></div>
								</td>
								<td>
									<div class="min-h-[25px] w-[60px] skeleton rounded"></div>
								</td>
								<td>
									<div class="min-h-[20px] w-[100px] skeleton"></div>
								</td>
								<td>
									<div class="min-h-[20px] w-[100px] skeleton"></div>
								</td>
								<td>
									<div class="min-h-[20px] w-[150px] skeleton"></div>
								</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>
	</div>
</ATopHeaderScreen>
