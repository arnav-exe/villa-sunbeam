<script>
	export let disabledDates = [];
	export let monthPrices = [];

	const today = new Date();
	const startYear = today.getFullYear();
	let currentMonth = today.getMonth();
	let currentYear = startYear;
	let currentDate = new Date(currentYear, currentMonth, 1);
	const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const getDaysInMonth = (year, month) => {
		const date = new Date(year, month, 1);
		const days = [];
		while (date.getMonth() === month) {
			days.push(new Date(date));
			date.setDate(date.getDate() + 1);
		}
		return days;
	};

	// parses DD/MM/YYYY date strings
	const parseDate = (s) => {
		const [d, m, y] = s.split('/').map(Number);
		return new Date(y, m - 1, d);
	};

	const isDisabled = (date) =>
		disabledDates.some(({ start, end }) => {
			const cur = parseDate(start);
			const endDate = parseDate(end);
			while (cur <= endDate) {
				if (
					date.getFullYear() === cur.getFullYear() &&
					date.getMonth() === cur.getMonth() &&
					date.getDate() === cur.getDate()
				) return true;
				cur.setDate(cur.getDate() + 1);
			}
			return false;
		});

	const isToday = (date) => {
		const today = new Date();
		return date.getFullYear() === today.getFullYear() &&
			date.getMonth() === today.getMonth() &&
			date.getDate() === today.getDate();
	};

	const updateMonth = (offset) => {
		const newMonth = currentMonth + offset;
		const newYear = newMonth > 11 ? currentYear + 1 : newMonth < 0 ? currentYear - 1 : currentYear;
		const clamped = newMonth > 11 ? 0 : newMonth < 0 ? 11 : newMonth;
		if (newYear < startYear) return;
		currentMonth = clamped;
		currentYear = newYear;
		currentDate = new Date(currentYear, currentMonth, 1);
	};

	$: daysInMonth = getDaysInMonth(currentYear, currentMonth);
	$: isAtStart = currentMonth === 0 && currentYear === startYear;
</script>

<div class="p-4 bg-white rounded shadow-lg">
	<div class="flex justify-between items-center mb-4">
		<button on:click={() => updateMonth(-1)} type="button" disabled={isAtStart} class="btn px-4 py-2 mr-4 variant-filled">Previous</button>
		<h3 class="h3 font-bold">{currentDate.toLocaleString('default', { month: 'long' })} {currentYear}</h3>
		<button on:click={() => updateMonth(1)} type="button" class="btn px-4 py-2 ml-4 variant-filled">Next</button>
	</div>

	<div class="grid grid-cols-7 gap-4">
		{#each weekDays as day}
			<div class="text-center font-bold">{day}</div>
		{/each}
	</div>
	<div class="grid grid-cols-7 gap-4">
		{#each daysInMonth as day}
			<div class="min-w-[35px] text-[0.75rem] text-center p-1 rounded
				{isDisabled(day) ? 'bg-error-100 text-error-500' : 'bg-white'}
				{isToday(day) ? 'border-2 text-primary-500 border-primary-500' : ''}">
				<div>{day.getDate()}</div>
				<div class="text-xs sm:text-sm text-gray-500">€{monthPrices[currentMonth]}</div>
			</div>
		{/each}
	</div>
</div>
