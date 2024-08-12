const startBtn = document.querySelector("#start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const clockDay = document.querySelectorAll("#clock-day");
const clockMin = document.querySelectorAll("#clock-min");
const result = document.querySelector(".result");

let interval = null;

const countDown = () => {
    let date = document.querySelector(".start-date").value;

    startTime = new Date(date).getTime();
    // let startTime = new Date("August 12, 2024 17:11:00").getTime();
    console.log(date);
    console.log(startTime);


    const pattern = /^\s*$/;   // matches an empty string or only whitespace characters


    if (pattern.test(date)) {
        alert("Your did'nt select the date and time!");
    }
    else {
        interval = setInterval(() => {
            let currTime = new Date().getTime();
            let remainTime = startTime - currTime;

            let day = Math.floor(remainTime / (24 * 60 * 60 * 1000));
            let hr = Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let min = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));
            let sec = Math.floor((remainTime % (1000 * 60)) / (1000));


            const time = {
                d: day,
                h: hr,
                m: min = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60)),
                s: sec
            }

            time.d = time.d < 10 ? `0${time.d}` : `${time.d}`;
            time.h = time.h < 10 ? `0${time.h}` : `${time.h}`;
            time.m = time.m < 10 ? `0${time.m}` : `${time.m}`;
            time.s = time.s < 10 ? `0${time.s}` : `${time.s}`;

            time.d0 = time.d[0];
            time.d1 = time.d[1];
            time.h0 = time.h[0];
            time.h1 = time.h[1];
            time.m0 = time.m[0];
            time.m1 = time.m[1];
            time.s0 = time.s[0];
            time.s1 = time.s[1];


            console.log(`${time.d0}${time.d1} : ${time.h0}${time.h1} : ${time.m0}${time.m1} : ${time.s0}${time.s1}`);


            if (remainTime > 0) {
                clockDay.forEach((evt) => {
                    evt.firstElementChild.innerText = time.d0;
                    evt.lastElementChild.innerText = time.d1;
                    evt.nextElementSibling.firstElementChild.innerText = time.h0;
                    evt.nextElementSibling.children[1].innerText = time.h1;
                })

                clockMin.forEach((evt) => {
                    evt.firstElementChild.innerText = time.m0;
                    evt.children[1].innerText = time.m1;
                    evt.nextElementSibling.firstElementChild.innerText = time.s0;
                    evt.nextElementSibling.lastElementChild.innerText = time.s1;
                })
            }
            else {
                clearInterval(interval);
                result.classList.remove("hide");
                result.innerText = "Congratulation your timer has ended.";
            }


        }, 1000);

    }
};



startBtn.addEventListener("click", () => {
    countDown();
    result.classList.add("hide");
});


stopBtn.addEventListener("click", () => {
    clearInterval(interval);

    result.classList.remove("hide");
    result.innerText = "This button is not functional now";

    clockDay.forEach((evt) => {
        evt.firstElementChild.innerText = "9";
        evt.lastElementChild.innerText = "9";
        evt.nextElementSibling.firstElementChild.innerText = "9";
        evt.nextElementSibling.children[1].innerText = "9";
    })

    clockMin.forEach((evt) => {
        evt.firstElementChild.innerText = "9";
        evt.children[1].innerText = "9";
        evt.nextElementSibling.firstElementChild.innerText = "9";
        evt.nextElementSibling.lastElementChild.innerText = "9";
    })
});


resetBtn.addEventListener("click", () => {
    clearInterval(interval);

    result.classList.add("hide");
    result.innerText = "";


    clockDay.forEach((evt) => {
        evt.firstElementChild.innerText = "0";
        evt.lastElementChild.innerText = "0";
        evt.nextElementSibling.firstElementChild.innerText = "0";
        evt.nextElementSibling.children[1].innerText = "0";
    })
    clockMin.forEach((evt) => {
        evt.firstElementChild.innerText = "0";
        evt.children[1].innerText = "0";
        evt.nextElementSibling.firstElementChild.innerText = "0";
        evt.nextElementSibling.lastElementChild.innerText = "0";
    })

    let date = document.querySelector(".start-date").value = ' ';

});