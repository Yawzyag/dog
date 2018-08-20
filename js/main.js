const countDown = document.querySelector(".countdown");
const url = "https://source.unsplash.com/weekly?puppy,dog,doggo";

//set launch date in ms
const launchDate = new Date("Jan 1, 2019 13:00:00").getTime();

//update every second
const intVl = setInterval(() => {
  //today days and time in ms
  const now = new Date().getTime();

  //distance from now to the launch date
  const distance = launchDate - now;

  //time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //display result
  countDown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
  `;

  //if launch date passed
  if (distance < 0) {
    //stop coundown
    clearInterval(intVl);
    //style and output text
    countDown.style.color = "#17a2b8";
    countDown.innerHTML = "launched!";
  }
}, 1000);

//run get Ratings when dom loads
document.addEventListener("DOMContentLoaded", backgroundURL);

function backgroundURL() {
  let background = document.querySelector(".landing");
  //   console.log(background.style.backgroundImage);
  background.style.backgroundImage = `url(${url})`;
}
