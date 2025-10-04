<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { STATUS_NAMES } from '$lib/constants/tickets';

	import ChatboxCheckedFilled from '../icons/chatbox-checked-filled.svelte';
	import FamiconsCopy from '../icons/famicons-copy.svelte';
	import IcRoundNotSelected from '../icons/ic-round-not-selected.svelte';
	import MaterialSymbolFolderOpenRounded from '../icons/material-symbol-folder-open-rounded.svelte';
	import MingcuteRefresh4Fill from '../icons/mingcute-refresh-4-fill.svelte';

	type Props = {
		status: number;
		extraClass?: string;
	};

	let { status, extraClass = '' }: Props = $props();

	const STYLES: Record<number, { color: string; icon: typeof MaterialSymbolFolderOpenRounded }> = {
		1: { color: 'text-blue-700', icon: MaterialSymbolFolderOpenRounded },
		2: { color: 'text-orange-700', icon: MingcuteRefresh4Fill },
		3: { color: 'text-green-700', icon: ChatboxCheckedFilled },
		4: { color: 'text-gray-700', icon: IcRoundNotSelected },
		5: { color: 'text-purple-700', icon: FamiconsCopy }
	};

	const config = STYLES[status] ?? STYLES[1];
	const Icon = config.icon;
</script>

<span
	role="status"
	aria-label={`Status ${STATUS_NAMES[status]}`}
	title={STATUS_NAMES[status]}
	class={twMerge('select-none', config.color, extraClass)}
>
	<Icon size={20} />
</span>
