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

		<div class="flex flex-col justify-center max-w-[80%]">
			<!-- about section -->
				<h2 id="about" class="h2 my-8">About the Villa</h2>
				<p class="text-left">Welcome to Villa Sunbeam, a charming 3-bedroom retreat nestled in the picturesque town of Peyia, Cyprus. This exquisite villa boasts a stunning view of the surrounding landscape, offering a serene escape for up to 6 guests. Enjoy the ultimate in relaxation with your own private swimming pool and an outdoor grill perfect for al fresco dining. Villa Sunbeam is the ideal destination for creating unforgettable memories with family and friends amidst the beauty of Cyprus. Book your stay today and experience the perfect blend of comfort and luxury.</p>
				
				<a class="h4 underline hover:text-primary-500" href="https://www.booking.com/hotel/cy/coral-bay-sunbeam-villa.en-gb.html">Book your stay now via Booking.com</a>
			<!-- image carousel -->
			 <div id="images">
				<h2 class="h2 my-8">Images</h2>
				<Carousel />
			</div>

			<!-- availability -->
			 <div id="availability" class="flex flex-col">
				<h2 class="h2 my-8">Availability</h2>
				<Calendar {disabledDates} />
			</div>


			<!-- location -->
			<!-- <h2 class="h2 my-8">Location</h2> -->
			<Map />
		</div>
	</div>
</div>
