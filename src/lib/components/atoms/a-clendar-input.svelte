<script lang="ts">
	import { formatToMonthDay } from '$lib/utils/time';
	import type Pikaday from 'pikaday';
	import { twMerge } from 'tailwind-merge';
	let myDatepicker = $state<HTMLDivElement>();
	let picker = $state<Pikaday>();

	$effect(() => {
		if (myDatepicker) {
			// Use dynamic import instead of require
			import('pikaday').then((module) => {
				const Pikaday = module.default;
				picker = new Pikaday({
					field: myDatepicker
				});
				return () => picker?.destroy();
			});
		}
	});

	type Props = {
		disabled?: boolean;
		due_date?: string | null;
	};
	let { disabled, due_date = $bindable() }: Props = $props();

	$effect(() => console.log(due_date));
</script>

<label
	for="date-picker"
	class={twMerge(
		'btn ml-1 w-full justify-start border-black/10 bg-white btn-outline',
		disabled && 'pointer-events-none cursor-not-allowed opacity-60'
	)}
>
	<span class="border-r border-black/10 pr-4 whitespace-nowrap">Due Date</span>
	<input
		id="date-picker"
		onchange={() => (due_date = picker?.getDate()?.toISOString())}
		type="text"
		class="pika-single input w-full input-ghost outline-none"
		bind:this={myDatepicker}
		value={due_date ? formatToMonthDay(due_date) : 'Pick a day'}
	/>
</label>
