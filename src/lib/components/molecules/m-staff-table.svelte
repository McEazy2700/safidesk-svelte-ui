<script>
	import { MOCK_STAFF } from '$lib/constants/mocks/staff';
	import { SvelteDate } from 'svelte/reactivity';
</script>

<div class="overflow-x-auto bg-white p-4">
	<table class="table">
		<!--head-->
		<thead>
			<tr>
				<th>Fullname</th>
				<th>Email</th>
				<th>Role</th>
				<th>Last Login</th>
			</tr>
		</thead>
		<tbody>
			{#each MOCK_STAFF as staff, index (index)}
				<tr>
					<td>{staff.fullname}</td>
					<td>{staff.email}</td>
					<td>{staff.role}</td>
					<td>{new SvelteDate(staff.lastLogin).toLocaleDateString()}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
