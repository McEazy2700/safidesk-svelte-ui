<script lang="ts">
	import { getSlaFormState } from '$lib/stores/forms/sla.svelte';
	import type { TimeMetricType } from '$lib/types/policy';
	import LightClose from '$lib/components/icons/light-close.svelte';
	import ATextDropdown from './a-text-dropdown.svelte';
	import { PRIORITY_NAMES, TICKET_TYPES, type TicketType } from '$lib/constants/tickets';
	import { cast } from '$lib/utils/typing';
	import type { SlaPolicy } from '$lib/services/api';
	import { onMount } from 'svelte';

	type FormProps = {
		title?: string;
		priority?: SlaPolicy['priority'];
		ticketType?: TicketType;
		responseTime?: string;
		resolutionTime?: string;
		escalateToHighest?: boolean;
		onSave?: () => void;
	};

	let {
		priority = $bindable(),
		ticketType = $bindable(),
		title = $bindable(),
		responseTime = $bindable(),
		resolutionTime = $bindable(),
		escalateToHighest = $bindable(),
		onSave
	}: FormProps = $props();

	let responseTimeNumber = $state<string>();
	let resolutionTimeNumber = $state<string>();

	let responseTimeMetric = $state<TimeMetricType>('Minutes');
	let resolutionTimeMetric = $state<TimeMetricType>('Minutes');

	const handleReponseChange = (value: string) => {
		responseTime = handleTime(value, responseTimeMetric);
	};

	const handleResolutionChange = (value: string) => {
		resolutionTime = handleTime(value, resolutionTimeMetric);
	};

	onMount(() => {
		if (responseTime) {
			const responseParts = responseTime.split(':');
			if (responseParts.length === 2) {
				responseTimeMetric = 'Minutes';
			} else if (responseParts.length === 3) {
				responseTimeMetric = 'Hours';
			} else {
				responseTimeMetric = 'Days';
			}
			responseTimeNumber = responseParts[0];
		}

		if (resolutionTime) {
			const resolutionParts = resolutionTime.split(':');
			if (resolutionParts.length === 2) {
				resolutionTimeMetric = 'Minutes';
			} else if (resolutionParts.length === 3) {
				resolutionTimeMetric = 'Hours';
			} else {
				resolutionTimeMetric = 'Days';
			}
			resolutionTimeNumber = resolutionParts[0];
		}
	});

	const formState = getSlaFormState();

	function handleTime(time: string, interval: TimeMetricType) {
		if (interval === 'Minutes') {
			return `00:${time}:00`;
		} else if (interval === 'Hours') {
			return `${time}:00:00`;
		} else {
			return `${time} 00:00:00`;
		}
	}
</script>

<div>
	<div class="mb-5 flex h-[50px] w-full items-center justify-between border-b border-black/10">
		<h1 class="text-3xl font-bold text-base-content/70">Define New SLA Policy</h1>
		<buton
			tabindex={1}
			type="button"
			onkeydown={() => formState.toggleEdit()}
			onclick={() => formState.toggleEdit()}
			aria-label="close sidebar"
			role="button"
		>
			<LightClose />
		</buton>
	</div>
	<form class=" flex flex-col text-xl font-semibold">
		<h2 class="mb-2 font-bold">Policy Criteria</h2>
		<div
			class="mb-4 flex flex-col gap-4 rounded-lg border border-gray-400 bg-primary/5 p-3 text-sm"
		>
			<div class="flex flex-col">
				<label class="mb-1" for="policy-name">Policy Name</label>
				<input
					class="input"
					name="policy-name"
					type="text"
					placeholder="e.g., Critical Financial Support"
					bind:value={title}
				/>
			</div>

			<div>
				<p class="mb-1">Apply When</p>
				<div class="flex flex-col gap-2">
					<div class="flex items-center gap-2">
						<span class="rounded-lg bg-white p-2 px-4">Priority</span>
						<span class="rounded-lg bg-white p-2 px-4">is</span>
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
					</div>
					<div class="flex items-center gap-2">
						<span class="rounded-lg bg-white p-2 px-4 whitespace-nowrap">Ticket Type</span>
						<span class="rounded-lg bg-white p-2 px-4">is</span>
						<ATextDropdown bind:selected={ticketType} items={cast(TICKET_TYPES)} />
					</div>
				</div>
			</div>
		</div>

		<h2 class="mb-2 font-bold">Service Level Targets</h2>
		<div
			class="mb-4 flex flex-col gap-4 rounded-lg border border-gray-400 bg-primary/5 p-3 text-sm"
		>
			<div class="flex flex-row gap-3">
				<div class="flex flex-1 flex-col">
					<label for="response-time">Response Time</label>
					<div class="flex flex-row">
						<input
							placeholder="15"
							type="number"
							class="input rounded-r-none border-r-0 bg-white"
							bind:value={responseTimeNumber}
							onchange={(v) => handleReponseChange(v.currentTarget.value)}
						/>
						<ATextDropdown
							class="!rounded-l-none"
							bind:selected={responseTimeMetric}
							items={['Minutes', 'Hours', 'Days']}
							onselect={() => handleReponseChange(responseTimeNumber ?? '0')}
						/>
					</div>
				</div>
				<div class="flex flex-1 flex-col">
					<label for="response-time">Resolution Time</label>
					<div class="flex flex-row">
						<input
							placeholder="15"
							type="number"
							class="input rounded-r-none border-r-0 bg-white"
							bind:value={resolutionTimeNumber}
							onchange={(v) => handleResolutionChange(v.currentTarget.value)}
						/>
						<ATextDropdown
							class="rounded-l-none"
							bind:selected={resolutionTimeMetric}
							items={['Minutes', 'Hours', 'Days']}
							onselect={() => handleResolutionChange(resolutionTimeNumber ?? '0')}
						/>
					</div>
				</div>
			</div>
		</div>
		<div>
			<h2 class="mb-2 font-bold">Breach Management</h2>
			<div
				class="mb-4 flex flex-col gap-4 rounded-lg border border-gray-400 bg-primary/5 p-3 text-sm"
			>
				<div class="flex justify-between">
					<label for="pre-breach-alert">Escalate to Highest Technician</label>
					<input
						id="pre-breach-alert"
						type="checkbox"
						bind:checked={escalateToHighest}
						class="toggle toggle-success"
					/>
				</div>
			</div>
		</div>
	</form>
	<div class="flex flex-row justify-end gap-4">
		<label for="my-drawer-5" aria-label="close sidebar" class="btn bg-gray-300">Cancel</label>
		<button type="button" onclick={() => onSave?.()} class="btn btn-primary">Save Policy</button>
	</div>
</div>
