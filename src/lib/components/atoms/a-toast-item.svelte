<script lang="ts">
	import { Toast } from '$lib/stores/toast.svelte';
	import type { ToastMessage } from '$lib/types/toast';
	import { slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	type Props = { message: ToastMessage };
	let { message }: Props = $props();

	$effect(() => {
		const timeout = setTimeout(() => {
			Toast.remove(message.id);
		}, message.duration ?? 10000);

		return () => clearTimeout(timeout);
	});
</script>

<div
	transition:slide
	class={twMerge(
		'alert alert-error',
		message.type === 'info'
			? 'alert-info'
			: message.type === 'warning'
				? 'alert-warning'
				: message.type === 'success'
					? 'alert-success'
					: 'alert-error'
	)}
>
	<span>{message.message}</span>
</div>
