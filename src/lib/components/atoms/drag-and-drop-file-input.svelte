<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CloudUploadOutline from '../icons/cloud-upload-outline.svelte';

	let dropZoneElement;
	let files = [];

	function handleFiles(files: FileList) {
		console.log(files);
	}
</script>

<div
	bind:this={dropZoneElement}
	on:dragover|preventDefault
	on:dragleave|preventDefault
	on:drop|preventDefault|stopPropagation={(e) => {
		if (e.dataTransfer?.files.length) {
			handleFiles(e.dataTransfer.files);
		}
	}}
	on:click={() => document.getElementById('file-input')?.click()}
	class="flex h-30 w-full flex-col items-center justify-center border border-dashed border-base-content p-10"
>
	<CloudUploadOutline size={100} />
	<p>Drag and drop files here or click to select</p>
	<input type="file" id="file-input" class="hidden" />
</div>
