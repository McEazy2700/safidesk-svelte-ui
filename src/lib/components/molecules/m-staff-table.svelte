<script lang="ts">
	import type { TechnicianProfile } from '$lib/services/api';
	import { TechnicianProfileStore } from '$lib/stores/queries/technician-profiles.svelte';

	type Props = {
		onselect?: (technician: TechnicianProfile) => void;
	};

	let { onselect }: Props = $props();

	$effect(() => {
		TechnicianProfileStore.loadInitial();
	});
</script>

<div class="overflow-x-auto bg-white p-4">
	<table class="table">
		<!--head-->
		<thead>
			<tr>
				<th>Username</th>
				<th>Groups</th>
				<th>Seniority Level</th>
			</tr>
		</thead>
		<tbody>
			{#if TechnicianProfileStore.loading}
				{#each Array.from({ length: 10 }) as _, index (index)}
					<tr>
						<td>
							<div class="h-6 w-32 skeleton"></div>
						</td>
						<td>
							<div class="h-6 w-20 skeleton"></div>
						</td>
						<td>
							<div class="h-6 w-40 skeleton"></div>
						</td>
					</tr>
				{/each}
			{/if}
			{#each TechnicianProfileStore.list as staff, index (index)}
				<tr onclick={() => onselect?.(staff)} class="cursor-pointer hover:bg-base-200/40">
					<td>{staff.username}</td>
					<td>{staff.groups}</td>
					<td>{staff.seniority_level}</td>
				</tr>
			{/each}
		</tbody>
		{#if !TechnicianProfileStore.loading && !TechnicianProfileStore.list.length}
			<tbody>
				<tr>
					<td colspan="3" class="py-10 text-center">
						<div class="text-gray-500 italic">No Technicians yet</div>
					</td>
				</tr>
			</tbody>
		{/if}
	</table>
</div>
