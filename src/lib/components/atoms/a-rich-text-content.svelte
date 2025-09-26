<script lang="ts">
	let { content = '' } = $props<{ content?: string | null }>();
	import '$lib/styles/tiptap-renderer.css';
</script>

<div class="tiptap-renderer">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html content}
</div>
