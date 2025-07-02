//breathing part

const instructions = document.getElementById("instructions");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const circle = document.querySelector(".breathing-circle");

let isBreathing = false;
let breathingInterval;
let stepsIdx = 0;

const breathingSteps = ["Inhale....", "Hold....", "Exhale...."];

startBtn.addEventListener("click", () => {
  if (isBreathing) return;
  isBreathing = true;

  stepsIdx = 0;
  instructions.textContent = breathingSteps[stepsIdx];

  breathingInterval = setInterval(() => {
    stepsIdx = (stepsIdx + 1) % breathingSteps.length;
    instructions.textContent = breathingSteps[stepsIdx];
  }, 4000);
});

resetBtn.addEventListener("click", () => {
  clearInterval(breathingInterval);
  breathingInterval = null;
  isBreathing = false;

  stepsIdx = 0;
  instructions.textContent = "Get Ready....";
});

//hamburger part

const hamburgerMenu = document.getElementById("hamburger-menu");
const menuContent = document.getElementById("menu-content");
const audio = new Audio();

hamburgerMenu.addEventListener("click", () => {
  menuContent.style.display =
    menuContent.style.display === "block" ? "none" : "block";
});

const musicButtons = document.querySelectorAll(".music-btn");
const currentMusic = document.getElementById("current-music");

musicButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const musicSrc = btn.getAttribute("data-src");
    audio.src = musicSrc;
    audio.loop = true;
    audio.play();
    currentMusic.textContent = `Current: ${btn.textContent}`;
  });
});

const muteUnmute = document.getElementById("mute-unmute");
const volumeSlider = document.getElementById("volume-slider");

audio.volume = volumeSlider.value;

muteUnmute.addEventListener("click", () => {
  if (audio.volume > 0) {
    audio.volume = 0;
    volumeSlider.value = 0;
    muteUnmute.textContent = "Unmute";
  } else {
    audio.volume = volumeSlider.value || 1;
    muteUnmute.textContent = "Mute";
  }
});

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
  muteUnmute.textContent = audio.volume === 0 ? "Unmute" : "Mute";
});

const stopBtn = document.getElementById("stop-btn");

stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  currentMusic.textContent = "Current: None";
});

const bgButtons = document.querySelectorAll(".bg-btn");
const currentBg = document.getElementById("current-bg");

bgButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const bgSrc = btn.getAttribute("data-bg");
    document.body.style.backgroundImage = `url(${bgSrc})`;
    currentBg.textContent = `Current: ${btn.textContent}`;
  });
});
