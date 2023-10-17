const hamburger = document.querySelector(".hamburger");
const listitems = document.getElementById("list-items");
const navbar = document.querySelector(".navbar");
hamburger.addEventListener("click", () => {
  listitems.classList.toggle("v-class");
  navbar.classList.toggle("h-nav");
});

function updateCountdown() {
  var now = new Date().getTime();

  // Calculate the countdown date for today at 15:37:25
  var countDownDate = new Date();
  countDownDate.setHours(15);
  countDownDate.setMinutes(37);
  countDownDate.setSeconds(25);

  // If the current time is past 15:37:25 for today, set it for tomorrow
  if (now > countDownDate.getTime()) {
    countDownDate.setDate(countDownDate.getDate() + 1);
  }

  // Update the countdown
  var x = setInterval(function () {
    now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Create a variable to hold the countdown text
    var countdownText = "";

    if (days > 0) {
      countdownText += days + "d ";
    }

    countdownText += hours + "h " + minutes + "m " + seconds + "s ";

    document.getElementById("demo").innerHTML = countdownText;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
}

// Call the function to start the countdown
updateCountdown();
