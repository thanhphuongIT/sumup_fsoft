// const REST_TIME = 3000;
// const ADD_CHAR_TIME = 300;
// const REMOVE_CHAR_TIME = 100;

// let currentIndex = 0;
// const headers = ["MASS", "VELOCITY", "MOMENTUM"];

// const typingElement = document.querySelector("#typing-effect");

// const animateAdd = (text) => {
//   const length = typingElement.textContent.length;
//   if (length < text.length) {
//     typingElement.textContent = text.slice(0, length + 1);
//     setTimeout(() => {
//       animateAdd(text);
//     }, ADD_CHAR_TIME);
//   } else {
//     setTimeout(() => {
//       animateRemove(text);
//     }, REST_TIME);
//   }
// };

// const animateRemove = (text) => {
//   const length = typingElement.textContent.length;
//   if (length > 0) {
//     typingElement.textContent = text.slice(0, length - 1);
//     setTimeout(() => {
//       animateRemove(text);
//     }, REMOVE_CHAR_TIME);
//   } else {
//     setTimeout(() => {
//       changeText();
//     }, ADD_CHAR_TIME);
//   }
// };

// const changeText = () => {
//   typingElement.textContent = "";
//   // typingElement.textContent = headers[currentIndex];
//   animateAdd(headers[currentIndex]);
//   currentIndex = (currentIndex + 1) % headers.length;
// };

// changeText();

const guestItemWidth = $(".guest-list-item").width();
const next = () => {
  const scroller = $(".guest .scroller");
  scroller.animate(
    {
      scrollLeft: scroller.scrollLeft() + guestItemWidth,
    },
    300
  );
};
const prev = () => {
  const scroller = $(".guest .scroller");
  scroller.animate(
    {
      scrollLeft: scroller.scrollLeft() - guestItemWidth,
    },
    300
  );
};

const upcommingItemWidth = $(".guest-list-item").width();
const upcommingNext = () => {
  const scroller = $(".upcoming .scroller");
  scroller.animate(
    {
      scrollLeft: scroller.scrollLeft() + guestItemWidth,
    },
    300
  );
};
const upcommingPrev = () => {
  const scroller = $(".upcoming .scroller");
  scroller.animate(
    {
      scrollLeft: scroller.scrollLeft() - guestItemWidth,
    },
    300
  );
};

const handleBodyScroll = (event) => {
  if (event.target.scrollTop > 50) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("scroll", handleBodyScroll);
});

const scrollToGuide = () => {
  const top = document.querySelector("#guide").offsetTop - 100;
  $(document.body).animate({ scrollTop: top }, 300);
};

// 2. This code loads the IFrame Player API code asynchronously.
// var tag = document.createElement("script");

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player("player", {
//     height: window.innerHeight,
//     width: window.innerWidth,
//     videoId: "eTZ-oT5T7So",
//     playerVars: {
//       playsinline: 1,
//       autoplay: 1,
//       controls: 0,
//       showinfo: 0,
//       loop: 1,
//     },
//     events: {
//       onReady: onPlayerReady,
//       onStateChange: onPlayerStateChange,
//     },
//   });
// }

// 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   console.log("Ready");
//   player.mute();
//   event.target.playVideo();
// }

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     // setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }

// function stopVideo() {
//   player.stopVideo();
// }

// const checkVideoOrientation = () => {
//   const videobackground = document.querySelector(".video-background");
//   if (window.innerWidth / window.innerHeight > 1.3) {
//     videobackground.classList.add("landscape");
//   } else {
//     videobackground.classList.remove("landscape");
//   }
// };

// const removeMessage = () => {
//   const message = document.querySelector(".tap-to-play");
//   if (message) {
//     message.parentElement.removeChild(message);
//   }
// };

// const handlePlayVideo = () => {
//   if (player && player.getPlayerState() != YT.PlayerState.PLAYING) {
//     player.playVideo();
//   }
//   // removeMessage();
// };

// window.addEventListener("resize", () => {
//   checkVideoOrientation();
// });

// window.addEventListener("mousemove", () => {
//   handlePlayVideo();
// });

// window.addEventListener("touchstart", () => {
//   handlePlayVideo();
// });

// checkVideoOrientation();

const background = $(".section-background");

const switchBackground = (current, length) => {
  setTimeout(() => {
    const nextActive = (current + 1) % length;
    background[nextActive].classList.add("pre-active");
    setTimeout(() => {
      background[current].classList.remove("active");
      background[nextActive].classList.remove("pre-active");
      switchBackground(nextActive, length);
    }, 1000);
    setTimeout(() => {
      background[nextActive].classList.add("active");
    }, 200);
  }, 4000);
};

switchBackground(0, background.length);

const button = $("#countdown-button");

const now = moment();
const target = moment("2022-12-16 15:00");

// button.text(target.diff(now, "days") + " days left - Join Now");

const eventTime = moment("2022-12-16 15:00"); // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
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
    const countDown = $(".countdown-wrapper")[0];
    countDown.parentElement.removeChild(countDown);
  } else {
    days.text(formatTwoNumber(duration.days()));
    hours.text(formatTwoNumber(duration.hours()));
    minutes.text(formatTwoNumber(duration.minutes()));
    seconds.text(formatTwoNumber(duration.seconds()));
  }
  // $(".countdown").text(
  //   duration.days() +
  //     ":" +
  //     duration.hours() +
  //     ":" +
  //     duration.minutes() +
  //     ":" +
  //     duration.seconds()
  // );
}, interval);
