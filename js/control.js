// Change backround
// const background = $(".section-background");

// const switchBackground = (current, length) => {
//   setTimeout(() => {
//     const nextActive = (current + 1) % length;
//     background[nextActive].classList.add("pre-active");
//     setTimeout(() => {
//       background[current].classList.remove("active");
//       background[nextActive].classList.remove("pre-active");
//       switchBackground(nextActive, length);
//     }, 1000);
//     setTimeout(() => {
//       background[nextActive].classList.add("active");
//     }, 200);
//   }, 4000);
// };

// switchBackground(0, background.length);

const now = moment();
const target = moment("2023-01-13 08:00");

const eventTime = moment("2023-01-13 08:00"); // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
const currentTime = moment(); // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
const diffTime = eventTime - currentTime;
let duration = moment.duration(diffTime, "milliseconds");
const interval = 1000;

const days = $("#countdown-days");
const hours = $("#countdown-hours");
const minutes = $("#countdown-minutes");
const seconds = $("#countdown-seconds");

const formatTwoNumber = (value) => {
  return value >= 10 ? value : "0" + value;
};
const count = setInterval(() => {
  duration = moment.duration(duration - interval, "milliseconds");
  if (duration <= 0) {
    clearInterval(count);
    const countDown = $(".space_time_count_down")[0];
    countDown.parentElement.removeChild(countDown);
  } else {
    days.text(formatTwoNumber(duration.days()));
    hours.text(formatTwoNumber(duration.hours()));
    minutes.text(formatTwoNumber(duration.minutes()));
    seconds.text(formatTwoNumber(duration.seconds()));
  }
}, interval);
