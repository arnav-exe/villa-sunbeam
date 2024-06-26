<script>
	let imgCarousel;

	import img1 from "../images/(1).webp";
	import img2 from "../images/(2).webp";
	import img3 from "../images/(3).webp";
	import img4 from "../images/(4).webp";
	import img5 from "../images/(5).webp";
	import img6 from "../images/(6).webp";
	import img7 from "../images/(7).webp";
	import img8 from "../images/(8).webp";
	import img9 from "../images/(9).webp";
	import img10 from "../images/(10).webp";
	import img11 from "../images/(11).webp";
	import img12 from "../images/(12).webp";
	import img13 from "../images/(13).webp";
	import img14 from "../images/(14).webp";
	import img15 from "../images/(15).webp";
	import img16 from "../images/(16).webp";
	import img17 from "../images/(17).webp";
	import img18 from "../images/(18).webp";
	import img19 from "../images/(19).webp";
	import img20 from "../images/(20).webp";
	import img21 from "../images/(21).webp";
	import img22 from "../images/(22).webp";
	import img23 from "../images/(23).webp";
	import img24 from "../images/(24).webp";
	import img25 from "../images/(25).webp";

	let imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25];

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
		{#each imgs as i}
			<img
				class="snap-center w-[1024px] rounded-container-token object-cover"
				src="{i}"
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