<script lang="ts">
	import { selectedDomain } from '../lib/stores.js';
	import '../app.css';
	import { Node } from 'svelvet';
	export let domains: any;

	let currentDomain = domains[0].id;

	const onChange = () => {
		selectedDomain.update(()=>currentDomain);
	}
</script>

<Node id="55" let:grabHandle>
	<div class="bg-neutral-700">
		<span>	Domain:</span>
		<select bind:value={currentDomain} name="domain" id="domain" class="bg-slate-700" on:change={onChange}>
				<option selected value="0">Select a domain</option>
			{#each domains as { name, id }, i}
				<option value={id}>{name}</option>
			{/each}
		</select>
	</div>
</Node>
