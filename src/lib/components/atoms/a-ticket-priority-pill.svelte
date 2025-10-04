<script lang="ts">
	import MaterialSymbolCircle from '../icons/material-symbol-circle.svelte';
	import { twMerge } from 'tailwind-merge';
	import { PRIORITY_NAMES } from '$lib/constants/tickets';

	type Variant = 'subtle' | 'filled' | 'outline';
	type Size = 'sm' | 'md' | 'lg';

	type Props = {
		priority: number;
		variant?: Variant;
		size?: Size;
		showIcon?: boolean;
		extraClass?: string;
	};

	let {
		priority,
		variant = 'subtle',
		size = 'md',
		showIcon = true,
		extraClass = ''
	}: Props = $props();

	const STYLES: Record<number, { subtle: string; filled: string; outline: string; icon: string }> =
		{
			1: {
				subtle: 'bg-red-50 text-red-700',
				filled: 'bg-red-600 text-white',
				outline: 'border border-red-600 text-red-600 bg-transparent',
				icon: 'text-red-600'
			},
			2: {
				subtle: 'bg-orange-50 text-orange-700',
				filled: 'bg-orange-500 text-white',
				outline: 'border border-orange-500 text-orange-500 bg-transparent',
				icon: 'text-orange-500'
			},
			3: {
				subtle: 'bg-blue-50 text-blue-700',
				filled: 'bg-blue-600 text-white',
				outline: 'border border-blue-600 text-blue-600 bg-transparent',
				icon: 'text-blue-600'
			},
			4: {
				subtle: 'bg-green-50 text-green-700',
				filled: 'bg-green-600 text-white',
				outline: 'border border-green-600 text-green-600 bg-transparent',
				icon: 'text-green-600'
			},
			5: {
				subtle: 'bg-gray-100 text-gray-700',
				filled: 'bg-gray-600 text-white',
				outline: 'border border-gray-400 text-gray-700 bg-transparent',
				icon: 'text-gray-500'
			}
		};

	const SIZE_CLASSES: Record<Size, string> = {
		sm: 'px-2 py-0.5 text-xs rounded-full inline-flex items-center gap-1',
		md: 'px-3 py-1 text-sm rounded-full inline-flex items-center gap-2',
		lg: 'px-4 py-1.5 text-sm rounded-full inline-flex items-center gap-2'
	};

	const iconSize = size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5';

	const styles = STYLES[priority] ?? STYLES[3];
	const variantClass =
		variant === 'filled' ? styles.filled : variant === 'outline' ? styles.outline : styles.subtle;
</script>

<span
	role="status"
	aria-label={`Priority ${PRIORITY_NAMES[priority]} (${priority})`}
	title={PRIORITY_NAMES[priority]}
	class={twMerge(
		'font-semibold capitalize select-none',
		SIZE_CLASSES[size],
		variantClass,
		extraClass
	)}
>
	{#if showIcon}
		<MaterialSymbolCircle class={twMerge(iconSize, styles.icon)} />
	{/if}
	<span class="truncate">{PRIORITY_NAMES[priority]}</span>
</span>
