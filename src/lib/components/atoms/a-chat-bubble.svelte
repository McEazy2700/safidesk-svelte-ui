<script lang="ts">
	import type { Message } from '$lib/types/chat';
	import { formatToFriendlyDateTime } from '$lib/utils/time';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		message: Message;
	};

	let { message }: Props = $props();
	let isAi = message.sender === 'safidesk-ai';
</script>

<div
	transition:fade
	class={twMerge('flex items-start gap-3', !isAi ? 'flex-row-reverse self-end' : '')}
>
	<img
		src={isAi
			? 'https://img.freepik.com/free-vector/floating-robot_78370-3669.jpg'
			: 'https://i.pravatar.cc/40?img=1'}
		alt=""
		class="h-6 w-6 rounded-full object-cover"
	/>
	<div
		class={twMerge(
			'flex max-w-2xl flex-col rounded-3xl bg-base-300 p-2 px-4 shadow-2xl shadow-black/10',
			!isAi ? 'items-end justify-end rounded-tr-none' : 'rounded-tl-none'
		)}
	>
		<span class="text-sm text-secondary">{message.sender}</span>
		<div>
			{message.message}
		</div>
		<time
			class={twMerge('mt-2 text-xs text-base-content/60', !isAi ? 'self-start' : '')}
			datetime={message.createdAt}>{formatToFriendlyDateTime(message.createdAt)}</time
		>
	</div>
</div>
