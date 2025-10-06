<script>
	import { goto } from '$app/navigation';
	import ASearchInput from '$lib/components/atoms/a-search-input.svelte';
	import HumbleiconsLogout from '$lib/components/icons/humbleicons-logout.svelte';
	import ONavigation from '$lib/components/organisms/o-navigation.svelte';
	import COOKIES from '$lib/constants/cookies.js';
	import { APP_NAVIGATION } from '$lib/constants/navigation/app';
	import { getAppNavState } from '$lib/stores/navigation.svelte';
	import { UsersStore } from '$lib/stores/queries/users.svelte.js';
	import { clearCookie } from '$lib/utils/cookies.js';
	import { twMerge } from 'tailwind-merge';
	import { resolve } from '$app/paths';

	let { children, data } = $props();
	let navState = getAppNavState();

	$effect(() => {
		UsersStore.loadInitial();
	});

	function handleLogout() {
		clearCookie(COOKIES.AUTH_TOKEN_KEY);
		goto(resolve('/'), { replaceState: true });
	}
</script>

<div class="h-screen w-screen overflow-hidden bg-primary px-2">
	<nav class="flex items-center justify-between">
		<div class="flex items-center">
			<img src="/images/logo.png" class="h-16 w-16" alt="" />
			<span class="-translate-x-3 text-2xl font-bold text-white">SafiDesk</span>
		</div>
		<ASearchInput />
		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="flex items-center gap-4 px-4 text-primary-content">
				<div class="flex flex-col items-end">
					<span class="text-xl font-semibold">{data.user.user.username}</span>
					<address class="not-italic">{data.user.user.email}</address>
				</div>
				<img
					src="https://avatar.iran.liara.run/public/boy"
					class="h-10 w-10 rounded-full"
					alt="profile"
				/>
			</div>
			<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
			<ul tabindex="0" class="dropdown-content menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
				<li>
					<button onclick={handleLogout} type="button" class="btn btn-error">
						<span>Logout</span>
						<HumbleiconsLogout />
					</button>
				</li>
			</ul>
		</div>
	</nav>
	<div class="flex items-start">
		<aside
			onmouseenter={() => navState.setState(true)}
			onmouseleave={() => navState.setState(false)}
			class={twMerge(
				'h-[calc(100vh-72px)] w-16 px-4 text-primary-content transition-all duration-500',
				navState.open && 'w-60'
			)}
		>
			<ONavigation navigation={APP_NAVIGATION} navOpen={navState.open} />
		</aside>
		<div class="h-[calc(100vh-70px)] flex-1 rounded-xl bg-base-200 transition-all">
			{@render children?.()}
		</div>
	</div>
</div>
