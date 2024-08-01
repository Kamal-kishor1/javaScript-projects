let choices = document.querySelectorAll(".choice");
let uCount = document.querySelector(".user-counter");
let sCount = document.querySelector(".system-counter");
let msgContent = document.querySelector("#msg");

let userCount = 0;
let sysCount = 0;

const genSysChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const ranNum = Math.floor(Math.random() * 3); //math.random is use to generate random numbers btw 0-1 but if we multiply it with number we want then it gives that
    // console.log(ranNum);
    return option[ranNum];
};


const drawGame = () => {
    // console.log("game draw");
    msgContent.innerText = "game draw";
    
};

const showWinner = (userWin) => {
    if (userWin) {
        msgContent.innerText = "user win";
        msgContent.style.backgroundColor = "green";
        userCount++;
        // console.log(userCount);
        uCount.innerText = userCount;
    } else {
        msgContent.innerText = "sys win";
        msgContent.style.backgroundColor = "red";
        sysCount++;
        // console.log(sysCount);
        sCount.innerText = sysCount;
    }
};

const playGame = (userChoice) => {
    // console.log(`userchoice = ${userChoice}`);
    const sysChoice = genSysChoice();
    // console.log(`syschoice = ${sysChoice}`);


    if (userChoice === sysChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // either paper or scissor
            userWin = sysChoice === "paper" ? false : true;

        } else if (userChoice === "paper") {
            // either rock or scissor
            userWin = sysChoice === "rock" ? true : false;

        } else {
            // either rock or paper
            userWin = sysChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice);
    });
});
