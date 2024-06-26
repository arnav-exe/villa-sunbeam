<script>
    import { onMount } from "svelte";
  
    export let disabledDates = [];
  
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
  
    let daysInMonth = [];
    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    function getDaysInMonth(year, month) {
      let date = new Date(year, month, 1);
      let days = [];
      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return days;
    }
  
    function isDisabled(date) {
      return disabledDates.some(
        disabledDate =>
          date.getFullYear() === disabledDate.getFullYear() &&
          date.getMonth() === disabledDate.getMonth() &&
          date.getDate() === disabledDate.getDate()
      );
    }
  
    function updateMonth(offset) {
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
    }
  
    onMount(() => {
      daysInMonth = getDaysInMonth(currentYear, currentMonth);
    });
  
    $: daysInMonth = getDaysInMonth(currentYear, currentMonth);
  </script>
  
  <div class="p-4 bg-white rounded shadow-lg">
    <div class="flex justify-between items-center mb-4">
      <button on:click={() => updateMonth(-1)} type="button" class="btn px-4 py-2 mr-4 variant-filled">Previous</button>

      <h3 class="h3 font-bold">{currentDate.toLocaleString("default", { month: "long" })} {currentYear}</h3>

      <button on:click={() => updateMonth(1)} type="button" class="btn px-4 py-2 ml-4 variant-filled">Next</button>
    </div>
    <div class="grid grid-cols-7 gap-4">
      {#each weekDays as day}
        <div class="text-center font-bold">{day}</div>
      {/each}
    </div>
    <div class="grid grid-cols-7 gap-4">
      {#each daysInMonth as day}
        <div class="text-center p-2 rounded {isDisabled(day) ? "bg-error-100 text-error-500" : "bg-white"}">
          {day.getDate()}
        </div>
      {/each}
    </div>
  </div>