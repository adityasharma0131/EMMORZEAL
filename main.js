let progressValues = [0, 0, 0, 0, 0]; // Array to store progress values for each progress bar
let progressEndValues = [57, 21, 37, 47, 22]; // Array to store end values for each progress bar
let speed = 10;

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
