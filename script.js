const mario = document.querySelector(".mario");

function marioJump() {
  mario.classList.add("jump");

  setInterval(() => {
    mario.classList.remove("jump");
  }, 5000);
}

window.addEventListener("keydown", marioJump);
