<script>
	import '../app.postcss';
	import { onMount } from 'svelte';

	let scrolled = false;

	onMount(() => {
		const onScroll = () => { scrolled = window.scrollY > 60; };
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600;1,700&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
</svelte:head>

<!-- nav — transparent over hero, dark on scroll -->
<nav class="fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow] duration-[400ms] {scrolled ? 'bg-[rgba(28,20,9,0.96)] backdrop-blur-[14px] shadow-[0_1px_0_rgba(255,255,255,0.06)]' : ''}">
	<div class="max-w-[1200px] mx-auto px-8 py-5 flex items-center justify-between">
		<a href="/" class="font-display italic text-[1.45rem] font-medium text-white no-underline tracking-[0.02em] shrink-0">
			Villa Sunbeam
		</a>

		<div class="hidden sm:flex gap-10">
			{#each [['#about','About'],['#images','Gallery'],['#availability','Availability'],['#location','Location']] as [href, label]}
				<a {href} class="font-label text-[0.68rem] font-medium tracking-[0.2em] uppercase text-white/[78%] no-underline transition-colors duration-200 hover:text-gold">
					{label}
				</a>
			{/each}
		</div>

		<a
			href="https://www.booking.com/hotel/cy/coral-bay-sunbeam-villa.en-gb.html"
			target="_blank"
			rel="noreferrer"
			class="hidden sm:block font-label text-[0.65rem] font-semibold tracking-[0.18em] uppercase bg-gold text-villa-dark px-6 py-[0.65rem] no-underline transition-all duration-200 hover:bg-gold-light hover:-translate-y-px shrink-0"
		>Book Now</a>
	</div>
</nav>

<slot />

<style>
	:global(html, body) {
		height: auto !important;
		overflow: auto !important;
	}
</style>
