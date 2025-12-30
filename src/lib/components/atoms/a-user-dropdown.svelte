<script lang="ts">
	import { UsersStore } from '$lib/stores/queries/users.svelte';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		disabled?: boolean;
		userId?: number;
	};
	let { userId = $bindable(), disabled }: Props = $props();

	$effect(() => {
		UsersStore.loadInitial();
	});
</script>

<div
	class={twMerge(
		'dropdown !dropdown-center !dropdown-bottom w-full',
		disabled && 'pointer-events-none opacity-80'
	)}
>
	<div
		tabindex="0"
		role="button"
		class="btn m-1 w-full justify-start border-black/10 bg-white btn-outline"
	>
		<span class="border-r border-black/10 pr-4">User</span>
		<span class={twMerge('pl-4 capitalize', !userId && 'opacity-60')}
			>{UsersStore.list.find((v) => v.id === userId)?.username ?? 'Select User'}</span
		>
	</div>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<ul tabindex="0" class="dropdown-content menu z-1 w-full rounded-box bg-base-100 p-2 shadow-sm">
		{#each UsersStore.list as user (user.id)}
			<li>
				<button onclick={() => (userId = user.id)} type="button" class="capitalize"
					>{user.username}</button
				>
			</li>
		{/each}
	</ul>
</div>
