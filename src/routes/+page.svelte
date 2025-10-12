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

<nav class="fixed inset-x-0 top-0 z-[1000] flex items-center justify-between p-4 pr-8">
	<ALogo />
	<div
		class="flex items-center gap-4 rounded-full bg-black/10 p-4 px-8 font-medium backdrop-blur-md"
	>
		<a href={resolve('/')}>Home</a>
		<a href={resolve('/')}>About</a>
		<a href={resolve('/')}>Features</a>
	</div>
	<div>
		<a
			class="rounded-full bg-black/10 p-4 px-8 font-medium backdrop-blur-md"
			href={resolve('/auth/login')}
		>
			Login
		</a>
	</div>
</nav>

<div class="mt-14 flex flex-col items-center gap-8 p-8 lg:flex-row lg:gap-14 lg:p-8 xl:p-16">
	<div class="flex flex-1 flex-col gap-4 pb-14 lg:py-0">
		<h1 class="mt-14 text-5xl font-semibold lg:text-7xl">Service Management, Simplified.</h1>
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
	<div class="hidden h-[80vh] flex-[0.8] items-center justify-center gap-8 lg:flex">
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
<div class="flex flex-col items-center">
	<div class="mt-8 flex flex-col items-center gap-4">
		<h2 class="max-w-lg text-center text-4xl font-extrabold">
			Powerful Features to Streamline Your Workflow
		</h2>
		<p class="max-w-2xl text-center">
			SafiDesk is built to remove the complexity of IT service management. We focus on giving your
			team the tools they need to be more efficient, reduce response times, and provide exceptional
			support.
		</p>
	</div>
	<div class="mt-16 flex flex-wrap items-center justify-center gap-8">
		<div class="max-w-xs rounded-xl bg-white p-3 shadow-xl shadow-black/5 lg:max-w-sm">
			<h3 class="mb-2 py-1 text-xl font-bold">Automated Ticket Routing</h3>
			<img
				class="aspect-square w-full rounded-md border border-black/5 bg-base-200 object-cover"
				src="https://img.freepik.com/free-vector/web-page-visualization-protocol-procedure-dynamic-software-workflow-full-stack-development-markup-administrate-system-driver-shared-memory-vector-isolated-concept-metaphor-illustration_335657-4299.jpg"
				alt=""
			/>
			<p class="p-2 text-center text-sm text-base-content/70">
				Our system automatically routes new requests to the correct agent or team based on keywords,
				issue type, or priority, ensuring every ticket is handled promptly by the right expert.
			</p>
		</div>
		<div
			class="max-w-xs translate-y-16 rounded-xl bg-white p-3 shadow-xl shadow-black/5 lg:max-w-sm"
		>
			<h3 class="mb-2 py-1 text-xl font-bold">Intuitive Knowledge Base</h3>
			<img
				class="aspect-square w-full rounded-md border border-black/5 bg-base-200 object-cover"
				src="https://img.freepik.com/free-photo/books-with-brain-digital-art-style-education-day_23-2151164350.jpg"
				alt=""
			/>
			<p class="p-2 text-center text-sm text-base-content/70">
				Our integrated knowledge base makes it easy to create and share help articles, guides, and
				FAQs, significantly reducing the number of repeat questions your team receives.
			</p>
		</div>
		<div
			class=" max-w-xs translate-y-16 rounded-xl bg-white p-3 shadow-xl shadow-black/5 lg:max-w-sm lg:translate-y-48"
		>
			<h3 class="mb-2 py-1 text-xl font-bold">Real-time Analytics Dashboard</h3>
			<img
				class="aspect-square w-full rounded-md border border-black/5 bg-base-200 object-cover"
				src="https://img.freepik.com/free-vector/social-media-data-center-smm-stats-digital-marketing-research-market-trends-analysis-female-expert-studying-online-survey-results_335657-2392.jpg"
				alt=""
			/>
			<p class="p-2 text-center text-sm text-base-content/70">
				Monitor key metrics like ticket volume, resolution times, and customer satisfaction to make
				data-driven decisions and optimize your support operations.
			</p>
		</div>
	</div>
</div>
