<script lang="ts">
	import { resolve } from '$app/paths';
	import ActivityManagement from '$lib/components/icons/activity-management.svelte';
	import CarbonWorkflowAutomation from '$lib/components/icons/carbon-workflow-automation.svelte';
	import EmojioneMonotoneGear from '$lib/components/icons/emojione-monotone-gear.svelte';
	import FaGear from '$lib/components/icons/fa-gear.svelte';
	import NavManage from '$lib/components/icons/nav-manage.svelte';
	import OutlineFind from '$lib/components/icons/outline-find.svelte';
	import RoundPeople from '$lib/components/icons/round-people.svelte';
	import SearchInsights from '$lib/components/icons/search-insights.svelte';
	import SettingDone from '$lib/components/icons/setting-done.svelte';
	import StreamlineIndustryAndInfrastructureSolid from '$lib/components/icons/streamline-industry-and-infrastructure-solid.svelte';
</script>

<nav class="fixed inset-x-0 top-0 z-[1000] flex items-center justify-between bg-primary p-2 pr-8">
	<div class="flex items-center">
		<img src="/images/logo.png" class="h-16 w-16" alt="" />
		<span class="-translate-x-3 text-2xl font-bold text-white">SafiDesk</span>
	</div>
	<div
		class="flex items-center gap-4 rounded-full bg-primary-content/20 p-4 px-8 font-medium text-white backdrop-blur-md"
	>
		<a href={resolve('/')}>Home</a>
		<a href={resolve('/')}>About</a>
		<a href={resolve('/')}>Features</a>
	</div>
	<div>
		<a
			class="rounded-full bg-primary-content/20 p-4 px-8 font-medium text-white backdrop-blur-md"
			href={resolve('/auth/login')}
		>
			Login
		</a>
	</div>
</nav>

<div class="mt-14 flex flex-col bg-base-300 p-6 lg:px-12">
	<div class="flex flex-col lg:flex-row">
		<div class="flex flex-col gap-4 lg:flex-row lg:gap-14 lg:p-4">
			<div class="flex flex-1 flex-col gap-4 pb-14 lg:py-0">
				<h1 class="mt-14 text-5xl font-semibold lg:text-5xl">Service Management, Simplified.</h1>
				<p class="text-xl font-light">
					The modern, unified ITSM platform designed for IT efficiency and user satisfaction.
				</p>
				<div class="mt-4 flex items-center gap-4">
					<a href={resolve('/')} class="rounded-full bg-base-content p-4 px-8 text-base-200"
						>Learn More</a
					>
					<a href={resolve('/auth/login')} class="rounded-full bg-base-content/20 p-4 px-10"
						>Sign In</a
					>
				</div>
			</div>
		</div>
		<div>
			<img
				class="w-150"
				src="/images/Gemini_Generated_Image_nig630nig630nig6.png"
				alt="people discussing business"
			/>
		</div>
	</div>
	<div class="mt-20 flex flex-col items-center gap-3 lg:mt-7">
		<h3 class="text-3xl font-semibold">How Safidesk Helps</h3>
		<div class="grid grid-rows-3 gap-3 lg:grid-cols-3">
			<div class="flex h-50 flex-col justify-between gap-4 rounded-xl bg-white p-5">
				<div class="flex flex-row gap-3">
					<StreamlineIndustryAndInfrastructureSolid size={50} />
					<div>
						<h3 class="text-sm font-bold">Unified Platform</h3>
						<span class="text-sm font-light">Consulate tools, data, & teams</span>
					</div>
				</div>
				<div class="flex flex-row gap-3">
					<EmojioneMonotoneGear size={50} />
					<div>
						<h3 class="text-sm font-bold">Investigate Issues</h3>
						<span class="text-sm font-light">Resolve issues or smart help</span>
					</div>
				</div>
			</div>

			<div class="flex h-50 flex-col justify-between gap-4 rounded-xl bg-white p-5">
				<div class="flex flex-row gap-3">
					<FaGear size={50} />
					<div>
						<h3 class="text-sm font-bold">Automated Workflows</h3>
						<span class="text-sm font-light">Consulate tools, data, & teams</span>
					</div>
				</div>
				<div class="flex flex-row gap-3">
					<CarbonWorkflowAutomation size={50} />
					<div>
						<h3 class="text-sm font-bold">DevOps</h3>
						<span class="text-sm font-light">Integrate development & team help</span>
					</div>
				</div>
			</div>

			<div class="flex h-50 flex-col justify-between gap-4 rounded-xl bg-white p-6">
				<div class="flex flex-row gap-3">
					<SearchInsights size={50} />
					<div>
						<h3 class="text-sm font-bold">Insigntful</h3>
						<span class="text-sm font-light">Consulate tools, data, & teams</span>
					</div>
				</div>
				<div class="flex flex-row gap-3">
					<ActivityManagement size={50} />
					<div>
						<h3 class="text-sm font-bold">Facility Management</h3>
						<span class="text-sm font-light">Manage Assets with</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-14 flex flex-col gap-6 lg:flex-row">
		<div class="grid-cols grid flex-1">
			<h3 class="mb-2 font-bold">Use Cases</h3>
			<div class="grid h-60 grid-cols-2 gap-6 rounded-xl bg-primary p-8">
				<div class="flex flex-row gap-2 text-white">
					<NavManage size={50} />
					<div>
						<h4 class="font-bold">For IT Teams</h4>
						<p class="text-sm">Streamline software management</p>
					</div>
				</div>
				<div class="flex flex-row gap-2 text-white">
					<SettingDone size={50} />
					<div>
						<h4 class="font-bold">DevOps</h4>
						<p class="text-sm">Manage development processes</p>
					</div>
				</div>
				<div class="flex flex-row gap-2 text-white">
					<RoundPeople size={50} />
					<div>
						<h4 class="font-bold">Employees</h4>
						<p class="text-sm">Quick and easy assignment of tasks</p>
					</div>
				</div>
				<div class="flex flex-row gap-2 text-white">
					<OutlineFind size={50} />
					<div>
						<h4 class="font-bold">Observation</h4>
						<p class="text-sm">close task handling and completions</p>
					</div>
				</div>
			</div>
		</div>

		<div class="grid-cols grid flex-1">
			<h3 class="mb-2 font-bold">Built for everyone</h3>
			<div class="flex h-60 flex-col gap-6 rounded-xl bg-primary p-8 text-white">
				<h3 class="text-xl font-bold">Trusted by leading teams</h3>
				<h4>SafiDesk transformed our IT. Our resolution time dropped by 30%!</h4>
				<p></p>
				<div class="flex items-center gap-2">
					<a href={resolve('/')} class="rounded-full bg-base-content p-3 text-sm text-base-200"
						>Learn More</a
					>
					<a href={resolve('/auth/login')} class="rounded-full bg-base-content/20 p-3 text-sm"
						>Start free trial</a
					>
				</div>
			</div>
		</div>
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
