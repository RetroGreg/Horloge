function createHourMarks(theme = "digital") {
  const clock = document.getElementById("clock");
  clock.innerHTML = '<div class="center"></div>';

  const romans = ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
  
  // Calculer le rayon une seule fois
  const clockSize = Math.min(clock.offsetWidth, clock.offsetHeight);
  const markDistance = (clockSize / 2) - 20;

  for (let i = 0; i < 12; i++) {
    const mark = document.createElement("div");
    mark.className = "mark";
    mark.style.transform = `translate(-50%, -100%) rotate(${i * 30}deg) translateY(-${markDistance}px)`;

    if (theme === "romain") {
      const number = document.createElement("div");
      number.className = "number neon";
      number.textContent = romans[i];
      number.style.transform = `rotate(-${i * 30}deg)`;
      mark.appendChild(number);
      
      // En mode romain, rendre la marque invisible
      mark.style.background = "transparent";
      mark.style.width = "auto";
      mark.style.height = "auto";
    }

    clock.appendChild(mark);
  }
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  setHand("hour", (hours % 12) * 30, 100, hours, 5);
  setHand("minute", minutes * 6, 140, minutes, 7);
  setHand("second", seconds * 6, 160, seconds, 8);
}

function setHand(id, angle, distance, value, count) {
  const clock = document.getElementById("clock");
  let hand = document.getElementById(id);

  if (!hand) {
    hand = document.createElement("div");
    hand.className = `hand`;
    hand.id = id;
    clock.appendChild(hand);
  }

  hand.innerHTML = "";
  hand.style.transform = `rotate(${angle + 180}deg)`;
  
  // Ajuster la distance selon la taille de l'horloge
  const clockSize = Math.min(clock.offsetWidth, clock.offsetHeight);
  const baseDistance = clockSize * 0.2; // 20% du diamètre comme base
  const adjustedDistance = baseDistance + (distance / 240) * (clockSize * 0.25);

  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.textContent = value.toString().padStart(2, '0');
    span.style.top = `${adjustedDistance - i * 15}px`; // Réduire l'espacement
    hand.appendChild(span);
  }
}

function setTheme(theme) {
  const clock = document.getElementById("clock");
  currentTheme = theme; // Sauvegarder le thème actuel

  clock.classList.remove("digital-theme", "romain-theme", "moderne-theme");
  clock.classList.add(`${theme}-theme`);

  createHourMarks(theme);
}

// Démarrage et gestion du redimensionnement
window.addEventListener('resize', () => {
  createHourMarks(currentTheme);
});

// Variable pour stocker le thème actuel
let currentTheme = "digital";

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  setTheme("digital");
  setInterval(updateClock, 1000);
  updateClock();
});