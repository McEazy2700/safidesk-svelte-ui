<script lang="ts">
	import MHardwareDetailsForm from '$lib/components/molecules/m-hardware-details-form.svelte';
	import AScreen from '$lib/components/atoms/a-screen.svelte';
	import AServiceCatalogueButton from '$lib/components/atoms/a-service-catalogue-button.svelte';
	import PlusInCircle from '$lib/components/icons/plus-in-circle.svelte';
	import MSoftwareDetailsForm from '$lib/components/molecules/m-software-details-form.svelte';
	import MAccessControlDetailsForm from '$lib/components/molecules/m-access-control-details-form.svelte';
	import MGeneralDetailsForm from '$lib/components/molecules/m-general-details-form.svelte';
	import type { CatalogueChoiceType } from '$lib/types/services.js';

	let { data } = $props();

	let catalogChoice = $state<CatalogueChoiceType>('hardware');
</script>

<AScreen>
	<div class="m-4 flex flex-col">
		<div class="flex flex-row justify-between rounded-2xl bg-base-content/5 p-6">
			<div>
				<h2 class="text-2xl font-bold text-primary">Welcome back, {data.user.user.username}!</h2>
				<p class="text-base-content/60">What can we help you with today?</p>
			</div>
			<button class="btn btn-primary"><PlusInCircle size={15} /> Raise a New Request</button>
		</div>
		<div class="mt-5 flex flex-row gap-10">
			<div class="flex flex-1 flex-col">
				<h3 class="text-lg font-bold text-black">Service Catalog</h3>
				<div class="mt-3 flex flex-row flex-wrap gap-4">
					<AServiceCatalogueButton
						onClick={() => (catalogChoice = 'hardware')}
						choice="hardware"
						label="Hardware"
						selected={catalogChoice}
					/>
					<AServiceCatalogueButton
						onClick={() => (catalogChoice = 'software')}
						choice="software"
						label="Software"
						selected={catalogChoice}
					/>
					<AServiceCatalogueButton
						onClick={() => (catalogChoice = 'access')}
						choice="access"
						label="Access Control"
						selected={catalogChoice}
					/>
					<AServiceCatalogueButton
						onClick={() => (catalogChoice = 'general')}
						choice="general"
						label="General"
						selected={catalogChoice}
					/>
				</div>
				{#if catalogChoice === 'hardware'}
					<MHardwareDetailsForm />
				{:else if catalogChoice === 'software'}
					<MSoftwareDetailsForm />
				{:else if catalogChoice === 'access'}
					<MAccessControlDetailsForm />
				{:else if catalogChoice === 'general'}
					<MGeneralDetailsForm />
				{/if}
			</div>
			<div class="w-full flex-[0.5] rounded-xl border border-base-300 bg-white p-4">
				<h3 class="font-bold">My Recent Requests</h3>
				<div class="mt-5 flex flex-col gap-3 text-xs text-base-content/60">
					<div class="flex flex-col gap-3 rounded-xl border border-base-300 bg-white p-4">
						<div>
							<div class="flex flex-row justify-between">
								<h4 class="font-bold text-black">Excel Installation</h4>
								<p class="rounded-full bg-red-200 px-2 text-red-400">High</p>
							</div>
							<p>Request #732134</p>
						</div>
						<div>
							<div class="flex flex-row justify-between">
								<p>Department</p>
								<p>Device-ID</p>
							</div>
							<div class="flex flex-row justify-between font-semibold text-black">
								<p>Finance</p>
								<p>Device-ID</p>
							</div>
						</div>

						<div>
							<div class="flex flex-row">
								Status: <p class="text-primary">&nbsp;Line Manager Approved</p>
							</div>
							<progress class="progress w-full progress-primary" value="30" max="100"></progress>
						</div>

						<div class="flex flex-row justify-between">
							<p>Submition Approved</p>
							<div class="flex flex-row">
								Fulfilment:
								<p class="text-blue-500">&nbsp;Pending</p>
							</div>
						</div>
					</div>

					<div class="flex flex-col gap-3 rounded-xl border border-base-300 bg-white p-4">
						<div>
							<div class="flex flex-row justify-between">
								<h4 class="font-bold text-black">Password Reset</h4>
								<p class="rounded-full bg-green-200 px-2 text-green-400">Low</p>
							</div>
							<p>Request #7214</p>
						</div>

						<div>
							<div class="flex flex-row justify-between">
								<p>Department</p>
								<p>System</p>
							</div>
							<div class="flex flex-row justify-between font-semibold text-black">
								<p>Finance</p>
								<p>ERP System</p>
							</div>
						</div>

						<div>
							<div class="flex flex-row">
								Status: <p class="text-primary">&nbsp;Line Manager Approved</p>
							</div>
							<progress class="progress w-full progress-primary" value="100" max="100"></progress>
						</div>

						<div class="flex flex-row justify-between">
							<p>Submition Approved</p>
							<div class="flex flex-row">
								Fulfilment:
								<p class="text-green-500">&nbsp;Resolved</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</AScreen>
