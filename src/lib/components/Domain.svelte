<script lang="ts">
	import { xlink_attr } from 'svelte/internal';
	import { Node, Anchor } from 'svelvet';
	import pkey from './PKEY.svelte';

	export let x = 0;
	export let y = 0;
	export let data;
</script>

<Node useDefaults id="domain" width="200" position={{ x: x, y: y }}>
	<div class="nodeWrapper">
		<div class="p_1">
			<Anchor output id="digital_certificate_anchor" direction="east" />
		</div>

		<div id="container">
			<div class="node-heading">Domain</div>
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
					<td>domain name</td>
					<td>{data.domain_name}</td>
				</tr>
				<tr>
					<td>cnames</td>
					<td>{data.cnames}</td>
				</tr>
				<tr>
					<td>active</td>
					<td>{data.is_active}</td>
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
		top: 50px;
		right: -14px;
	}
</style>
