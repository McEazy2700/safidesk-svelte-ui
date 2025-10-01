<script lang="ts">
	import type { FollowUp } from '$lib/services/api';
	import { formatToFriendlyDateTime } from '$lib/utils/time';
	import AAvatarGroup from '../atoms/a-avatar-group.svelte';
	import ARichTextContent from '../atoms/a-rich-text-content.svelte';

	type Props = {
		followUp: FollowUp;
	};

	let { followUp }: Props = $props();
</script>

<div class="rounded-xl border border-black/10 bg-white p-4 shadow-lg shadow-black/5">
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-2">
			<AAvatarGroup
				avatars={[{ id: 'user-B', avatarUrl: 'https://i.pravatar.cc/40?img=2' }].map((a) => ({
					src: a.avatarUrl,
					alt: a.id
				}))}
			/>
			<p class="text-lg font-bold text-primary">Arllie Harmon</p>
		</div>
		<time class="text-sm font-semibold opacity-60" datetime={followUp.date}
			>{formatToFriendlyDateTime(followUp.date)}</time
		>
	</div>
	<div class="p-2 pl-8">
		<h5>{followUp.title}</h5>
		<div>
			<ARichTextContent content={followUp.comment} />
		</div>
	</div>
</div>
