<script>
	import Portal from 'svelte-portal';
	import AToastItem from '../atoms/a-toast-item.svelte';
	import { Toast } from '$lib/stores/toast.svelte';
</script>

<Portal target="body">
	<div class="toast-top toast-end toast z-[1000000000]">
		{#each Toast.messages as message (message.id)}
			<AToastItem {message} />
		{/each}
	</div>
</Portal>
