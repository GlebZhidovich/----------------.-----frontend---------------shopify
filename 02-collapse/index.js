/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  let isOpen = true;
  const btn = document.querySelector(".collapsible__button");
  const content = document.querySelector(".collapsible__content");
  const visibleText = document.querySelector(".collapsible__action--visible");
  const hiddenText = document.querySelector(".collapsible__action--hidden");
  content.style.overflow = "hidden";
  hiddenText.style.display = "none";
  const openKeyframes = [
    {
      height: "0px",
    },
    {
      height: "40px",
    },
  ];

  const closeKeyframes = [
    {
      height: "40px",
    },
    {
      height: "0px",
    },
  ];

  function onClick() {
    btn.disabled = true;
    const keyframes = isOpen ? closeKeyframes : openKeyframes;
    const player = content.animate(keyframes, 300);
    player.onfinish = function () {
      content.style.height = isOpen
        ? openKeyframes[0].height
        : openKeyframes[1].height;
      if (isOpen) {
        hiddenText.style.display = "inline";
        visibleText.style.display = "none";
      } else {
        hiddenText.style.display = "none";
        visibleText.style.display = "inline";
      }
      isOpen = !isOpen;
      btn.disabled = false;
    };
  }

  btn.addEventListener("click", onClick);
});
