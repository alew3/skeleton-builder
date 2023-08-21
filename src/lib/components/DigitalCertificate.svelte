<script lang="ts">
	import { xlink_attr } from 'svelte/internal';
	import { Node, Anchor } from 'svelvet';
	import pkey from './PKEY.svelte';

	export let x = 0;
	export let y = 0;
	export let data;
</script>

ss<Node useDefaults id="digital_certificate" width="200" position={{ x: x, y: y }}>
	<div class="nodeWrapper">
		<div class="p_1">
			<Anchor
				output
				id="digital_certificate_anchor"
				connections={[['domain', 'digital_certificate_anchor']]}
				direction="west"
			/>
		</div>
		<div class="node-container">
			<div class="node-heading">Digital Certificate</div>
			<table class="node-table">
				<tr>
					<td>id</td>
					<td>{data.id}</td>
				</tr>
				<tr>
					<td>name</td>
					<td>{data.name}</td>
				</tr>
				<tr>
					<td>status</td>
					<td>{data.status}</td>
				</tr>
				<tr>
					<td>certificate type</td>
					<td>{data.certificate_type}</td>
				</tr>
				<tr>
					<td>managed</td>
					<td>{data.managed}</td>
				</tr>
				<tr>
					<td>azion information</td>
					<td>{data.azion_information}</td>
				</tr>
			</table>
		</div>
	</div>
</Node>

<style>
	.p_1 {
		position: absolute;
		display: flex;
		flex-direction: column;
		gap: 10px;
		top: 52px;
		left: -16px;
	}
</style>
