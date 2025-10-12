<script>
	import { NOTIFICATIONS } from '$lib/constants/mocks/solutions';
	import { formatToFriendlyDateTime } from '$lib/utils/time';
</script>

<div class="flex w-full flex-1 flex-col gap-3">
	<div class="flex w-full flex-col border-b border-black/5 pb-2">
		<h4 class="self-center">Notifications</h4>
	</div>
	{#each NOTIFICATIONS as notification, index (index)}
		<div class="border-b border-black/5 p-2">
			<span class="text-lg font-bold">{notification.title}</span>
			<div class="flex items-end justify-between">
				<p>{notification.summary}</p>
				<time
					class="text-xs whitespace-nowrap"
					datetime={new Date(notification.date).toISOString()}
				>
					{formatToFriendlyDateTime(notification.date)}
				</time>
			</div>
		</div>
	{/each}
</div>
