<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Villa Sunbeam</strong>
			</svelte:fragment>
			<svelte:fragment>
				<div class="relative  flex w-full justify-center">
					<a
						class="btn btn-sm hover:text-primary-500"
						href="#about"
						rel="noreferrer"
					>
						About
					</a>
					<a
						class="btn btn-sm hover:text-primary-500"
						href="#images"
						rel="noreferrer"
					>
						Images
					</a>
					<a
						class="btn btn-sm hover:text-primary-500"
						href="#availability"
						rel="noreferrer"
					>
						Availability
					</a>
					<a
						class="btn btn-sm hover:text-primary-500"
						href="#location"
						rel="noreferrer"
					>
						Location
					</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
