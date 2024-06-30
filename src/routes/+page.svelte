<script>
	import Gallery from "../lib/components/Gallery.svelte";
	import Calendar from "../lib/components/Calendar.svelte";
	import Map from "../lib/components/Map.svelte";

	import herobg from "../lib/images/hero-bg.jpg";

	let disabledDates = [
		{
			"start": "05/05/2024",
			"end": "14/05/2024"
		},
		{
			"start": "21/05/2024",
			"end": "31/05/2024"
		},
		{
			"start": "14/06/2024",
			"end": "28/06/2024"
		},
		{
			"start": "30/06/2024",
			"end": "07/07/2024"
		},
		{
			"start": "07/07/2024",
			"end": "18/07/2024"
		},
		{
			"start": "20/07/2024",
			"end": "27/07/2024"
		},
		{
			"start": "28/07/2024",
			"end": "11/08/2024"
		},
		{
			"start": "12/08/2024",
			"end": "22/08/2024"
		},
		{
			"start": "04/09/2024",
			"end": "12/09/2024"
		},
		{
			"start": "14/09/2024",
			"end": "23/09/2024"
		},
		{
			"start": "27/09/2024",
			"end": "04/10/2024"
		},
		{
			"start": "06/10/2024",
			"end": "13/10/2024"
		}
	];
</script>



<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">

		<!-- hero section -->
		<div class="relative w-screen h-screen flex justify-center items-center">
			<img src="{herobg}" class="w-screen h-screen absolute inset-0 -z-20 object-cover" alt="hero background" />
			<h1 class="h1">Welcome to <strong>Villa Sunbeam.</strong></h1>
		</div>

		<div id="about" class="flex flex-col justify-center max-w-[80%]">
			<!-- about section -->
				<h2 class="h2 my-8">About the Villa</h2>
				<p class="text-left">Welcome to Villa Sunbeam, a charming 3-bedroom retreat nestled in the picturesque town of Peyia, Cyprus. This exquisite villa boasts a stunning view of the surrounding landscape, offering a serene escape for up to 6 guests. Enjoy the ultimate in relaxation with your own private swimming pool and an outdoor grill perfect for al fresco dining. Villa Sunbeam is the ideal destination for creating unforgettable memories with family and friends amidst the beauty of Cyprus. Book your stay today and experience the perfect blend of comfort and luxury.</p>
				
				<a class="h4 underline hover:text-primary-500" href="https://www.booking.com/hotel/cy/coral-bay-sunbeam-villa.en-gb.html">Book your stay now via Booking.com</a>
			<!-- image carousel -->
			 <div id="images">
				<h2 class="h2 my-8">Images</h2>
				<Gallery />
			</div>

			<!-- availability -->
			 <div id="availability" class="flex flex-col mb-24">
				<h2 class="h2 my-8">Availability</h2>
				<Calendar {disabledDates} />
			</div>


			<!-- location -->
			<!-- <h2 class="h2 my-8">Location</h2> -->
			<Map />
		</div>
	</div>
</div>