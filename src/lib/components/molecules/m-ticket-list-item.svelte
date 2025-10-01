<script lang="ts">
	import { formatToMonthDay } from '$lib/utils/time';
	import AAvatarGroup from '../atoms/a-avatar-group.svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { slugify } from '$lib/utils/urls';
	import { cast } from '$lib/utils/typing';
	import type { Pathname } from '$app/types';
	import { twMerge } from 'tailwind-merge';
	import type { CustomTicket } from '$lib/services/api';
	import MaterialSymbolsPendingOutline from '../icons/material-symbols-pending-outline.svelte';
	import CodexWarning from '../icons/codex-warning.svelte';

	type Props = {
		ticket: CustomTicket;
	};

	let { ticket }: Props = $props();
	let href = $derived(() => {
		const path = resolve('/(user)/app/tickets/[slug]', {
			slug: slugify(`${ticket.title}__${ticket.id}`)
		});
		return path;
	});

	let active = $derived(page.url.pathname.split('__').pop() === String(ticket.id));
</script>

<div
	class={twMerge(
		'relative flex w-full flex-col gap-3 border-y border-black/10 p-3',
		active && 'bg-info/10'
	)}
>
	{#if active}
		<div class="absolute top-0 left-0 h-full w-[4px] bg-info/60"></div>
	{/if}
	<div class="flex w-full items-center justify-between">
		<a
			href={resolve(cast<Pathname>(href() + `?${page.url.searchParams.toString()}`))}
			class="line-clamp-1 gap-4 font-semibold capitalize">{ticket.title}</a
		>
		<time datetime={ticket.due_date} class="text-sm whitespace-nowrap text-base-content/60"
			>{formatToMonthDay(ticket.due_date)}</time
		>
	</div>
	<div class="flex items-center justify-between text-sm">
		<div class="flex items-center gap-2">
			<input
				checked={[3, 4].includes(Number(ticket.status))}
				type="checkbox"
				class="pointer-events-none checkbox checkbox-sm text-success checked:border-success disabled:opacity-80"
			/>
			<span class="text-xs font-semibold text-primary/60">SAT-{ticket.id}</span>
		</div>
		<div class="flex items-center gap-1">
			{#if ticket.priority == 3}
				<span class="text-purple-400">
					<CodexWarning size={26} />
				</span>
			{/if}
			{#if ticket.status == 1}
				<span class="text-yellow-500">
					<MaterialSymbolsPendingOutline />
				</span>
			{/if}
			<span
				title={ticket.queue?.title.replace('_', ' ')}
				class="max-w-28 overflow-hidden rounded-full bg-info/15 p-1 px-2 text-xs font-semibold text-ellipsis whitespace-nowrap capitalize"
				>{ticket.queue?.title.replace('_', ' ')}</span
			>
			<AAvatarGroup
				avatars={[
					{ id: 'user-A', avatarUrl: 'https://i.pravatar.cc/40?img=1' },
					{ id: 'user-B', avatarUrl: 'https://i.pravatar.cc/40?img=2' }
				].map((a) => ({ src: a.avatarUrl, alt: a.id }))}
			/>
		</div>
	</div>
</div>
