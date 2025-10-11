<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		children?: Snippet;
		class?: string;
		speed?: string;
		reverse?: boolean;
	};

	const { class: klass, speed = '20s', reverse = false, children }: Props = $props();
</script>

<div class={twMerge('scroll-container', klass)}>
	<div class="scroll-content" class:reverse style="--speed: {speed};">
		<div class="scroll-items">
			{@render children?.()}
		</div>
		<div class="scroll-items" aria-hidden="true">
			{@render children?.()}
		</div>
	</div>
</div>

<style>
	.scroll-container {
		overflow: hidden;
		position: relative;
		height: 100%;
		width: 100%;
		mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
		-webkit-mask-image: linear-gradient(
			to bottom,
			transparent 0%,
			black 10%,
			black 90%,
			transparent 100%
		);
	}

	.scroll-content {
		display: flex;
		flex-direction: column;
		animation: scroll var(--speed) linear infinite;
	}

	.scroll-content.reverse {
		animation: scroll-reverse var(--speed) linear infinite;
	}

	.scroll-items {
		display: flex;
		flex-direction: column;
	}

	@keyframes scroll {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-50%);
		}
	}

	@keyframes scroll-reverse {
		0% {
			transform: translateY(-50%);
		}
		100% {
			transform: translateY(0);
		}
	}

	/* Prevent items from shrinking */
	:global(.scroll-items > *) {
		flex-shrink: 0;
	}
</style>
