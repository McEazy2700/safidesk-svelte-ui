<script lang="ts">
	import ANewButton from '$lib/components/atoms/a-new-button.svelte';
	import ASeniorityLevelDropdown from '$lib/components/atoms/a-seniority-level-dropdown.svelte';
	import ATopHeaderScreen from '$lib/components/atoms/a-top-header-screen.svelte';
	import AUserDropdown from '$lib/components/atoms/a-user-dropdown.svelte';
	import MStaffTable from '$lib/components/molecules/m-staff-table.svelte';
	import type { TechnicianProfileWritable } from '$lib/services/api';
	import { TechnicianProfileMutations } from '$lib/services/utils/mutations/technician-profile.svelte';
	import { slide } from 'svelte/transition';

	let formOpen = $state(false);
	let formData = $state({} as TechnicianProfileWritable & { id: number });

	function handleSave() {
		const { id, ...data } = formData;
		TechnicianProfileMutations.save(data, id).then(() => (formOpen = false));
	}
</script>

<ATopHeaderScreen>
	{#snippet header()}
		<div class="flex w-full items-center justify-between">
			<h1 class="text-3xl font-bold text-base-content/70">Users</h1>
			<ANewButton onclick={() => (formOpen = true)} label="New Technician" />
		</div>
	{/snippet}
	<div class="flex flex-row gap-4">
		<div class="mt-4 flex-1 rounded-xl bg-white p-4">
			<h3 class="text-xl font-bold">Staff Overview</h3>
			<MStaffTable
				onselect={(v) => {
					formData = { id: v.id ?? 1, user: v.user, seniority_level: v.seniority_level };
					formOpen = true;
				}}
			/>
		</div>
		{#if formOpen}
			<div transition:slide class="mt-4 flex-[0.7] rounded-xl bg-white p-4">
				<h3 class="text-xl font-bold">Add Technician</h3>
				<form class="mt-4">
					<AUserDropdown bind:userId={formData.user} />
					<ASeniorityLevelDropdown bind:seniorityLevel={formData.seniority_level} />
					<button onclick={handleSave} type="button" class="btn mt-10 btn-info"
						>Save Technician</button
					>
				</form>
			</div>
		{/if}
	</div>
</ATopHeaderScreen>
