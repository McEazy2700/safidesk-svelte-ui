<script>
	import { MOCK_ASSETS } from '$lib/constants/mocks/assets';
</script>

<div class="overflow-x-auto rounded-xl bg-white p-4">
	<table class="table">
		<!-- head -->
		<thead>
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<th>Asset</th>
				<th>Category</th>
				<th>Status</th>
				<th>Assigned To</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			{#each MOCK_ASSETS as asset, index (index)}
				<tr>
					<th>
						<label>
							<input type="checkbox" class="checkbox" />
						</label>
					</th>
					<td>
						{asset.assetName}
					</td>
					<td>
						{asset.category}
					</td>
					<td>{asset.status}</td>
					<th>
						{asset.assignedTo}
					</th>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
