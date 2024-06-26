<script>
	let imgCarousel;

	const carouselLeft = _ => {
		const x = imgCarousel.scrollLeft === 0 ? imgCarousel.clientWidth * imgCarousel.childElementCount : imgCarousel.scrollLeft - imgCarousel.clientWidth;
		imgCarousel.scroll(x, 0);
	}

	const carouselRight = _ => {
		const x = imgCarousel.scrollLeft === imgCarousel.scrollWidth - imgCarousel.clientWidth ? 0 : imgCarousel.scrollLeft + imgCarousel.clientWidth;
		imgCarousel.scroll(x, 0);
	}
</script>



<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center bg-transparent">
	<!-- left btn -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
		<p class="font-bold">&lt;</p>
	</button>
	<!-- imgs -->
	<div bind:this={imgCarousel} class="snap-x snap-center snap-mandatory scroll-smooth flex overflow-x-auto">
		{#each {length: 25} as _, i}
			<enhanced:img
				class="snap-center w-[1024px] rounded-container-token object-cover"
				src="src/lib/images/({i+1}).webp"
				alt="villa interior and exterior"
				loading="lazy"
			/>
		{/each}
	</div>
	<!-- right btn -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
		<p class="font-bold">&gt;</p>

	</button>
</div>