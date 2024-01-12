// Set the date we're counting down to
let christmas = new Date("Dec 25, 2024 00:00:00").getTime();

// Update the count down every 1 second
function countDown() {
    // Get today's date and time
    let now = new Date().getTime();

     // Find the distance between now and the count down date
    let distance = christmas - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element by grabbing class names
    document.getElementsByClassName("day-number")[0].innerHTML = days
    document.getElementsByClassName("day-hours")[0].innerHTML = hours
    document.getElementsByClassName("day-mins")[0].innerHTML = minutes
    document.getElementsByClassName("day-seconds")[0].innerHTML = seconds

    // Determines if the timeframe is more than one to correctly display time description
    let dayAmount = days === 1 ? "Day" : "Days"
    let hourAmount = hours === 1 ? "Hour" : "Hours"
    let minutesAmount = minutes === 1 ? "Minute" : "Minutes"
    let secondsAmount = seconds === 1 ? "Second" : "Seconds"

    // Output the result in an element by grabbing class names
    document.getElementsByClassName("days")[0].innerHTML = dayAmount
    document.getElementsByClassName("hours")[0].innerHTML = hourAmount
    document.getElementsByClassName("mins")[0].innerHTML = minutesAmount
    document.getElementsByClassName("seconds")[0].innerHTML = secondsAmount
}

countDown();

setInterval(countDown, 1000);
