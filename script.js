const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");

function marioJump(event) {
  if (!mario.classList.contains("jump") && event.code === "Space") {
    mario.classList.add("jump");
  }
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const marioPositionBottom = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 86 && pipePosition > 0 && marioPositionBottom <= 80) {
    pipe.style.left = pipePosition + "px";
    pipe.style.animation = "none";

    clouds.style.animation = "none";
    clouds.style.left = cloudsPosition + "px";

    mario.style.bottom = marioPositionBottom + "px";
    mario.style.zIndex = 2;
    mario.src = "./img/game-over.png";
    mario.classList.add("mario-dead");
    mario.style.width = 50 + "px";
    mario.style.marginLeft = `${50}px`;

    clearInterval(loop);
  }
}, 10);

window.addEventListener("keydown", (event) => {
  marioJump(event);
});
