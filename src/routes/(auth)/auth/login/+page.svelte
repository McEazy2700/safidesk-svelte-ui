<script lang="ts">
	import { Toast } from '$lib/stores/toast.svelte.js';
	import { superForm } from 'sveltekit-superforms';

	let { data } = $props();

	const { form, errors, constraints, delayed, enhance } = superForm(data.loginForm, {
		onUpdate: (v) => {
			if (v.form.message?.status === 'error') {
				v.form.message.messages.forEach((m) => {
					if (typeof m === 'string') {
						Toast.append({ message: m, type: 'error' });
					}
				});
			}
		}
	});
</script>

<div class="flex h-screen w-screen items-center justify-center">
	<div class="flex max-w-lg flex-1 flex-col justify-between p-2">
		<div
			class="relative flex flex-1 flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/5"
		>
			<div class="flex flex-col items-center rounded-3xl bg-neutral p-4 py-20 text-neutral-content">
				<h2 class="text-2xl font-semibold">Welcome Back</h2>
				<p>Sign In to continue to SafiDesk</p>
			</div>
			<img
				src="/images/logo.png"
				class="absolute top-44 right-1/2 h-20 w-20 translate-x-1/2 rounded-full border bg-white p-2"
				alt=""
			/>
			<div class="mt-10 flex w-full flex-1 justify-center px-2">
				<form method="post" class="w-full max-w-2xl p-4" use:enhance>
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

						<button disabled={$delayed} class="btn mt-14 btn-lg btn-neutral">
							{#if $delayed}
								<span class="loading loading-spinner"></span>
							{:else}
								Login
							{/if}
						</button>
					</fieldset>
				</form>
			</div>
		</div>
		<div class="mt-2 flex w-full items-center justify-center">
			<span class="text-xs opacity-65">&copy; 2024 safidesk</span>
		</div>
	</div>
</div>
