<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import { personalToken } from '$lib/stores';
	import { onDestroy, onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';

	let ptValue = '';
	let projects = [];
	const unsubscribe = personalToken.subscribe(async (value) => {
		ptValue = value;
	});

	onDestroy(() => {
		unsubscribe();
	});

	export const modal: ModalSettings = {
		type: 'prompt',
		// Data
		title: 'Enter Personal Token',
		body: 'Provide a valid Personal Token. (40 characters starting with azion)',
		// Populates the input value and attributes
		value: ptValue,
		valueAttr: { type: 'text', minlength: 40, maxlength: 40, required: true },
		// Returns the updated response value
		response: (r: string) => {
			console.log($modalStore[0]);
			console.log($modalStore[0].meta);
			if (typeof r === 'string' || (r instanceof String && r.startsWith('azion')))
				setPersonalToken(r);
		}
	};

	function setPersonalToken(newtoken: string) {
		console.log('saving token:', newtoken);
		personalToken.set(newtoken);
		// save to cookie
		//fetch(`/api/token/${newtoken}`);
		invalidateAll();
	}
</script>

<Modal />
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" class="text-2xl uppercase">Azion Visual Builder</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<!-- <a
					class="btn btn-sm {$personalToken === ''
						? 'variant-ghost-surface'
						: 'variant-filled'} mx-4"
					href="/"
					rel="noreferrer"
					on:click={() => modalStore.trigger(modal)}
				>
					Personal Token {ptValue.toString()}
				</a> -->
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
