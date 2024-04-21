// Variables
let studyTimer, breakTimer, timerInterval, minutes, seconds,
    savedMinutes, savedSeconds, savedTimerInterval;

// Functions

// Start Study Timer
function startStudyTimer() {
    minutes = 25;
    seconds = 0;
    updateTimer();
    startTimer();
}

// Start Break Timer
function startBreakTimer() {
    minutes = 5;
    seconds = 0;
    updateTimer();
    startTimer();
}

// Start Timer
function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                // Handle timer end
                handleTimerEnd();
            }
            updateTimer();
        }, 1000);
    }
}

// Pause Timer
function pauseTimer() {
    if (timerInterval) {
        savedMinutes = minutes;
        savedSeconds = seconds;
        savedTimerInterval = timerInterval;
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Resume Timer
function resumeTimer() {
    if (savedTimerInterval) {
        minutes = savedMinutes;
        seconds = savedSeconds;
        timerInterval = savedTimerInterval;
        updateTimer();
        savedTimerInterval = null;
    }
}
// Reset Timer
function resetTimer() {
    minutes = 25;
    seconds = 0;
    updateTimer();
    pauseTimer();
}

// Update Timer
function updateTimer() {
    document.getElementById("timer").innerHTML = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Handle timer end
function handleTimerEnd() {
    // Display a message or perform other actions
    alert("Time's up!");
}

// Initialization
startStudyTimer();

