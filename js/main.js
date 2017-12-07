document.addEventListener('DOMContentLoaded', function() {

    const secondsH = document.getElementById('seconds');
    const minutesH = document.getElementById('minutes');
    const hoursH = document.getElementById('hours');
    const time = document.getElementById('time');

    const secondsH2 = document.getElementById('seconds2');
    const minutesH2 = document.getElementById('minutes2');
    const hoursH2 = document.getElementById('hours2');
    const time2 = document.getElementById('time2');

    function getTime() {
        const date = new Date();
        const sec = date.getSeconds();
        const min = date.getMinutes();
        const hour = date.getHours();
        
        secondsH.style.transform = (`rotate(${sec*6}deg)`);
        minutesH.style.transform = (`rotate(${min*6}deg)`);
        hoursH.style.transform = (`rotate(${hour*6}deg)`);
        time.innerText = `${hour<10?"0":""}${hour}:${min<10?"0":""}${min}:${sec<10?"0":""}${sec}`;

        secondsH2.style.transform = (`rotate(${-sec*6+180}deg)`);
        minutesH2.style.transform = (`rotate(${-min*6+180}deg)`);
        hoursH2.style.transform = (`rotate(${-hour*6+180}deg)`);
        time2.innerText = `${hour<10?"0":""}${hour}:${min<10?"0":""}${min}:${sec<10?"0":""}${sec}`;

    }

    var tick = setInterval(getTime, 1000);

})