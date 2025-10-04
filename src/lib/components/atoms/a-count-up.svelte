<script lang="ts">
	import { onMount } from 'svelte';

	type Props = {
		target: number;
		duration?: number;
		start?: number;
		decimals?: number;
	};

	let { target, duration = 2000, start = 0, decimals = 0 }: Props = $props();

	let displayValue = $state(start);

	onMount(() => {
		const startTime = Date.now();
		const difference = target - start;

		const easeOutQuad = (t: number): number => {
			return t * (2 - t);
		};

		const animate = () => {
			const currentTime = Date.now();
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);

			const easedProgress = easeOutQuad(progress);
			displayValue = start + difference * easedProgress;

			if (progress < 1) {
				requestAnimationFrame(animate);
			} else {
				displayValue = target;
			}
		};

		requestAnimationFrame(animate);
	});
</script>

<span>{displayValue.toFixed(decimals)}</span>
