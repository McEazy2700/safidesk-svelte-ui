<script lang="ts">
	import { QueuesStore } from '$lib/stores/queries/queues.svelte';
	import AClendarInput from '../atoms/a-clendar-input.svelte';
	import AQueueDropdown from '../atoms/a-queue-dropdown.svelte';
	import ATicketPriorityDropdown from '../atoms/a-ticket-priority-dropdown.svelte';
	import ATicketStatusDropdown from '../atoms/a-ticket-status-dropdown.svelte';
	import ATiptap from '../atoms/a-tiptap.svelte';

	export type TicketFormArgs = {
		title: string;
		content: string;
		status: number;
		priority: number;
		queue_id: number;
		due_date?: string;
	};

	type Props = {
		edit?: boolean;
		title?: string;
		content?: string;
		status?: number;
		priority?: number;
		queue_id?: number;
		loading?: boolean;
		due_date?: string;
		onsave?: (value: TicketFormArgs) => void;
	};

	let {
		edit,
		title = $bindable(''),
		content = $bindable(''),
		status = $bindable(1),
		priority = $bindable(3),
		queue_id = $bindable(),
		due_date = $bindable(),
		loading,
		onsave
	}: Props = $props();

	$effect(() => {
		if (!queue_id && QueuesStore.list.length > 0) {
			queue_id = QueuesStore.list[0].id;
		}
	});
</script>

<div class="flex flex-col gap-2">
	<div class="grid grid-cols-2 items-center gap-x-4">
		<ATicketStatusDropdown bind:status />
		<ATicketPriorityDropdown disabled={edit} bind:priority />
		<AQueueDropdown bind:queue_id />
		<AClendarInput bind:due_date />
	</div>
	<input
		bind:value={title}
		type="text"
		class="input input-lg w-full border input-ghost border-black/5 text-xl font-extrabold"
		placeholder="Title..."
	/>
	<ATiptap
		exportDisabled={content.length < 10}
		onupdate={({ html }) => (content = html)}
		{loading}
		onexport={({ html }) =>
			onsave?.({ title, content: html, status, priority, queue_id: Number(queue_id), due_date })}
	/>
</div>
