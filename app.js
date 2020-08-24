window.addEventListener("load", () => {
  // Selectors
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#a3586d",
    "#5c4a72",
    "#f3b05a",
    "#f46a4e",
    "#0abda0",
    "#af1b45",
  ];

  //   Adding Sounds
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });

  //   Creating bubbles
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    visual.appendChild(bubble);
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
