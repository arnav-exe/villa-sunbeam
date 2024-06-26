<script>
	import Carousel from "../lib/components/Carousel.svelte";
	import Calendar from "../lib/components/Calendar.svelte";
	import Map from "../lib/components/Map.svelte";

	let disabledDates = [
		new Date(2024, 5, 10), // 10th June 2024
		new Date(2024, 5, 15)  // 15th June 2024
	];
</script>



<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">

		<!-- hero section -->
		<div class="relative w-screen h-screen flex justify-center items-center">
			<div class="absolute bg-hero-bg inset-0 -z-20 blur"></div>
			<h2 class="h2">Welcome to <strong>Villa Sunbeam.</strong></h2>
		</div>

		<!-- about section -->
		 <div>
			<h2 class="h2">About the Villa</h2>

			<p class="text-left">Welcome to Villa Sunbeam, a charming 3-bedroom retreat nestled in the picturesque town of Peyia, Cyprus. This exquisite villa boasts a stunning view of the surrounding landscape, offering a serene escape for up to 6 guests. Enjoy the ultimate in relaxation with your own private swimming pool and an outdoor grill perfect for al fresco dining. Villa Sunbeam is the ideal destination for creating unforgettable memories with family and friends amidst the beauty of Cyprus. Book your stay today and experience the perfect blend of comfort and luxury.</p>
		</div>

		<!-- image carousel -->
		<Carousel />

		<!-- availability -->
		<h2 class="h2">Availability</h2>
		<Calendar {disabledDates} />



		<!-- location -->
		<h2 class="h2">Location</h2>
		<Map />
	</div>
</div>
