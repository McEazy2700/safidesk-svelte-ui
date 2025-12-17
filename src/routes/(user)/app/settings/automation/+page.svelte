<script lang="ts">
	import MAutomationRuleForm from '$lib/components/molecules/m-automation-rule-form.svelte';
	import ANewButton from '$lib/components/atoms/a-new-button.svelte';
	import ASearchInput from '$lib/components/atoms/a-search-input.svelte';
	import ATopHeaderScreen from '$lib/components/atoms/a-top-header-screen.svelte';
	import { getAutomationRuleFormState } from '$lib/stores/forms/automation-rule.svelte';
	import { AutomationRuleMutations } from '$lib/services/utils/mutations/automation-rule.svelte';
	import type { Rule } from '$lib/types/automation-rule';
	import { cast } from '$lib/utils/typing';
	import { AutomationRulesStore } from '$lib/stores/queries/automation-rules.svelte';
	import { twMerge } from 'tailwind-merge';
	import { PRIORITY_NAMES } from '$lib/constants/tickets';

	let formState = getAutomationRuleFormState();

	$effect(() => {
		AutomationRulesStore.loadInitial();
	});

	const handleSave = (input: Rule) => {
		AutomationRuleMutations.save(cast(input), formState.current.id);
	};

	$effect(() => {
		console.log(formState.current);
	});
</script>

<ATopHeaderScreen>
	{#snippet header()}
		<div class="flex w-full items-center justify-between">
			<h1 class="text-3xl font-bold text-base-content/70">Automation Rules</h1>
			<ANewButton onclick={() => formState.toggleEdit()} label="Create New Rule" />
		</div>
	{/snippet}
	<div class="flex flex-row items-start gap-6">
		<div class="flex-1 rounded-2xl border border-black/10 bg-white transition-all">
			<div class="border-b border-black/5 p-4">
				<h4 class="mb-4 text-lg font-bold">Rules</h4>
				<ASearchInput class="text-black" placeholder="Search rules..." />
			</div>
			<table class="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Priority</th>
						<th>Description</th>
						<th>Active</th>
					</tr>
				</thead>
				<tbody class="font-semibold text-base-content/50">
					{#each AutomationRulesStore.list as { priority = 3, ...rule }}
						<tr
							class="cursor-pointer transition-all hover:bg-base-200/50"
							onclick={() => {
								formState.setCurrentPolicy(rule);
								formState.toggleEdit();
							}}
						>
							<td><span class="drawer-button text-base-content">{rule.name}</span></td>
							<td>
								<span
									class={twMerge(
										'drawer-button rounded p-1 px-2 capitalize',
										priority <= 2
											? 'bg-red-500/10 text-red-500'
											: priority === 3
												? 'bg-yellow-500/10 text-yellow-500'
												: 'bg-green-500/10 text-green-500'
									)}>{PRIORITY_NAMES[priority > 0 ? priority : 1]}</span
								>
							</td>
							<td><span class="drawer-button">{rule.description}</span></td>
							<td>
								<input
									id="pre-breach-alert"
									type="checkbox"
									bind:checked={rule.is_active}
									class="toggle toggle-success"
								/>
							</td>
						</tr>
					{/each}
					{#if AutomationRulesStore.loading}
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
									<div class="min-h-[20px] w-[150px] skeleton"></div>
								</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>
		<MAutomationRuleForm
			bind:name={formState.current.name}
			bind:description={formState.current.description}
			bind:priority={formState.current.priority}
			bind:is_active={formState.current.is_active}
			bind:conditions={formState.current.conditions}
			bind:actions={formState.current.actions}
			onSave={handleSave}
		/>
	</div>
</ATopHeaderScreen>
