<script lang="ts">
	import { getSlaFormState } from '$lib/stores/forms/sla.svelte';
	import type { PriorityType, TimeMetricType, CalenerHourOptionsType } from '$lib/types/policy';
	import ATextDropdown from './a-text-dropdown.svelte';

	const formState = getSlaFormState();
	let priority = $state<PriorityType>(
		formState.edit ? formState.currentPolicy!.priority : 'Medium'
	);
	let responseTimeMetric = $state<TimeMetricType>(
		formState.edit ? formState.currentPolicy!.responseTimeMetric : 'Minutes'
	);
	let resolutionTimeMetric = $state<TimeMetricType>(
		formState.edit ? formState.currentPolicy!.resolutionTimeMetric : 'Minutes'
	);
	let calenderHourOptions = $state<CalenerHourOptionsType>(
		formState.edit ? formState.currentPolicy!.calenderHours : '24/7'
	);
</script>

<form class=" flex flex-col text-xl font-semibold">
	<h2 class="mb-2 font-bold">Policy Criteria</h2>
	<div class="mb-4 flex flex-col gap-4 rounded-lg border border-gray-400 bg-primary/5 p-3 text-sm">
		<div class="flex flex-col">
			<label class="mb-1" for="policy-name">Policy Name</label>
			<input
				class="input"
				name="policy-name"
				type="text"
				placeholder="e.g., Critical Financial Support"
				value={formState.edit ? formState.currentPolicy?.policyName : ''}
			/>
		</div>

		<div>
			<p class="mb-1">Apply When</p>
			<ATextDropdown bind:selected={priority} items={['High', 'Medium', 'Low']} />
		</div>
	</div>

	<h2 class="mb-2 font-bold">Service Level Targets</h2>
	<div class="mb-4 flex flex-col gap-4 rounded-lg border border-gray-400 bg-primary/5 p-3 text-sm">
		<div class="flex flex-row gap-3">
			<div class="flex flex-1 flex-col">
				<label for="response-time">Response Time</label>
				<div class="flex flex-row">
					<input
						placeholder="15"
						type="number"
						class="flex-3 rounded-tl rounded-bl border border-gray-400 bg-white p-2"
						value={formState.edit ? formState.currentPolicy?.responseTime : 0}
					/>
					<div class="dropdown flex-1">
						<div
							tabindex="0"
							role="button"
							class="rounded-tr rounded-br border border-gray-400 bg-white p-2"
						>
							{responseTimeMetric}
						</div>
						<ul
							tabindex="-1"
							class="dropdown-content menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm"
						>
							<button>Hours</button>
							<button>Minutes</button>
							<button>Seconds</button>
						</ul>
					</div>
				</div>
			</div>
			<div class="flex flex-1 flex-col">
				<label for="response-time">Resolution Time</label>
				<div class="flex flex-row">
					<input
						placeholder="15"
						type="number"
						class="flex-3 rounded-tl rounded-bl border border-gray-400 bg-white p-2"
						value={formState.edit ? formState.currentPolicy?.resolutionTime : 0}
					/>
					<div class="dropdown flex-1">
						<div
							tabindex="0"
							role="button"
							class="rounded-tr rounded-br border border-gray-400 bg-white p-2"
						>
							{resolutionTimeMetric}
						</div>
						<ul
							tabindex="-1"
							class="dropdown-content menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm"
						>
							<li>Hours</li>
							<li>Minutes</li>
							<li>Seconds</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div>
			<p>Calender/Hours</p>
			<div class="flex flex-1 flex-row gap-2 rounded-lg border-4 border-gray-400 bg-gray-400">
				<button
					onclick={() => (calenderHourOptions = '24/7')}
					data-active={calenderHourOptions === '24/7' ? 'true' : 'false'}
					class="btn flex-1 rounded-lg border-gray-400 bg-gray-400 data-[active=true]:bg-white"
					>24/7</button
				>
				<button
					onclick={() => (calenderHourOptions = 'Business Hours (Mon-Fri 8-4)')}
					data-active={calenderHourOptions === 'Business Hours (Mon-Fri 8-4)'}
					class="btn flex-1 rounded-lg border-gray-400 bg-gray-400 data-[active=true]:bg-white"
					>Business Hours (Mon-Fri 8-4)</button
				>
			</div>
		</div>
	</div>
	<div>
		<h2 class="mb-2 font-bold">Breach Management</h2>
		<div
			class="mb-4 flex flex-col gap-4 rounded-lg border border-gray-400 bg-primary/5 p-3 text-sm"
		>
			<div>
				<input name="pre-breach-alert" type="checkbox" class="bg-white" />
				<label for="pre-breach-alert">Enable Pre-Breach Label</label>
			</div>
			<div class="flex flex-row items-center">
				<label for="notification-option">Send &nbsp;</label>
				<div class="w-50">
					<ATextDropdown placeholder="Notification opiton" items={['Whatsapp', 'Email']} />
				</div>
				<label for="">&nbsp; notification &nbsp;</label>
				<input
					type="number"
					value={formState.edit ? formState.currentPolicy?.notificationTime : 0}
					class="input w-16"
				/>
				<p>&nbsp; mins before breach</p>
			</div>
			<div>
				<p>Escalation Rule: If breached, Reasign to:</p>
				<ATextDropdown
					placeholder="Senior Engineer Queue"
					items={['Senior Engineer Queue', 'Optimal Protocol']}
				/>
			</div>
		</div>
	</div>
</form>
