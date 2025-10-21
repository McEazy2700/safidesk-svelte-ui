<script>
	import { getUserType } from '$lib/utils/users.js';
	import StaffAssisntanceDashboard from '$lib/components/pages/staff-assisntance-dashboard.svelte';
	import UserAssistanceDashboard from '$lib/components/pages/user-assistance-dashboard.svelte';
	import AdminDashboard from '$lib/components/pages/admin-dashboard.svelte';

	let { data } = $props();
	const userType = getUserType(data.user);
</script>

<div class="h-[calc(100vh-70px)] overflow-y-auto">
	{#if userType === 'staff'}
		<StaffAssisntanceDashboard user={data.user} />
	{:else if userType === 'admin'}
		<AdminDashboard />
	{:else}
		<UserAssistanceDashboard />
	{/if}
</div>
