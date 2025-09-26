<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource-variable/nunito-sans';
	import MToastManager from '$lib/components/molecules/m-toast-manager.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div data-theme="safidesk" class="font-nunito">
	{@render children?.()}
	<MToastManager />
</div>
