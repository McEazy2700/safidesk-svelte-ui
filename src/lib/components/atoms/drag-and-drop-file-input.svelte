<script lang="ts">
	import CloudUploadOutline from '../icons/cloud-upload-outline.svelte';

	type Props = {
		onselectfiles?: (file: File[]) => void;
	};

	let dropZoneElement: HTMLDivElement;
	let { onselectfiles }: Props = $props();
	let addedFiles = $state<File[]>();
	let uploadedFiles = $state<boolean>(false);

	function handleFiles(files: FileList) {
		uploadedFiles = true;
		addedFiles = Array.from(files);
		onselectfiles?.(addedFiles);
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	bind:this={dropZoneElement}
	ondragover={(e) => e.preventDefault()}
	ondragleave={(e) => e.preventDefault()}
	ondrop={(e) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.dataTransfer?.files.length) {
			handleFiles(e.dataTransfer.files);
		}
	}}
	class="mt-1 flex h-40 w-full flex-col items-center justify-center rounded-2xl border-3 border-dashed border-base-content/60 p-10"
>
	<CloudUploadOutline size={50} />
	{#if uploadedFiles}
		<div class="flex flex-row">
			{#each addedFiles as file (file.name)}
				<p>{file.name.slice(0, 15)}</p>
				&nbsp;&nbsp;&nbsp;
			{/each}
		</div>
	{:else}
		<p>
			<button
				class="btn p-0 font-semibold text-blue-500 btn-link no-underline"
				onclick={() => document.getElementById('file-input')?.click()}>Upload Approval/Docs</button
			> or drag and drop
		</p>
	{/if}
	<input type="file" id="file-input" class="hidden" />
</div>
