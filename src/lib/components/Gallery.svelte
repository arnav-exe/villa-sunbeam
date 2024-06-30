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

	let imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21];
</script>



<section class="grid grid-cols-2 md:grid-cols-3 gap-4">
	{#each imgs as i}
		<div>
			<img class="h-auto max-w-full rounded-lg" src="{i}" alt="villa interior and exterior" />
		</div>
	{/each}
</section>