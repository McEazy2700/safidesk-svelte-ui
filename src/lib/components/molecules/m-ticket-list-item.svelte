<script lang="ts">
	import { formatToMonthDay } from '$lib/utils/time';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { slugify } from '$lib/utils/urls';
	import { cast } from '$lib/utils/typing';
	import { twMerge } from 'tailwind-merge';
	import type { TicketRead } from '$lib/services/api';
	import ATicketPriorityIcon from '../atoms/a-ticket-priority-icon.svelte';
	import ATicketStatusIcon from '../atoms/a-ticket-status-icon.svelte';
	import ATicketStatusPill from '../atoms/a-ticket-status-pill.svelte';
	import ATicketPriorityPill from '../atoms/a-ticket-priority-pill.svelte';
	import { capitalize } from '$lib/utils/text';

	type Props = {
		fullWidth?: boolean;
		ticket: TicketRead;
	};

	let { ticket, fullWidth }: Props = $props();
	let href = $derived(() => {
		const path = resolve('/(user)/app/assistance/tickets/lists/[slug]', {
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
			href={resolve(cast<any>(href() + `?${page.url.searchParams.toString()}`))}
			class="line-clamp-1 gap-4 font-semibold capitalize">{ticket.title}</a
		>
		<time datetime={ticket.due_date} class="text-sm whitespace-nowrap text-base-content/60"
			>{formatToMonthDay(ticket.due_date)}</time
		>
	</div>
	<div class="flex items-center justify-between text-sm">
		<div class="flex items-center gap-2">
			{#if fullWidth}
				<ATicketStatusPill status={ticket.status ?? 1} />
			{:else}
				<ATicketStatusIcon status={ticket.status ?? 1} />
			{/if}
			<span class="text-xs font-semibold text-primary/60">SAT-{ticket.id}</span>
		</div>
		<div class="flex items-center gap-1">
			{#if fullWidth}
				<ATicketPriorityPill priority={ticket.priority ?? 3} />
			{:else}
				<ATicketPriorityIcon priority={ticket.priority ?? 3} />
			{/if}
			<span
				title={capitalize(ticket.queue?.title.replaceAll('_', ' ') ?? '')}
				class={twMerge(
					'overflow-hidden rounded-full bg-info/15 p-1 px-2 text-xs font-semibold text-ellipsis whitespace-nowrap capitalize',
					!fullWidth && 'max-w-14'
				)}>{ticket.queue?.title.replaceAll('_', ' ')}</span
			>
			<span
				title={ticket.ticket_type ?? 'Incident'}
				class={twMerge(
					'overflow-hidden rounded-full bg-secondary/15 p-1 px-2 text-xs font-semibold text-ellipsis whitespace-nowrap capitalize',
					!fullWidth && 'max-w-28'
				)}>{ticket.ticket_type ?? 'Incident'}</span
			>
		</div>
	</div>
</div>
