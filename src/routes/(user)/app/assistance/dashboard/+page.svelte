<script>
	import { getUserType } from '$lib/utils/users.js';
	import StaffAssisntanceDashboard from '$lib/components/pages/staff-assisntance-dashboard.svelte';
	import UserAssistanceDashboard from '$lib/components/pages/user-assistance-dashboard.svelte';

	const { data } = $props();
	const userType = getUserType(data.user);
</script>

<div class="h-[calc(100vh-70px)] overflow-y-auto">
	{#if userType !== 'user'}
		<StaffAssisntanceDashboard user={data.user} />
	{:else}
		<UserAssistanceDashboard />
	{/if}
</div>
