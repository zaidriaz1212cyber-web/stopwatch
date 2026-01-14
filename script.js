let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = null;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const modeToggle = document.getElementById("modeToggle");

/* Format Time */
function updateDisplay() {
  const m = String(minutes).padStart(2, "0");
  const s = String(seconds).padStart(2, "0");
  const ms = String(milliseconds).padStart(3, "0");
  display.textContent = `${m} : ${s} : ${ms}`;
}

/* Stopwatch Logic */
function startStopwatch() {
  if (!running) {
    running = true;
    interval = setInterval(() => {
      milliseconds += 10;

      if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
      }

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      updateDisplay();
    }, 10);
  }
}

function pauseStopwatch() {
  running = false;
  clearInterval(interval);
}

function resetStopwatch() {
  running = false;
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
}

/* Dark / Light Mode */
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  modeToggle.textContent =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

/* Button Events */
startBtn.addEventListener("click", startStopwatch);
pauseBtn.addEventListener("click", pauseStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
