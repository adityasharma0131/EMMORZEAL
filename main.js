let progressValues = [0, 0, 0, 0, 0]; // Array to store progress values for each progress bar
let progressEndValues = [57, 21, 37, 47, 22]; // Array to store end values for each progress bar
let speed = 55;

for (let i = 1; i <= 5; i++) {
  let progressBar = document.querySelector(`.circular-progress${i}`);
  let valueContainer = document.querySelector(`.value-container${i}`);
  let progressValue = progressValues[i - 1]; // Accessing the respective progress value from the array
  let progressEndValue = progressEndValues[i - 1]; // Accessing the respective end value from the array

  let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}+`;
    progressBar.style.background = `conic-gradient(
        #CC0001 ${progressValue * 3.6}deg,
        #cc000065 ${progressValue * 3.6}deg
    )`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);

  // Update the progress value in the array for future use
  progressValues[i - 1] = progressValue;
}




const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}





let filled = document.querySelector('.filled');

function update() {
  filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
  requestAnimationFrame(update);
}
update();
