// function indianClock
function indianClock() {
    var today = new Date();
    var options = {timeZone : 'Asia/Kolkata'};
    var indianDate = today.toLocaleDateString('en-US',options);
    var indianTime = today.toLocaleTimeString('en-US',options);
    document.querySelector('#india_date').textContent = indianDate;
    document.querySelector('#india_time').textContent = indianTime;
}

setInterval(indianClock,1000);

// function USAClock
function usaClock() {
    var today = new Date();
    var options = {timeZone : 'America/New_York'};
    var usaDate = today.toLocaleDateString('en-US',options);
    var usaTime = today.toLocaleTimeString('en-US',options);
    document.querySelector('#usa_date').textContent = usaDate;
    document.querySelector('#usa_time').textContent = usaTime;
}

setInterval(usaClock,1000);

// function ChinaClock
function chinaClock() {
    var today = new Date();
    var options = {timeZone : 'Asia/Shanghai'};
    var chinaDate = today.toLocaleDateString('en-US',options);
    var chinaTime = today.toLocaleTimeString('en-US',options);
    document.querySelector('#china_date').textContent = chinaDate;
    document.querySelector('#china_time').textContent = chinaTime;
}

setInterval(chinaClock,1000);