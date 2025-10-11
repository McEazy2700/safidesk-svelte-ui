<script lang="ts">
	import ALogo from '$lib/components/atoms/a-logo.svelte';
	import { resolve } from '$app/paths';
	import ACarousel from '$lib/components/atoms/a-carousel.svelte';

	const HERO_VIDEOS = [
		'https://videos.pexels.com/video-files/8048483/8048483-hd_1080_1920_25fps.mp4',
		'https://videos.pexels.com/video-files/8865602/8865602-hd_1080_1920_25fps.mp4',
		'https://videos.pexels.com/video-files/4708366/4708366-uhd_1440_2732_25fps.mp4',
		'https://videos.pexels.com/video-files/5377992/5377992-uhd_1440_2560_25fps.mp4',
		'https://videos.pexels.com/video-files/5377976/5377976-uhd_1440_2560_25fps.mp4'
	];
</script>

<nav class="flex items-center justify-between p-4 pr-8">
	<ALogo />
	<div
		class="flex items-center gap-4 rounded-full bg-black/10 p-2 px-4 font-medium backdrop-blur-md"
	>
		<a href={resolve('/')}>Home</a>
		<a href={resolve('/')}>About</a>
		<a href={resolve('/')}>Features</a>
	</div>
	<div>
		<a
			class="rounded-full bg-black/10 p-2 px-4 font-medium backdrop-blur-md"
			href={resolve('/auth/login')}
		>
			Login
		</a>
	</div>
</nav>

<div class="flex items-center gap-8 p-4 lg:gap-14 lg:p-8 xl:p-16">
	<div class="flex flex-1 flex-col gap-4">
		<h1 class="text-7xl font-semibold">Service Management, Simplified.</h1>
		<p class="text-xl font-light">
			The modern, unified ITSM platform designed for IT efficiency and user satisfaction.
		</p>
		<div class="mt-4 flex items-center gap-4">
			<a href={resolve('/')} class="rounded-full bg-base-content p-4 px-8 text-base-200"
				>Learn More</a
			>
			<a href={resolve('/auth/login')} class="rounded-full bg-base-content/20 p-4 px-10">Sign In</a>
		</div>
	</div>
	<div class="flex h-[80vh] flex-[0.8] items-center justify-center">
		<ACarousel class="h-[70vh]" speed="30s" reverse>
			{#each HERO_VIDEOS as video, index (index)}
				<div class="mb-4 aspect-[160/270] w-52 overflow-hidden rounded-4xl bg-base-content/10">
					<video class="h-full w-full object-cover" src={video} autoplay loop playsinline muted
					></video>
				</div>
			{/each}
		</ACarousel>
		<ACarousel class="h-[70vh]" speed="30s">
			{#each HERO_VIDEOS as video, index (index)}
				<div class="mb-4 aspect-[160/270] w-52 overflow-hidden rounded-4xl bg-base-content/10">
					<video class="h-full w-full object-cover" src={video} autoplay loop playsinline muted
					></video>
				</div>
			{/each}
		</ACarousel>
	</div>
</div>
