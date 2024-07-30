let choices = document.querySelectorAll(".choice");
// let userCount = document.querySelector(".user-counter");
// let sysCount = document.querySelector(".system-counter");

let userCount = 0;
let syscount = 0;

const genSysChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const ranNum = Math.floor(Math.random()*3); //math.random is use to generate random numbers btw 0-1 but if we multiply it with number we want then it gives that
    // console.log(ranNum);
    return option[ranNum];
};

const playGame = (userChoice) => {
    console.log(`userchoice = ${userChoice}`);
    const sysChoice = genSysChoice();
    console.log(`syschoice = ${sysChoice}`);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice);
    });
});
