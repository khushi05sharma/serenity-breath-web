const quotes = [
  "Breathe in, breathe out, let go.",
  "Inhale peace, exhale stress.",
  "With every breath, find your center.",
  "Pause. Breathe. Reflect.",
  "Focus on your breath; let the world fade away.",
];

let quoteIndex = 0;
const quoteElement = document.getElementById("quote");

function updateQuotes() {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  quoteElement.textContent = quotes[quoteIndex];
}

setInterval(updateQuotes, 3000);

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  window.location.href = "main.html";
});
