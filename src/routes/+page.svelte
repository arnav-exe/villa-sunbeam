<script>
	import Gallery from "../lib/components/Gallery.svelte";
	import Calendar from "../lib/components/Calendar.svelte";

	import herobg from "../lib/images/hero-bg.png";

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
			"start": "27/08/2024",
			"end": "03/09/2024"
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
			"start": "26/09/2024",
			"end": "06/10/2024"
		},
		{
			"start": "06/10/2024",
			"end": "13/10/2024"
		}
	];

	let monthPrices = ["-", "-", "-", "170", "190", "200", "260", "270", "200", "180", "-", "-"]
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
				<h2 class="h2 mt-8">About the Villa</h2>
				<p class="mt-4 mb-6">Welcome to Villa Sunbeam, a charming 3-bedroom retreat nestled in the picturesque town of Peyia, Cyprus. This exquisite villa boasts a stunning view of the surrounding landscape, offering a serene escape for up to 6 guests. Enjoy the ultimate in relaxation with your own private swimming pool and an outdoor grill perfect for al fresco dining. Villa Sunbeam is the ideal destination for creating unforgettable memories with family and friends amidst the beauty of Cyprus. Book your stay today and experience the perfect blend of comfort and luxury.</p>
				
				<h4 class="h4">Dining and Nightlife</h4>
				<p class="mt-2 mb-6">Located just a short drive from the famous Coral Bay Strip, Villa Sunbeam gives you access to a vibrant array of bars and restaurants. Whether you're craving traditional Cypriot dishes or international cuisine, the Coral Bay Strip has something for everyone. Enjoy lively evenings with a mix of local and global flavors, perfect for any palate.</p>

				<h4 class="h4">History and Culture</h4>
				<p class="mt-2 mb-6">Immerse yourself in the rich history and culture of Cyprus. Explore nearby archaeological sites and historical landmarks that tell the story of this enchanting island. From ancient ruins to charming villages, every corner of Cyprus offers a glimpse into its fascinating past.</p>

				<h4 class="h4">Tradition and Food</h4>
				<p class="mt-2 mb-6">Cyprus is renowned for its warm hospitality and delicious cuisine. Indulge in local specialties like halloumi, souvlaki, and moussaka, paired with fine Cypriot wines. Experience traditional tavernas where the flavors of the Mediterranean come to life, making every meal a delightful adventure.</p>

				<h4 class="h4">Book Your Stay</h4>
				<p class="mt-2 mb-6">Experience the perfect blend of comfort, culture, and cuisine at Villa Sunbeam. <a class="font-bold underline hover:text-primary-500" href="https://www.booking.com/hotel/cy/coral-bay-sunbeam-villa.en-gb.html">Book your stay today</a> and discover the beauty and charm of Cyprus.</p>


			<!-- image carousel -->
			<div id="images">
				<h2 class="h2 my-8">Images</h2>
				<Gallery />
			</div>

			
			<!-- availability -->
			 <div id="availability" class="flex flex-col">
				<h2 class="h2 my-8">Availability</h2>
				<Calendar {disabledDates} {monthPrices} />
				<div class="flex flex-row justify-end items-center">
					<div class="m-2 bg-error-100 w-10 h-10 rounded" />
					<p> = unavailable</p>
				</div>
			</div>

			<h4 class="h4 my-8">Receive a <strong>10% discount</strong> if you book with us at: <a class="underline hover:text-primary-500" href="mailto:support@villasunbeam.com?subject=Villa%20Sunbeam%20Booking">support@villasunbeam.com</a></h4>


			<!-- location -->
			<div id="location" class="flex flex-col justify-center items-center mb-24">
				<h2 class="h2 my-8">Location</h2>
				<iframe class="rounded shadow-lg w-full aspect-video" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.1593412827256!2d32.37876927709577!3d34.85222337506543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e7098964ad1235%3A0xd9abcc7fc09a5956!2sVilla%20Sunbeam!5e0!3m2!1sen!2suk!4v1720207389921!5m2!1sen!2suk" title="Villa Location" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>
	</div>
</div>