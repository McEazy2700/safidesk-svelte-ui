<script>
	import ALogo from '$lib/components/atoms/a-logo.svelte';
	import ASearchInput from '$lib/components/atoms/a-search-input.svelte';
	import { resolve } from '$app/paths';
	import { cast } from '$lib/utils/typing';
	import { twMerge } from 'tailwind-merge';
	import { getUserNaviation } from '$lib/constants/navigation/app';
	import { getUserType } from '$lib/utils/users.js';
	import StaffRootDashboard from '$lib/components/pages/staff-root-dashboard.svelte';

	let { data } = $props();

	const DashboardNavs = getUserNaviation(data.user).map((n) => ({
		name: n.label,
		href: n.baseRoute,
		icon: n.icon
	}));
	const userType = getUserType(data.user);
</script>

{#if userType === 'staff'}
	<StaffRootDashboard user={data.user} />
{:else}
	<div class="h-[calc(100vh-70px)] overflow-y-auto">
		<div class="flex w-full flex-col items-center pt-8">
			<div class="flex flex-col items-center">
				<ALogo />
				<h1 class="font-comfortaa text-4xl font-bold tracking-wider">Help Center</h1>
			</div>
			<div class="mt-16 flex w-full flex-col items-center">
				<ASearchInput class="w-full max-w-2xl rounded-full p-6 text-xl text-base-content" />

				<div class="mt-20 grid grid-cols-3">
					{#each DashboardNavs as { icon: Icon, ...nav }, index (index)}
						<a
							class={twMerge(
								'flex flex-col items-center justify-center gap-2 border-base-content/20 p-16 px-20 text-xl transition-all hover:scale-110 hover:border-0 hover:bg-base-200 hover:shadow-2xl',
								!((index + 1) % 3 === 0) && 'border-r',
								index < DashboardNavs.length - 2 && 'border-b'
							)}
							href={resolve(cast(nav.href + '/dashboard'))}
						>
							<Icon size={40} />
							<span>{nav.name}</span>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}
