<script lang="ts">
	import CharmPlus from '$lib/components/icons/charm-plus.svelte';
	import MiDelete from '$lib/components/icons/mi-delete.svelte';
	import { PRIORITY_NAMES, STATUS_NAMES, TICKET_TYPES } from '$lib/constants/tickets';
	import { getAutomationRuleFormState } from '$lib/stores/forms/automation-rule.svelte';
	import { QueuesStore } from '$lib/stores/queries/queues.svelte';
	import { UsersStore } from '$lib/stores/queries/users.svelte';
	import { capitalize } from '$lib/utils/text';
	import { cast } from '$lib/utils/typing';
	import { slide } from 'svelte/transition';
	import ATextDropdown from '../atoms/a-text-dropdown.svelte';
	import type { Action, Condition, Rule } from '$lib/types/automation-rule';

	type Props = {
		name: string;
		description?: string;
		is_active?: boolean;
		priority?: number;
		conditions?: Condition[];
		actions?: Action[];
		onSave?: (input: Rule) => void;
	};

	const SRMap = {
		set_on_hold: 'Set On Hold',
		set_priority: 'Set Priority',
		set_status: 'Set Status',
		assign_to_queue: 'Assign Team/Queue',
		priority: 'Priority',
		ticket_type: 'Ticket Type',
		status: 'Status',
		queue: 'Queue',
		assigned_agent: 'Assigned Agent',
		name: 'Name',
		description: 'Description',
		starts_with: 'Starts With',
		contains: 'Contains',
		equals: 'is',
		not_equals: 'is not',
		'>': 'greater than',
		'<': 'less than'
	} as const;

	let {
		onSave,
		name = $bindable(),
		description = $bindable(),
		is_active = $bindable(),
		priority = $bindable(),
		conditions = $bindable(),
		actions = $bindable()
	}: Props = $props();

	let formState = getAutomationRuleFormState();
	let innerConditions = $state<Condition[]>([{}]);
	let innerActions = $state<Action[]>([{}]);
	let operators = $derived(
		innerConditions.map((c) => {
			if (
				[SRMap.ticket_type, SRMap.status, SRMap.queue, SRMap.assigned_agent].includes(
					cast(c.field ?? '')
				)
			) {
				return [SRMap.equals, SRMap.not_equals];
			} else if ([SRMap.name, SRMap.description].includes(cast(c.field ?? ''))) {
				return [SRMap.starts_with, SRMap.contains];
			} else {
				return [SRMap.equals, SRMap.not_equals, SRMap['>'], SRMap['<']];
			}
		})
	);
	let conditionValues = $derived(
		innerConditions.map((c) => {
			if (c.field === SRMap.ticket_type) {
				return TICKET_TYPES;
			} else if (c.field === SRMap.priority) {
				return Object.values(PRIORITY_NAMES);
			} else if (c.field === SRMap.status) {
				return Object.values(STATUS_NAMES);
			} else if (c.field === SRMap.assigned_agent) {
				return UsersStore.list.map((i) => i.username);
			} else {
				return QueuesStore.list.map((q) => q.title);
			}
		})
	);
	let actionValues = $derived(
		innerActions.map((a) => {
			if (a.action === SRMap.assign_to_queue) {
				return QueuesStore.list.map((q) => q.title);
			} else if (a.action === SRMap.assigned_agent) {
				return UsersStore.list.map((i) => i.username);
			} else if (a.action === SRMap.set_priority) {
				return Object.values(PRIORITY_NAMES);
			} else if (a.action === SRMap.set_status) {
				return Object.values(STATUS_NAMES);
			} else {
				return ['True', 'False'];
			}
		})
	);

	$effect(() => {
		QueuesStore.loadInitial();
		UsersStore.loadInitial();
	});

	function findSRMapKey(value: (typeof SRMap)[keyof typeof SRMap]) {
		return Object.keys(SRMap)[Object.values(SRMap).findIndex((i) => i === value)];
	}

	function findSRMapValue(key: keyof typeof SRMap) {
		return Object.values(SRMap)[Object.keys(SRMap).findIndex((i) => i == key)];
	}

	$effect(() => {
		if (conditions) {
			innerConditions = conditions?.map((c) => {
				let value = c.value;
				if (c.field === findSRMapKey(SRMap.status)) {
					value = STATUS_NAMES[Number(c.value)];
				} else if (c.field === findSRMapKey(SRMap.priority)) {
					value = PRIORITY_NAMES[Number(c.value)];
				}

				const processed: Condition = {
					value,
					field: findSRMapValue(cast(c.field)),
					operator: findSRMapValue(cast(c.operator))
				};
				return processed;
			});
		}
	});

	$effect(() => {
		if (actions) {
			innerActions = actions?.map((c) => {
				let value = c.value;
				if (c.action === findSRMapKey(SRMap.set_status)) {
					value = STATUS_NAMES[Number(c.value)];
				} else if (c.action === findSRMapKey(SRMap.set_priority)) {
					value = PRIORITY_NAMES[Number(c.value)];
				} else if (c.action === findSRMapKey(SRMap.assigned_agent)) {
					value = UsersStore.list.find((i) => i.id === cast(c.value))?.username;
				}

				const processed: Action = {
					value,
					action: findSRMapValue(cast(c.action))
				};

				return processed;
			});
		}
	});

	function processInput() {
		const processedConditions = innerConditions.map((c) => {
			let value = c.value;
			if (c.field === SRMap.priority) {
				let index = Object.values(PRIORITY_NAMES).findIndex(
					(v) => v === c.value?.split(' ').join('_').toLowerCase()
				);
				if (index < 0) index = 0;
				value = Object.keys(PRIORITY_NAMES)[index];
			} else if (c.field === SRMap.status) {
				let index = Object.values(STATUS_NAMES).findIndex(
					(v) => v === c.value?.split(' ').join('_').toLowerCase()
				);
				if (index < 0) index = 0;
				value = Object.keys(STATUS_NAMES)[index];
			} else if (c.field === SRMap.assigned_agent) {
				value = cast(UsersStore.list.find((i) => i.username === c.value)?.id ?? '');
			}

			const processed: Condition = {
				field: c.field?.toLowerCase().split(' ').join('_'),
				value,
				operator: Object.keys(SRMap)[Object.values(SRMap).findIndex((i) => i === c.operator)]
			};
			return processed;
		});

		const processedActions = innerActions.map((c) => {
			let value = c.value;
			if (c.action === SRMap.assign_to_queue) {
				value = cast(
					QueuesStore.list.find(
						(i) => i.title.toLowerCase() === c.value?.toLowerCase().split(' ').join('_')
					)?.id ?? ''
				);
			} else if (c.action === SRMap.assigned_agent) {
				value = cast(UsersStore.list.find((i) => i.username === c.value)?.id ?? '');
			} else if (c.action === SRMap.set_priority) {
				let index = Object.values(PRIORITY_NAMES).findIndex(
					(v) => v === c.value?.split(' ').join('_').toLowerCase()
				);
				if (index < 0) index = 0;
				value = Object.keys(PRIORITY_NAMES)[index];
			} else if (c.action === SRMap.set_status) {
				let index = Object.values(STATUS_NAMES).findIndex(
					(v) => v === c.value?.split(' ').join('_').toLowerCase()
				);
				if (index < 0) index = 0;
				value = Object.keys(STATUS_NAMES)[index];
			}

			const processed: Action = {
				action: Object.keys(SRMap)[Object.values(SRMap).findIndex((i) => i === c.action)],
				value
			};

			return processed;
		});

		return { conditions: processedConditions, actions: processedActions };
	}

	const handleSave = () => {
		onSave?.({ ...processInput(), name, priority, is_active: is_active, description });
	};
</script>

{#if formState.edit}
	<form
		transition:slide
		action=""
		class="flex flex-2 flex-col gap-4 rounded-2xl border border-black/10 bg-white p-4"
	>
		<fieldset class="fieldset w-full">
			<legend class="fieldset-legend">Rule Name</legend>
			<input type="text" bind:value={name} class="input w-full" placeholder="My New Rule..." />
		</fieldset>
		<fieldset class="fieldset w-full">
			<legend class="fieldset-legend">Description</legend>
			<textarea class="textarea w-full" bind:value={description} placeholder="Enter text..."
			></textarea>
		</fieldset>
		<fieldset class="fieldset w-full">
			<legend class="fieldset-legend">Priority</legend>
			<ATextDropdown
				selected={Object.values(PRIORITY_NAMES)[(priority ?? 3) - 1]}
				onselect={(v) => {
					let index = Object.values(PRIORITY_NAMES).findIndex(
						(i) => i.split(' ').join('_').toLowerCase() === v
					);
					if (index < 0) {
						index = 2;
					}
					priority = cast(Number(Object.keys(PRIORITY_NAMES)[index]));
				}}
				items={Object.values(PRIORITY_NAMES).map((v) => v.split('_').join(' '))}
			/>
		</fieldset>
		<fieldset class="fieldset w-full rounded-box border border-base-300 p-4">
			<p class="mb-4 text-lg font-bold">If All the following conditions are met:</p>
			{#each innerConditions as _, index}
				<div class="flex flex-row items-center gap-4">
					<div class="flex flex-1 flex-row items-center gap-4">
						<select
							class="select flex-1"
							onchange={(c) => (innerConditions[index].field = c.currentTarget.value)}
						>
							<option disabled selected>Pick a Condition</option>
							<option>{SRMap.name}</option>
							<option>{SRMap.description}</option>
							<option>{SRMap.ticket_type}</option>
							<option>{SRMap.priority}</option>
							<option>{SRMap.status}</option>
							<option>{SRMap.queue}</option>
							<option>{SRMap.assigned_agent}</option>
						</select>
						<select
							class="select flex-1"
							onchange={(c) => (innerConditions[index].operator = c.currentTarget.value)}
						>
							<option disabled selected>Pick an Operator</option>
							{#each operators.at(index) ?? [] as operator}
								<option>{capitalize(operator)}</option>
							{/each}
						</select>
						{#if [SRMap.name, SRMap.description].includes(cast(innerConditions.at(index)?.field ?? ''))}
							<input
								type="text"
								class="input flex-1"
								placeholder="Enter value..."
								onchange={(c) => (innerConditions[index].value = c.currentTarget.value)}
							/>
						{:else}
							<select
								class="select flex-1"
								onchange={(c) => (innerConditions[index].value = c.currentTarget.value)}
							>
								<option disabled selected>Pick a Value</option>
								{#each conditionValues.at(index) ?? [] as conditionValue}
									{#if innerConditions.at(index)?.field === SRMap.assigned_agent}
										<option>{conditionValue}</option>
									{:else}
										<option>{capitalize(conditionValue.split('_').join(' '))}</option>
									{/if}
								{/each}
							</select>
						{/if}
					</div>
					<button
						title="Delete condition"
						onclick={() => (innerConditions = innerConditions.filter((_, i) => i !== index))}
						type="button"
						class="text-error"
					>
						<MiDelete />
					</button>
				</div>
			{/each}
			<button
				type="button"
				onclick={() => (innerConditions = [...innerConditions, {}])}
				class="mt-4 flex max-w-fit items-start rounded-xl border border-black/10 p-2 px-4"
			>
				<div class="flex items-center text-info">
					<CharmPlus /> <span>Add Condition</span>
				</div>
			</button>
		</fieldset>
		<fieldset class="fieldset w-full rounded-box border border-base-300 p-4">
			<p class="mb-4 text-lg font-bold">Then perform these actions:</p>
			{#each innerActions as _, index}
				<div class="flex flex-row items-center gap-4">
					<div class="flex flex-1 flex-row items-center gap-4">
						<select
							class="select flex-1"
							onchange={(c) => (innerActions[index].action = c.currentTarget.value)}
						>
							<option disabled selected>Pick an action</option>
							<option>{SRMap.assign_to_queue}</option>
							<option>{SRMap.assigned_agent}</option>
							<option>{SRMap.set_priority}</option>
							<option>{SRMap.set_status}</option>
							<option>{SRMap.set_on_hold}</option>
						</select>
						<p>to</p>
						<select
							class="select flex-1"
							onchange={(c) => (innerActions[index].value = c.currentTarget.value)}
						>
							<option disabled selected>Pick a Value</option>
							{#each actionValues.at(index) ?? [] as actionValue}
								{#if innerActions.at(index)?.action === SRMap.assigned_agent}
									<option>{actionValue}</option>
								{:else}
									<option>{capitalize(actionValue.split('_').join(' '))}</option>
								{/if}
							{/each}
						</select>
					</div>
					<button
						class="text-error"
						title="Delete action"
						onclick={() => (innerActions = innerActions.filter((_, i) => i !== index))}
					>
						<MiDelete />
					</button>
				</div>
			{/each}
			<button
				type="button"
				onclick={() => (innerActions = [...innerActions, {}])}
				class="mt-4 flex max-w-fit items-start rounded-xl border border-black/10 p-2 px-4"
			>
				<div class="flex items-center text-info">
					<CharmPlus /> <span>Add Action</span>
				</div>
			</button>
		</fieldset>

		<div class="mt-8 flex flex-row items-center justify-between">
			<div class="flex justify-between gap-4">
				<label for="pre-breach-alert">Active</label>
				<input
					id="pre-breach-alert"
					type="checkbox"
					bind:checked={is_active}
					class="toggle toggle-success"
				/>
			</div>
			<button type="button" onclick={handleSave} class="btn btn-info">Save Rule</button>
		</div>
	</form>
{/if}
