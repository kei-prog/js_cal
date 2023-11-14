#!/usr/bin/env node

const showCalendar = (year, month) => {
  const monthName = new Date(year, month - 1).toLocaleString('en-US', { month: 'long' });
  const header = `${monthName} ${year}`;
  const padding = Math.floor((20 - header.length) / 2);

  console.log(" ".repeat(padding) + header + " ".repeat(padding));
  console.log("Su Mo Tu We Th Fr Sa");

  const firstDay = new Date(year, month - 1, 1).getDay();
  let currentDay = 1;
  let dateStr = " ".repeat(firstDay * 3);

  const lastDayOfMonth = new Date(year, month, 0).getDate();
  while (currentDay <= lastDayOfMonth) {
    dateStr += `${currentDay.toString().padStart(2, " ")} `;
    if ((firstDay + currentDay) % 7 === 0 || currentDay === lastDayOfMonth) {
      console.log(dateStr);
      dateStr = "";
    }
    currentDay++;
  }
}

const args = process.argv.slice(2); 
const now = new Date();
const year = now.getFullYear();
let month;

if (args[0] === '-m') {
    const inputMonth = parseInt(args[1]);
    if (!isNaN(inputMonth) && inputMonth >= 1 && inputMonth <= 12) {
        month = inputMonth;
    } else {
        console.error('月は1から12の間で指定してください。');
        process.exit(1)
    }
} else {
    month = now.getMonth() + 1;
}
showCalendar(year, month);
