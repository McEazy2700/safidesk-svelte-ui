<script lang="ts">
	import AAiChatInput from '$lib/components/atoms/a-ai-chat-input.svelte';
	import ATicketScreen from '$lib/components/atoms/a-ticket-screen.svelte';
	import { AIAgentMutation } from '$lib/services/utils/mutations/aiAgent.svelte';

	const handleSend = (message: string) => {
		AIAgentMutation.sendMessage(message);
	};
</script>

<ATicketScreen>
	{#snippet header()}
		<h3 class="text-xl font-semibold text-primary capitalize">AI Agent</h3>
	{/snippet}
	<div class="absolute bottom-4 left-1/2 w-full -translate-x-1/2">
		<AAiChatInput onsend={handleSend} />
	</div>
</ATicketScreen>
