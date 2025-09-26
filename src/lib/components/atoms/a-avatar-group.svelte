<script lang="ts">
	type Props = {
		avatars: { src: string; alt: string }[];
	};

	let { avatars }: Props = $props();
</script>

<div class="avatar-group -space-x-4">
	{#each avatars as avatar, index (index)}
		<div class="avatar">
			<div class="w-6">
				<img src={avatar.src} alt={avatar.alt} />
			</div>
		</div>
	{/each}
</div>
