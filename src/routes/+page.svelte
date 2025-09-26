<script lang="ts">
	import { Toast } from '$lib/stores/toast.svelte.js';
	import { superForm } from 'sveltekit-superforms';

	let { data } = $props();

	const { form, errors, constraints, delayed, enhance } = superForm(data.loginForm, {
		onUpdate: (v) => {
			if (v.form.message?.status === 'error') {
				v.form.message.messages.forEach((m) => {
					Toast.append({ message: m, type: 'error' });
				});
			}
		}
	});
</script>

<div class="flex h-screen w-screen items-center justify-center bg-black/10">
	<div class="flex items-start overflow-hidden rounded-2xl bg-white shadow-lg">
		<div class="relative flex flex-col justify-between">
			<div class="flex flex-col items-center bg-neutral p-4 py-10 text-neutral-content">
				<h2 class="text-2xl font-semibold">Welcome Back</h2>
				<p>Sign In to continue to SafiDesk</p>
			</div>
			<img
				src="/images/logo.png"
				class="absolute top-24 right-[40%] h-20 w-20 rounded-full border bg-white p-2"
				alt=""
			/>
			<div class="mt-10 px-2">
				<form method="post" class="w-sm p-4" use:enhance>
					<fieldset disabled={$delayed} class="fieldset">
						<div>
							<label for="username" class="label mb-1">Username</label>
							<input
								bind:value={$form.username}
								name="username"
								aria-invalid={$errors.username ? 'true' : undefined}
								class="validator input input-lg w-full"
								placeholder="JohnDoe235"
								{...$constraints.username}
							/>
							{#if $errors.username}
								<span class="validator-hint">{$errors.username}</span>
							{/if}
						</div>
						<div>
							<label for="password" class="label mt-4 mb-1">Password</label>
							<input
								name="password"
								type="password"
								class="input input-lg w-full"
								placeholder="Password"
								bind:value={$form.password}
								aria-invalid={$errors.password ? 'true' : undefined}
								{...$constraints.password}
							/>
							{#if $errors.password}
								<span class="validator-hint">{$errors.password}</span>
							{/if}
						</div>

						<button disabled={$delayed} class="btn mt-4 btn-lg btn-neutral">
							{#if $delayed}
								<span class="loading loading-spinner"></span>
							{:else}
								Login
							{/if}
						</button>
					</fieldset>
				</form>
				<div class="flex w-full items-center justify-center">
					<span class="text-xs opacity-65">&copy; 2024 safidesk</span>
				</div>
			</div>
		</div>
		<figure>
			<img
				src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="it-professional"
				class="h-[500px] w-[600px] object-cover"
			/>
		</figure>
	</div>
</div>
