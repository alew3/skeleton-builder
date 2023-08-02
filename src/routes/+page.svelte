<script lang="ts">
	import { goto } from '$app/navigation';
	import { personalToken } from '$lib/stores';
	export let data;

	import { focusTrap } from '@skeletonlabs/skeleton';
	import { Table } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { tableMapperValues } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	let isFocused = true;

	const sourceData = data.domainList;

	onMount(() => {});

	const tableSimple = {
		// A list of heading labels.
		head: ['Name', 'Domain Name', 'Edge Application'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['name', 'domain_name', 'edge_application_id']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, ['id', 'name', 'domain_name', 'edge_application_id']),
		// Optional: A list of footer labels.
		foot: ['Total', '', '<code class="code">5</code>']
	};

	function mySelectionHandler(event: CustomEvent) {
		console.log(event.detail);
		goto(`/view/${event.detail[0]}`);
	}
</script>

<!-- <div class="container h-full mx-auto flex justify-center items-center border-8">
	<div class="space-y-10 text-center flex flex-col items-center w-60 border-8 align-middle">
		<figure>
			<section class="img-bg" />
		</figure>
		<h2 class="border-8 text-3xl uppercase">Login</h2>

		<form use:focusTrap={isFocused} class="text-center border-8 w-500" >
			<input
				class="text-slate-900"
				type="text"
				width="40"
				required
				minlength="40"
				maxlength="40"
				placeholder="Personal Token"
			/>
				<button class=" mt-10 block btn variant-ghost-secondary">Submit</button>
		</form>
	</div>
</div> -->

<Table source={tableSimple} interactive={true} on:selected={mySelectionHandler} />

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
