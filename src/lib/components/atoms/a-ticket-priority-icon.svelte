<script lang="ts">
	import { PRIORITY_COLORS } from '$lib/constants/tickets';
	import MaterialSymbolCircle from '../icons/material-symbol-circle.svelte';

	type Props = {
		priority: number;
	};

	let { priority }: Props = $props();
</script>

<span class="flex items-center gap-1">
	<MaterialSymbolCircle class={PRIORITY_COLORS[priority]} size={20} />
</span>
