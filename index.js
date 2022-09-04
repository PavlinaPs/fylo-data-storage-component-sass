let availableStorage = 1000;
let used = 815;
let left = availableStorage - used;

const usedDisplay = document.getElementById("used");
usedDisplay.textContent = `${used}`;

const progressValue = document.getElementById("progress-value");
progressValue.setAttribute(
  "style",
  `--width: ${(used / availableStorage) * 100}%`
);

const availableStorageDisplay = document.getElementById("available-storage");
availableStorageDisplay.textContent = `${availableStorage} GB`;

const leftDisplay = document.getElementById("left");
leftDisplay.textContent = left;
