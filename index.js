let availableStorage = 1000;
let used = 815;
let left = availableStorage - used;

// display used storage
const usedDisplay = document.getElementById("used");
usedDisplay.textContent = `${used}`;

// progress bar's width updating css variable
const progressValue = document.getElementById("progress-value");
progressValue.setAttribute(
  "style",
  `--width: ${(used / availableStorage) * 100}%`
);

// display available storage
const availableStorageDisplay = document.getElementById("available-storage");
availableStorageDisplay.textContent = `${availableStorage} GB`;

// display storage left
const leftDisplay = document.getElementById("left");
leftDisplay.textContent = left;
