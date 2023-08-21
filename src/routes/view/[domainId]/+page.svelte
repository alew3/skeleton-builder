<script>
	import { Node, Anchor, Svelvet, Minimap, Controls } from 'svelvet';
	import Domain from '$lib/components/Domain.svelte';
	import DigitalCertificate from '$lib/components/DigitalCertificate.svelte';
	import { dataTableHandler } from '@skeletonlabs/skeleton';

	let x = 400;
	let y = 100;
	let h = 100;
	let w = 200;
	export let data;
</script>

<!-- Collapsible={true} -->
<Svelvet id="azion-diagram" TD minimap fitView class="h-full w-full">
	<Domain {x} {y} data={data.domainData} />
	{#if data.domainData.digital_certificate != '' && data.domainData.digital_certificate != null}
		<DigitalCertificate x={x + 400} {y} data={data.domainData.digital_certificate} />
	{/if}
	<Minimap />
	<Controls />
</Svelvet>
