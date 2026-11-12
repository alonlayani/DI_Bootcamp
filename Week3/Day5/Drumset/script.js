// ==========================================================
// Week 3 - Day 5 - Mini Project : Drumset
// ==========================================================

function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return; // not a drum key

  audio.currentTime = 0; // rewind so the sound can be played fast, again and again
  audio.play();
  key.classList.add("playing");
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

// keyboard
window.addEventListener("keydown", (event) => playSound(event.keyCode));

// mouse clicks: "this" is the clicked .key element
document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("click", function () {
    playSound(this.dataset.key);
  });
  key.addEventListener("transitionend", removeTransition);
});
