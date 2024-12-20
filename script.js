function createHourMarks(theme = "digital") {
  const clock = document.getElementById("clock");
  clock.innerHTML = '<div class="center"></div>';

  const romans = ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];

  for (let i = 0; i < 12; i++) {
    const mark = document.createElement("div");
    mark.className = "mark";
    mark.style.transform = `translate(-50%, -100%) rotate(${i * 30}deg) translateY(-240px)`;

    if (theme === "romain") {
      const number = document.createElement("div");
      number.className = "number neon";
      number.textContent = romans[i];
      number.style.transform = `rotate(-${i * 30}deg)`;
      mark.appendChild(number);
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
  hand.style.transform = `rotate(${angle}deg)`;

  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.textContent = value;
    span.style.top = `${distance - i * 20}px`;
    hand.appendChild(span);
  }
}

function setTheme(theme) {
  const clock = document.getElementById("clock");

  clock.classList.remove("digital-theme", "romain-theme", "moderne-theme");

  clock.classList.add(`${theme}-theme`);

  createHourMarks(theme);
}

setTheme("digital"); // Démarrage par défaut en mode digital
setInterval(updateClock, 1000);
updateClock();
