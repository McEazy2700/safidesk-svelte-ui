<script lang="ts">
	import LucideSend from '../icons/lucide-send.svelte';
	import LucideSparkle from '../icons/lucide-sparkle.svelte';

	type Props = {
		onsend?: (text: string) => void;
	};

	let { onsend }: Props = $props();

	let message = $state('');
	let textarea = $state<HTMLTextAreaElement | null>(null);

	function handleSubmit() {
		if (message.trim()) {
			onsend?.(message);
			message = '';
			adjustHeight();
		}
	}
	type KeydownEvent = KeyboardEvent & {
		currentTarget: EventTarget & HTMLTextAreaElement;
	};

	function handleKeydown(e: KeydownEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSubmit();
		}
	}

	function adjustHeight() {
		if (textarea) {
			textarea.style.height = 'auto';
			textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
		}
	}

	$effect(() => {
		if (message !== undefined) {
			adjustHeight();
		}
	});
</script>

<div class="mx-auto w-full max-w-3xl p-4">
	<div
		class="relative rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
	>
		<div class="flex items-end gap-3 p-3">
			<div class="mt-1 flex-shrink-0">
				<div
					class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500"
				>
					<LucideSparkle class="h-4 w-4 text-white" />
				</div>
			</div>

			<div class="min-w-0 flex-1">
				<textarea
					bind:this={textarea}
					bind:value={message}
					onkeydown={handleKeydown}
					oninput={adjustHeight}
					placeholder="Ask or search for anything..."
					class="w-full resize-none border-0 text-sm leading-relaxed text-gray-900 placeholder-gray-400 outline-none focus:ring-0"
					rows="1"
					style="max-height: 200px; overflow-y: auto;"
				></textarea>
			</div>

			<div class="mt-1 flex-shrink-0">
				<button
					onclick={handleSubmit}
					disabled={!message.trim()}
					class="flex h-8 w-8 items-center justify-center rounded-lg transition-colors {message.trim()
						? 'bg-gray-900 text-white hover:bg-gray-800'
						: 'cursor-not-allowed bg-gray-100 text-gray-400'}"
					aria-label="Send message"
				>
					<LucideSend class="h-4 w-4" />
				</button>
			</div>
		</div>
	</div>

	<div class="mt-2 px-4 text-xs text-gray-500">Press Enter to send, Shift + Enter for new line</div>
</div>

<style>
	textarea::placeholder {
		color: rgb(156 163 175);
	}

	textarea::-webkit-scrollbar {
		width: 6px;
	}

	textarea::-webkit-scrollbar-track {
		background: transparent;
	}

	textarea::-webkit-scrollbar-thumb {
		background: rgb(209 213 219);
		border-radius: 3px;
	}

	textarea::-webkit-scrollbar-thumb:hover {
		background: rgb(156 163 175);
	}
</style>
