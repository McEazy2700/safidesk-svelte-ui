<script>
	import ASearchInput from '$lib/components/atoms/a-search-input.svelte';
	import ONavigation from '$lib/components/organisms/o-navigation.svelte';
	import { APP_NAVIGATION } from '$lib/constants/navigation/app';
	import { getAppNavState } from '$lib/stores/navigation.svelte';
	import { twMerge } from 'tailwind-merge';

	let { children } = $props();
	let navState = getAppNavState();
</script>

<div class="h-screen w-screen overflow-hidden bg-primary px-2">
	<nav class="flex items-center justify-between">
		<div class="flex items-center">
			<img src="/images/logo.png" class="h-16 w-16" alt="" />
			<span class="-translate-x-3 text-2xl font-bold text-white">SafiDesk</span>
		</div>
		<ASearchInput />
		<div class="px-4">
			<img
				src="https://avatar.iran.liara.run/public/boy"
				class="h-12 w-12 rounded-full"
				alt="profile"
			/>
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
