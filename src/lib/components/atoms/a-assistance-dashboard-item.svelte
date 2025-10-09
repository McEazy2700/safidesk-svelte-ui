<script lang="ts">
	import type { SvgProps } from '$lib/types/svg';
	import type { Component } from 'svelte';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import { cast } from '$lib/utils/typing';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		color?: 'red' | 'green' | 'blue';
		prompt: string;
		icon: Component<SvgProps>;
		href: Pathname;
		description?: string;
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	type Unknown = any;

	let { color = 'red', prompt, icon: Icon, href, description }: Props = $props();

	const colors = {
		red: {
			text: 'text-red-500',
			bg: 'bg-red-500'
		},
		green: {
			text: 'text-green-500',
			bg: 'bg-green-500'
		},
		blue: {
			text: 'text-blue-500',
			bg: 'bg-blue-500'
		}
	};
</script>

<div
	class="flex max-w-xs flex-col gap-2 rounded-2xl border border-black/5 p-4 shadow-xl shadow-black/5"
>
	<div class="flex items-center justify-between gap-4">
		<Icon class={colors[color].text} size={70} />
		<a
			class={twMerge('rounded-xl p-2 px-4 text-lg font-semibold text-white', colors[color].bg)}
			href={resolve(cast<Unknown>(String(href)))}
		>
			{prompt}
		</a>
	</div>
	<p class="text-base-content/60">
		{description}
	</p>
</div>
