<script lang="ts">
	import PaperPlane from '../icons/paper-plane.svelte';
	import DragAndDropFileInput from '../atoms/drag-and-drop-file-input.svelte';
	import ATextDropdown from '../atoms/a-text-dropdown.svelte';

	let files = $state();
	let deviceSpcification = $state<string>();
	let deliveryLocation = $state<string>();

	const handleFileSelect = (fileList: File[]) => {
		files = fileList;
		console.log(files);
	};
</script>

<form class="mt-8 rounded bg-white p-4">
	<div class="rounded border border-base-300 bg-primary/10 p-4">
		<h2 class="text-xl font-bold">Hardware Details</h2>
		<hr class="mt-1 mb-3 opacity-10" />

		<div class="text-sm">
			<h3 class="font-semibold">Request Type</h3>
			<div class="mt-2 flex flex-row gap-20 font-semibold">
				<div class="mr-9">
					<input name="new-hire" type="radio" />
					<label for="new-hire">New Hire</label>
				</div>

				<div class="mr-9">
					<input name="replacement" type="radio" />
					<label for="replacement">Replacement</label>
				</div>

				<div class="mr-9">
					<input name="accessory" type="radio" />
					<label for="accessory">Accessory</label>
				</div>
			</div>
		</div>

		<div class="mt-4 flex w-full flex-row gap-3">
			<div class="flex flex-1 flex-col text-sm">
				<label for="devices" class="font-semibold">Device Specification</label>
				<ATextDropdown
					bind:selected={deviceSpcification}
					items={['Standard Laptop (HP ProBook)', 'Desktop Computer', 'Apple Macbook']}
				/>
			</div>
			<div class="flex flex-1 flex-col text-sm">
				<label for="devices" class="font-semibold">Delivery Location</label>
				<ATextDropdown
					bind:selected={deliveryLocation}
					items={['Head Office - Abuja', 'Niger', 'Regional Branch - Lagos']}
				/>
			</div>
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
