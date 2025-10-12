<script lang="ts">
	import { TicketStatsStore } from '$lib/stores/queries/ticket-stats-svelte';
	import type { UserResponseData } from '$lib/types/api/auth';
	import { formatToFriendlyDateTime } from '$lib/utils/time';
	import { getUserType } from '$lib/utils/users';
	import ANotifications from '../atoms/a-notifications.svelte';
	import MSummaryCountItem from '../molecules/m-summary-count-item.svelte';
	import { resolve } from '$app/paths';
	import OTicketList from '../organisms/o-ticket-list.svelte';
	import AScreen from '../atoms/a-screen.svelte';

	type Props = {
		user: UserResponseData;
	};

	let { user }: Props = $props();
	const userType = getUserType(user);

	$effect(() => {
		TicketStatsStore.load({});
	});
</script>

<AScreen>
	<div class="p-10">
		<div class="flex items-center justify-between">
			<div class="text-lg">
				<p>Welcome,</p>
				<h1 class="text-6xl font-bold">{user.user.username}</h1>
				<div>
					<span class="text-base-content/40">last login</span>
					<span>- {formatToFriendlyDateTime(new Date())}</span>
				</div>
			</div>
			<div class="grid grid-cols-3 gap-2">
				<MSummaryCountItem
					showTrend={userType !== 'user'}
					label="Total Tickets"
					count={TicketStatsStore.data?.data.total_tickets ?? 0}
					lastMonthCount={0}
				/>
				<MSummaryCountItem
					description={`Last updated: ${formatToFriendlyDateTime(new Date())}`}
					label="New Notifications"
					count={10}
				/>
				<MSummaryCountItem
					description={`Last updated: ${formatToFriendlyDateTime(new Date())}`}
					label="Upcoming Events"
					count={10}
				/>
			</div>
		</div>
		<div class="mt-16 flex items-start gap-6">
			<div class="min-h-[400px] flex-1 rounded-xl bg-base-100 p-4 shadow-xl">
				<div class="flex items-center justify-between">
					<span class="text-xl font-bold">Tickets</span>
					<a href={resolve('/app/assistance/tickets/lists')} class="btn btn-link">All Tickets >></a>
				</div>

				<div class="max-h-[50vh] overflow-y-auto">
					<OTicketList {user} />
				</div>
			</div>
			<div class="min-h-[400px] flex-1 rounded-xl bg-base-100 p-4 shadow-xl">
				<ANotifications />
			</div>
		</div>
	</div>
</AScreen>
