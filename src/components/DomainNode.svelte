<script lang="ts">
	import '../app.css';
	import { Node } from 'svelvet';
	export let id: number;
	export let label: string;
	export let width: number;
	export let height: number;
	export let position: any;

	function handleClick(e: CustomEvent) {
		// const { detail } = e;
		// detail.node.bgColor.set('red');
	}
</script>

<Node {id} let:grabHandle let:selected bgColor="gray" on:nodeClicked={handleClick} {width} {height} {position}>
	<div use:grabHandle class:selected>
		<span>{label}</span>
	</div>
</Node>