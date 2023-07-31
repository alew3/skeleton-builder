<script>
	import { personalToken } from '$lib/stores';
	export let domainList;
	export let form;
	import { focusTrap } from '@skeletonlabs/skeleton';
	let isFocused = true;
</script>

<div class="container h-full mx-auto flex justify-center items-center border-8">
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
</div>

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
