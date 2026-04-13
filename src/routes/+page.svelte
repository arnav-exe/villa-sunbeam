<script>
	import Gallery from '../lib/components/Gallery.svelte';
	import Calendar from '../lib/components/Calendar.svelte';
	import herobg from '../lib/images/hero-bg.png';

	export let data;

	const origMonthPrices = [
		'-',
		'-',
		'-',
		'150',
		'170',
		'260',
		'280',
		'300',
		'220',
		'180',
		'150',
		'-'
	];
	const EURO_DISCOUNT = 15;
	// pricing after direct-booking discount
	const monthPrices = origMonthPrices.map((i) =>
		isNaN(Number(i)) ? i : (Number(i) - EURO_DISCOUNT).toString()
	);

	const amenities = [
		{ icon: '🛌', label: '3 Bedrooms' },
		{ icon: '👥', label: 'Sleeps 6' },
		{ icon: '🏊', label: 'Private Pool' },
		{ icon: '🍖', label: 'Al Fresco Dining' }
	];
</script>

<svelte:head>
	<title>Villa Sunbeam — Peyia, Cyprus</title>
</svelte:head>

<!-- hero -->
<section
	class="relative w-screen h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
>
	<img
		src={herobg}
		class="absolute inset-0 w-full h-full object-cover z-0 [animation:hero-zoom_14s_ease-out_forwards]"
		alt=""
	/>
	<div
		class="absolute inset-0 z-[1] bg-gradient-to-b from-[rgba(28,20,9,0.28)] via-[rgba(28,20,9,0.52)] to-[rgba(28,20,9,0.82)]"
	/>

	<div
		class="hero-content relative z-[2] text-center text-white px-6 pt-20 [animation:fade-up_1.2s_ease-out_0.3s_both]"
	>
		<p class="font-label text-[0.72rem] font-medium tracking-[0.35em] uppercase text-gold mb-5">
			Peyia · Cyprus
		</p>
		<h1
			class="font-display text-[clamp(5.5rem,15vw,12rem)] font-medium leading-[0.87] -tracking-[0.02em] mb-6"
		>
			Villa<br /><em class="italic text-gold">Sunbeam</em>
		</h1>
		<p class="font-label text-[0.88rem] font-light tracking-[0.14em] text-white/70 uppercase mb-12">
			A private Mediterranean retreat for six
		</p>
		<div class="flex gap-4 justify-center flex-wrap max-w-[480px] mx-auto">
			<a
				href="https://www.booking.com/hotel/cy/coral-bay-sunbeam-villa.en-gb.html"
				target="_blank"
				rel="noreferrer"
				class="flex-1 text-center whitespace-nowrap font-label font-semibold uppercase no-underline transition-all duration-[250ms] bg-gold text-villa-dark hover:bg-gold-light hover:-translate-y-0.5
			          text-[0.55rem] tracking-[0.12em] py-[0.55rem] px-4
			          sm:text-[0.68rem] sm:tracking-[0.18em] sm:py-4 sm:px-9">Reserve Your Stay</a
			>
			<a
				href="#about"
				class="flex-1 text-center whitespace-nowrap font-label font-medium uppercase no-underline transition-all duration-200 border border-white/45 text-white hover:border-white hover:bg-white/[8%]
			          text-[0.55rem] tracking-[0.12em] py-[0.55rem] px-4
			          sm:text-[0.68rem] sm:tracking-[0.18em] sm:py-4 sm:px-9">Explore More</a
			>
		</div>
	</div>

	<div
		class="scroll-hint absolute bottom-10 left-0 right-0 z-[2] flex flex-col items-center gap-2 text-white/40 font-label text-[0.6rem] tracking-[0.25em] uppercase [animation:fade-up_1s_ease-out_1.8s_both]"
		aria-hidden="true"
	>
		<span>Scroll</span>
		<div class="scroll-line relative w-px h-14 bg-white/15 overflow-hidden" />
	</div>
</section>

<!-- amenities strip -->
<div class="bg-villa-dark flex justify-center flex-wrap">
	{#each amenities as a}
		<div class="flex items-center gap-3 px-11 py-6 border-r border-white/[7%] last:border-r-0">
			<span class="text-[1.1rem]" aria-hidden="true">{a.icon}</span>
			<span class="font-label text-[0.68rem] font-medium tracking-[0.15em] uppercase text-white/65"
				>{a.label}</span
			>
		</div>
	{/each}
</div>

<!-- about -->
<section id="about" class="bg-cream">
	<div class="max-w-[1200px] mx-auto px-8 py-20">
		<div class="mb-14">
			<span
				class="block font-label text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-gold mb-3"
				>The Villa</span
			>
			<h2
				class="font-display text-[clamp(2.8rem,6vw,4.8rem)] font-medium leading-none text-villa-dark"
			>
				Your home<br /><em class="italic text-terracotta">in paradise</em>
			</h2>
		</div>

		<p
			class="font-display text-[clamp(1.15rem,2.5vw,1.4rem)] leading-[1.75] text-villa-warm max-w-[680px] mb-14"
		>
			A charming 3-bedroom retreat nestled in the picturesque town of Peyia, Cyprus. Stunning views
			of the surrounding landscape, offering a serene escape for up to 6 guests with your own
			private swimming pool.
		</p>

		<div class="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8 mb-16">
			<div class="border-t-2 border-villa-sand pt-6">
				<h3 class="font-display text-[1.2rem] font-semibold text-villa-dark mb-2.5">
					Dining &amp; Nightlife
				</h3>
				<p class="font-label text-[0.875rem] font-light leading-[1.75] text-villa-mid">
					A short drive from the famous Coral Bay Strip, with a vibrant array of bars and
					restaurants — from traditional Cypriot dishes to international cuisine.
				</p>
			</div>
			<div class="border-t-2 border-villa-sand pt-6">
				<h3 class="font-display text-[1.2rem] font-semibold text-villa-dark mb-2.5">
					History &amp; Culture
				</h3>
				<p class="font-label text-[0.875rem] font-light leading-[1.75] text-villa-mid">
					Explore nearby archaeological sites and charming villages that tell the story of this
					enchanting island, from ancient ruins to living traditions.
				</p>
			</div>
			<div class="border-t-2 border-villa-sand pt-6">
				<h3 class="font-display text-[1.2rem] font-semibold text-villa-dark mb-2.5">
					Tradition &amp; Food
				</h3>
				<p class="font-label text-[0.875rem] font-light leading-[1.75] text-villa-mid">
					Indulge in halloumi, souvlaki, and moussaka paired with fine Cypriot wines at traditional
					tavernas where Mediterranean flavours come to life.
				</p>
			</div>
		</div>

		<div class="flex items-center gap-8 pt-10 border-t border-villa-sand flex-wrap">
			<p class="font-display italic text-[1.2rem] text-villa-mid">Ready to experience Cyprus?</p>
			<a
				href="https://www.booking.com/hotel/cy/coral-bay-sunbeam-villa.en-gb.html"
				target="_blank"
				rel="noreferrer"
				class="inline-block font-label text-[0.68rem] font-semibold tracking-[0.18em] uppercase bg-gold text-villa-dark px-9 py-4 no-underline transition-all duration-[250ms] hover:bg-gold-light hover:-translate-y-0.5"
				>Book on Booking.com</a
			>
		</div>
	</div>
</section>

<!-- gallery -->
<section id="images" class="bg-villa-dark">
	<div class="max-w-[1200px] mx-auto px-8 py-20">
		<div class="text-center mb-14">
			<span
				class="block font-label text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-gold mb-3"
				>Gallery</span
			>
			<h2 class="font-display text-[clamp(2.8rem,6vw,4.8rem)] font-medium leading-none text-cream">
				<em class="italic text-gold">The spaces</em>
			</h2>
		</div>
		<Gallery />
	</div>
</section>

<!-- book direct banner -->
<section
	class="py-24 px-8 text-center"
	style="background: linear-gradient(135deg, #9E5420 0%, #C4783A 55%, #8B4F20 100%)"
>
	<div class="max-w-[700px] mx-auto">
		<p
			class="font-label text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-white/60 mb-4"
		>
			Exclusive Offer
		</p>
		<h2 class="font-display text-[clamp(3rem,8vw,5.5rem)] font-medium leading-none text-white mb-6">
			Book Direct &amp;<br /><em class="italic text-[#F9D98A]">Save 10%</em>
		</h2>
		<p class="font-label text-[0.92rem] font-light leading-[1.75] text-white/[78%]">
			Skip the platform fees and book directly with us for an exclusive discount on every stay.
		</p>
		<a
			href="mailto:support@villasunbeam.com?subject=Villa%20Sunbeam%20Booking"
			class="inline-block mt-8 font-label text-[0.68rem] font-semibold tracking-[0.18em] uppercase bg-white text-terracotta px-10 py-4 no-underline transition-all duration-200 hover:bg-cream hover:-translate-y-0.5"
			>Email Us to Book</a
		>
	</div>
</section>

<!-- availability -->
<section id="availability" class="bg-cream">
	<div class="max-w-[1200px] mx-auto px-8 py-20">
		<div class="text-center mb-14">
			<span
				class="block font-label text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-gold mb-3"
				>Planning Your Stay</span
			>
			<h2
				class="font-display text-[clamp(2.8rem,6vw,4.8rem)] font-medium leading-none text-villa-dark"
			>
				<em class="italic text-terracotta">Availability</em> &amp; Pricing
			</h2>
		</div>
		<div class="max-w-[700px] mx-auto">
			<Calendar disabledDates={data.disabledDates} {monthPrices} />
			<div
				class="flex items-center gap-2 justify-end mt-3 font-label text-[0.75rem] text-villa-mid"
			>
				<div class="w-4 h-4 rounded-[3px] bg-red-100" />
				<span>Unavailable</span>
			</div>
		</div>
	</div>
</section>

<!-- location -->
<section id="location" class="bg-white">
	<div class="max-w-[1200px] mx-auto px-8 py-20">
		<div class="text-center mb-14">
			<span
				class="block font-label text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-gold mb-3"
				>Find Us</span
			>
			<h2
				class="font-display text-[clamp(2.8rem,6vw,4.8rem)] font-medium leading-none text-villa-dark"
			>
				Peyia,<br /><em class="italic text-terracotta">Cyprus</em>
			</h2>
		</div>
		<iframe
			class="w-full aspect-video border-none rounded block shadow-[0_20px_60px_rgba(28,20,9,0.12)]"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.1593412827256!2d32.37876927709577!3d34.85222337506543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e7098964ad1235%3A0xd9abcc7fc09a5956!2sVilla%20Sunbeam!5e0!3m2!1sen!2suk!4v1720207389921!5m2!1sen!2suk"
			title="Villa Sunbeam Location"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		/>
	</div>
</section>

<!-- footer -->
<footer class="bg-villa-dark text-center py-14 px-8">
	<p class="font-display italic text-[1.75rem] text-white mb-1.5">Villa Sunbeam</p>
	<p class="font-label text-[0.65rem] tracking-[0.2em] uppercase text-white/35 mb-7">
		Peyia, Paphos, Cyprus
	</p>
	<div class="flex gap-8 justify-center flex-wrap">
		<a
			href="mailto:support@villasunbeam.com"
			class="font-label text-[0.8rem] text-white/50 no-underline transition-colors duration-200 hover:text-gold"
			>support@villasunbeam.com</a
		>
	</div>
</footer>

<style>
	/* hero image slow zoom on load */
	@keyframes hero-zoom {
		from {
			transform: scale(1.08);
		}
		to {
			transform: scale(1);
		}
	}

	/* elements fade and rise into view */
	@keyframes fade-up {
		from {
			opacity: 0;
			transform: translateY(28px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* bright segment travels down scroll-line track */
	.scroll-line::after {
		content: '';
		position: absolute;
		top: -18px;
		left: 0;
		width: 1px;
		height: 18px;
		background: rgba(255, 255, 255, 0.9);
		animation: scroll-travel 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	@keyframes scroll-travel {
		0% {
			top: -18px;
			opacity: 0;
		}
		25% {
			opacity: 1;
		}
		75% {
			opacity: 1;
		}
		100% {
			top: 56px;
			opacity: 0;
		}
	}

	/* hide scroll indicator on short viewports — avoids button collision */
	@media (max-height: 660px) {
		.scroll-hint {
			display: none !important;
		}
		.hero-content {
			padding-top: 3rem !important;
		}
	}

	#about, #images, #availability, #location {
		padding-top: 1em;
	}
</style>
