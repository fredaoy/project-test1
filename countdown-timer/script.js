const DaysEl = document.getElementById('days')
const HoursEl = document.getElementById('hours')
const MinsEl = document.getElementById('mins')
const SecondsEl = document.getElementById('seconds')


const newYears = '1 Jan 2024';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60

    DaysEl.innerHTML = days;
    HoursEl.innerHTML = formatTime(hours);
    MinsEl.innerHTML = formatTime(minutes);
    SecondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ?(`0${time}`) : time; 
}


//initial call
countdown();

setInterval(countdown,1000);
