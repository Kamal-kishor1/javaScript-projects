let startBtn = document.querySelector("#btn1");
const stopBtn = document.getElementById("btn2");
const clearBtn = document.getElementById("btn3");
let clockDay = document.querySelectorAll("#clock-day");
let clockMin = document.querySelectorAll("#clock-min");


const countDown = () => {
    let startTime = new Date("August 12, 2024").getTime();
    setInterval(() => {
        let currTime = new Date().getTime();
        let remainTime = startTime - currTime;

        let day = Math.floor(remainTime / (24 * 60 * 60 * 1000));
        let hr = Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let min = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));
        let sec = Math.floor((remainTime % (1000 * 60)) / (1000));

        clockDay.forEach((evt) => {
            // evt.firstElementChild.innerText = "9";
            // evt.lastElementChild.innerText = sec;
            // evt.nextElementSibling.firstElementChild.innerText = min;
            // evt.nextElementSibling.children[1].innerText = "9"
        })

    }, 1000);
};

countDown();









const startfunc = () => {
    startBtn.addEventListener("click", () => {
        console.log(day);
        console.log(min);
        console.log(hr);
        console.log(sec);

        clockDay.forEach((evt) => {
            evt.firstElementChild.innerText = "9";
            evt.lastElementChild.innerText = "9";
            evt.nextElementSibling.firstElementChild.innerText = "9";
            evt.nextElementSibling.children[1].innerText = "9"
        })
        clockMin.forEach((evt) => {
            evt.firstElementChild.innerText = "9";
            evt.children[1].innerText = "9";
            evt.nextElementSibling.firstElementChild.innerText = "9";
            evt.nextElementSibling.lastElementChild.innerText = "9"
        })
    });
};


stopBtn.addEventListener("click", () => {
    console.log("stop button clicked");
});


clearBtn.addEventListener("click", () => {
    clockDay.forEach((evt) => {
        evt.firstElementChild.innerText = "0";
        evt.lastElementChild.innerText = "0";
        evt.nextElementSibling.firstElementChild.innerText = "0";
        evt.nextElementSibling.children[1].innerText = "0"
    })
    clockMin.forEach((evt) => {
        evt.firstElementChild.innerText = "0";
        evt.children[1].innerText = "0";
        evt.nextElementSibling.firstElementChild.innerText = "0";
        evt.nextElementSibling.lastElementChild.innerText = "0"
    })
});