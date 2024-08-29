// --------------------------------------------------------------------
// # 5.1 Timeouts and Dates

// const clock = document.querySelector("h2#clock");

// function getClock() {
//     const date = new Date();
//     clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }
// getClock();
// setInterval(getClock, 1000);



// --------------------------------------------------------------------
// # 5.2 PadStart

const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

