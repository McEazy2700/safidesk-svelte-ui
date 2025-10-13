<script>
	import MynauiQuestionCircle from '$lib/components/icons/mynaui-question-circle.svelte';
	import AAssistanceDashboardItem from '$lib/components/atoms/a-assistance-dashboard-item.svelte';
	import CrmService from '$lib/components/icons/crm-service.svelte';
	import HugeiconsAiIdea from '$lib/components/icons/hugeicons-ai-idea.svelte';
	import ASearchInput from '$lib/components/atoms/a-search-input.svelte';
	import ALogo from '$lib/components/atoms/a-logo.svelte';
	import { POPULAR_SOLUTIONS } from '$lib/constants/mocks/solutions';
	import ANotifications from '$lib/components/atoms/a-notifications.svelte';
	import { getUserType } from '$lib/utils/users.js';
	import StaffAssisntanceDashboard from '$lib/components/pages/staff-assisntance-dashboard.svelte';

	const { data } = $props();
	const userType = getUserType(data.user);
</script>

<div class="h-[calc(100vh-70px)] overflow-y-auto">
	{#if userType !== 'user'}
		<StaffAssisntanceDashboard user={data.user} />
	{:else}
		<div class="flex flex-col items-center justify-center gap-4 pb-10">
			<div class="mt-24 flex flex-col items-center gap-1">
				<ALogo />
				<h1 class="text-2xl font-bold">How can we help you?</h1>
			</div>
			<div class="flex flex-col items-center justify-center gap-8 pt-2">
				<ASearchInput class="w-full max-w-2xl rounded-full p-6 text-xl text-base-content" />
				<div class="grid grid-cols-3 items-center justify-center gap-4 pt-8">
					<AAssistanceDashboardItem
						color="red"
						prompt="Report an Issue"
						description="Get help with a bug, error, or malfunction. Technician resolution within 7 business days."
						href="/app/assistance/tickets/lists/new"
						icon={MynauiQuestionCircle}
					/>
					<AAssistanceDashboardItem
						color="green"
						prompt="Request a Service"
						description="Ask for a new setup, access, or functional change. Technician fulfillment within 14 business days."
						href="/app/assistance/tickets/lists/new"
						icon={CrmService}
					/>
					<AAssistanceDashboardItem
						color="blue"
						prompt="View Solutions"
						description="Find self-help articles and answers to common questions immediately. No ticket needed."
						href="/app/assistance/tickets/lists/chat?title=SafiDesk+AI"
						icon={HugeiconsAiIdea}
					/>
				</div>
				<div class="mt-10 flex w-full max-w-6xl items-start gap-4">
					<div class="flex-1">
						<div class="flex w-full flex-col gap-3">
							<div class="flex w-full flex-col border-b border-black/5 pb-2">
								<h4 class="self-center">Popular Solutions</h4>
							</div>
							<ASearchInput class="w-full text-black" />
							{#each POPULAR_SOLUTIONS as solution, index (index)}
								<div class="border-b border-black/5 p-2">
									<span class="text-lg font-bold">{solution.title}</span>
									<p>{solution.summary}</p>
								</div>
							{/each}
						</div>
					</div>
					<div class="mx-8 h-[300px] w-px self-center bg-black/5"></div>
					<div class="flex-1">
						<ANotifications />
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
