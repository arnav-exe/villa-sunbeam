<script>
	import { onMount } from 'svelte';

	export let disabledDates = [];
	export let monthPrices = [];

	let currentDate = new Date();
	let currentMonth = currentDate.getMonth();
	let currentYear = currentDate.getFullYear();

	let daysInMonth = [];

	let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const getDaysInMonth = (year, month) => {
		let date = new Date(year, month, 1);
		let days = [];

		while (date.getMonth() === month) {
			days.push(new Date(date));
			date.setDate(date.getDate() + 1);
		}
		return days;
	};

	const parseDate = (dateString) => {
		let parts = dateString.split('/');
		let day = parseInt(parts[0], 10);
		let month = parseInt(parts[1], 10) - 1; // decrement by 2 for zero-based index and spreadsheet error
		let year = parseInt(parts[2], 10);
		return new Date(year, month, day);
	};

	const getDatesFromRanges = (dateRanges) => {
		let allDates = [];

		dateRanges.forEach((range) => {
			let startDate = parseDate(range.start);
			let endDate = parseDate(range.end);

			let currentDate = startDate;

			while (currentDate <= endDate) {
				allDates.push(new Date(currentDate));
				currentDate.setDate(currentDate.getDate() + 1);
			}
		});
		return allDates;
	};

	const isDisabled = (date) => {
		return getDatesFromRanges(disabledDates).some(
			(disabledDate) =>
				date.getFullYear() === disabledDate.getFullYear() &&
				date.getMonth() === disabledDate.getMonth() &&
				date.getDate() === disabledDate.getDate()
		);
	};

	const updateMonth = (offset) => {
		currentMonth += offset;

		if (currentMonth > 11) {
			currentMonth = 0;
			currentYear++;
		} else if (currentMonth < 0) {
			currentMonth = 11;
			currentYear--;
		}
		currentDate = new Date(currentYear, currentMonth, 1);
		daysInMonth = getDaysInMonth(currentYear, currentMonth);
	};

	const isToday = (date) => {
		let today = new Date();
		return (
			date.getFullYear() === today.getFullYear() &&
			date.getMonth() === today.getMonth() &&
			date.getDate() === today.getDate()
		);
	};

	onMount((_) => {
		daysInMonth = getDaysInMonth(currentYear, currentMonth);
	});

	$: daysInMonth = getDaysInMonth(currentYear, currentMonth);
</script>

<div class="p-4 bg-white rounded shadow-lg">
	<div class="flex justify-between items-center mb-4">
		<button
			on:click={(_) => updateMonth(-1)}
			type="button"
			class="btn px-4 py-2 mr-4 variant-filled">Previous</button
		>

		<h3 class="h3 font-bold">
			{currentDate.toLocaleString('default', { month: 'long' })}
			{currentYear}
		</h3>

		<button on:click={(_) => updateMonth(1)} type="button" class="btn px-4 py-2 ml-4 variant-filled"
			>Next</button
		>
	</div>

	<div class="grid grid-cols-7 gap-4">
		{#each weekDays as day}
			<div class="text-center font-bold">{day}</div>
		{/each}
	</div>
	<div class="grid grid-cols-7 gap-4">
		{#each daysInMonth as day}
			<div
				class="calendar-square text-center p-1 rounded {isDisabled(day)
					? 'bg-error-100 text-error-500'
					: 'bg-white'} {isToday(day) ? 'border-2 text-primary-500 border-primary-500' : ''}"
			>
				<div>{day.getDate()}</div>
				<div class="text-xs sm:text-sm text-gray-500">€{monthPrices[currentMonth]}</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.calendar-square {
		min-width: 35px;
		font-size: 0.75rem;
	}
</style>
