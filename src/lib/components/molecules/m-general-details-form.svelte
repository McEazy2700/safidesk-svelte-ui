<script lang="ts">
	import PaperPlane from '../icons/paper-plane.svelte';
	import DragAndDropFileInput from '../atoms/drag-and-drop-file-input.svelte';

	type UrgencyType = 'low' | 'medium' | 'high';
	let files = $state();
	let urgency = $state<UrgencyType>('medium');
	const handleFileSelect = (fileList: File[]) => {
		files = fileList;
		console.log(files);
	};
</script>

<form class="mt-8 rounded bg-white p-4">
	<div class="rounded border border-base-300 bg-primary/10 p-4">
		<h2 class="text-xl font-bold">Service Details</h2>
		<hr class="mt-1 mb-3 opacity-10" />

		<div class="mt-2 flex w-full flex-col gap-3">
			<div class="flex w-full flex-1 flex-col text-sm">
				<label for="subject" class="font-semibold">Software Title</label>
				<input
					class="input w-full"
					placeholder="e.g., Assistance with login issue"
					name="subject"
					type="text"
				/>
			</div>

			<div class="mt-2 flex flex-1 flex-col text-sm">
				<label for="devices" class="font-semibold">Urgent</label>
				<div class="urgency flex overflow-hidden rounded-md border border-black/10">
					<button
						data-active={urgency === 'low'}
						onclick={() => {
							urgency = 'low';
						}}>Low</button
					>
					<button
						data-active={urgency === 'medium'}
						onclick={() => {
							urgency = 'medium';
						}}>Medium</button
					>
					<button
						data-active={urgency === 'high'}
						onclick={() => {
							urgency = 'high';
						}}>High</button
					>
				</div>
			</div>
		</div>

		<div class="mt-4 text-sm">
			<label class="rounded border border-base-300 font-semibold" for="description"
				>Description</label
			>
			<textarea
				class="h-30 w-full rounded border border-base-300 bg-white p-3"
				placeholder="Please describe your request in detail..."
				name="description"
			></textarea>
		</div>
	</div>

	<div class="mt-4 flex flex-col text-sm">
		<label for="justification" class="font-semibold">Business Justification</label>
		<textarea
			id="justification"
			placeholder="Please provide the business need for this request..."
			class="h-30 w-full rounded border border-base-300 bg-white p-3"
		></textarea>
	</div>

	<div class="mt-4 flex flex-col text-sm">
		<label for="date" class="font-semibold">Date Needed By</label>
		<input name="date" type="date" class="input rounded" />
	</div>

	<div class="mt-4 flex flex-col text-sm">
		<p class="font-semibold">Attachment</p>
		<DragAndDropFileInput onselectfiles={handleFileSelect} />
	</div>
	<div class="mt-4 flex justify-end gap-3">
		<button class="btn rounded btn-outline">Cancel</button>
		<button class="btn rounded bg-green-800 btn-success"> <PaperPlane /> Submit Request</button>
	</div>
</form>

<style>
	.urgency button {
		flex: 1;
		border-right: 1px solid rgba(0, 0, 0, 0.3);
		background-color: white;
		padding-block: 4px;
	}
	.urgency button:last-child {
		border-right: none;
	}
	.urgency button[data-active='true'] {
		background-color: var(--color-primary);
		color: var(--color-primary-content);
	}
</style>
