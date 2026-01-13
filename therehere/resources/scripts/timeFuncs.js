// date tracker
const date = {
    year: 2019,
    month: 11, // 0-indexed (December)
    day: 1
};

// time tracker
const time = {
    hour: 0,
    minute: 0,
    second: 0
};

// secs per tick
const speedSettings = {
    "Real-Time": 1,
    "Half-Minute": 30,
    "Minute": 60,
    "Quarter-Hour": 900,
    "Hour": 3600
};

let currentSpeed = "Real-Time";
let tickInterval = null;
let clockFormat = 12;

// cache DOM element
const clockElement = document.getElementById("clock");

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDaysInMonth(year, month) {
    // month is 0-indexed, so Jan is 0 and Dec is 11
    // Feb is the only month with variable days based on leap year (thanks leap year), so check that first
    if (month === 1) return isLeapYear(year) ? 29 : 28;
    // every other month is assumed to have 31 days cept for Apr, Jun, Sep, Nov
    const thirty = [3, 5, 8, 10];
    return thirty.includes(month) ? 30 : 31;
}

function updateClock() {
    let hours = time.hour;
    const minutes = time.minute;
    const seconds = time.second;
    let ampm = "";

    if (clockFormat === 12) {
        ampm = hours >= 12 ? " PM" : " AM";
        hours = hours % 12 || 12;
    }
    
    clockElement.innerText = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}${ampm}`;
}

function tick() {
    time.second += speedSettings[currentSpeed];
    
    if (time.second >= 60) {
        time.minute += Math.floor(time.second / 60);
        time.second %= 60;
    }
    
    if (time.minute >= 60) {
        time.hour += Math.floor(time.minute / 60);
        time.minute %= 60;
    }
    
    if (time.hour >= 24) {
        date.day += Math.floor(time.hour / 24);
        time.hour %= 24;
        
        // handle month and year rollover with leap year-aware days
        while (true) {
            const daysInCurrentMonth = getDaysInMonth(date.year, date.month);
            if (date.day <= daysInCurrentMonth) break;
            date.day -= daysInCurrentMonth;
            date.month = (date.month + 1) % 12;
            if (date.month === 0) {
                date.year++;
            }
        }
    }
    
    updateClock();
}

function setSpeed(speed) {
    currentSpeed = speed;
    startTicker();
}

function startTicker() {
    if (tickInterval) {
        clearInterval(tickInterval);
    }
    tickInterval = setInterval(tick, 1000);
}

startTicker();
