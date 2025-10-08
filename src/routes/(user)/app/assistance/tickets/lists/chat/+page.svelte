<script lang="ts">
	import AAiChatInput from '$lib/components/atoms/a-ai-chat-input.svelte';
	import AChatBubble from '$lib/components/atoms/a-chat-bubble.svelte';
	import ATicketScreen from '$lib/components/atoms/a-ticket-screen.svelte';
	import { AIAgentMutation } from '$lib/services/utils/mutations/aiAgent.svelte';
	import type { Message } from '$lib/types/chat.js';

	let messages = $state<Message[]>([]);
	let { data } = $props();
	let chatContainer = $state<HTMLDivElement>();

	$effect(() => {
		if (messages.length > 0 && chatContainer) {
			chatContainer.scrollTo({
				top: chatContainer.scrollHeight,
				behavior: 'smooth'
			});
		}
	});

	const handleSend = (message: string) => {
		messages = [
			...messages,
			{
				message,
				sender: data.user.user.username,
				createdAt: new Date().toISOString()
			}
		];
		AIAgentMutation.sendMessage(message).then((res) => {
			messages = [
				...messages,
				{
					message: res.reply,
					createdAt: new Date().toISOString(),
					sender: 'safidesk-ai'
				}
			];
		});
	};
</script>

<ATicketScreen>
	{#snippet header()}
		<h3 class="text-xl font-semibold text-primary capitalize">AI Agent</h3>
	{/snippet}
	<div bind:this={chatContainer} class="flex h-[calc(100vh-300px)] flex-col gap-4 overflow-y-auto">
		{#each messages as message, index (index)}
			<AChatBubble {message} />
		{/each}
	</div>
	<div class="absolute bottom-4 left-1/2 w-full -translate-x-1/2">
		<AAiChatInput onsend={handleSend} />
	</div>
</ATicketScreen>/ATicketScreen>
