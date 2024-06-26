<script>
	import Carousel from "../lib/Carousel.svelte";
	import Calendar from "../lib/Calendar.svelte";
	import Location from "../lib/Location.svelte";

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

			<p class="text-left">description of the villa.</p>
		</div>

		<!-- image carousel -->
		<Carousel />

		<!-- availability -->
		<h2 class="h2">Availability</h2>
		<Calendar {disabledDates} />



		<!-- location -->
		<h2 class="h2">Location</h2>
		<Location />
	</div>
</div>
