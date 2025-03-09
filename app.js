// ============= Time Text ===========//
const setTime = document.getElementById('time');

// =========== Initial Time =========//
let [seconds, minutes, hours] = [0, 0, 0];

// =============== Initial Timer =========//
let timer = null;

// ============ Get Time Function ========//
const getTime = () => {
    // ======= Set Seconds ======//
    seconds++;
    if (seconds == 60) {
        minutes++;
        seconds = 0;
    }

    // ========= Set Minutes ===========//
    if (minutes == 60) {
        hours++;
        minutes = 0;
    }

    // ========== Format Time ===========//
    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let h = hours < 10 ? "0" + hours : hours;

    // ========== Display Time ===========//
    setTime.innerText = `${h} : ${m} : ${s}`;
}

// ========= Start Time Function ==========//
const startTime = () => {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(getTime, 1000);
}

// ============== Stop Time ==============//
const stopTime = () => {
    clearInterval(timer);
    timer = null;
}

// ============ reset time =========//
