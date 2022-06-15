const mario = document.querySelector(".mario");

function marioJump(event) {
  if (!mario.classList.contains("jump") && event.code === "Space") {
    mario.classList.add("jump");
  }
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
}

window.addEventListener("keydown", (event) => {
  marioJump(event);
});
