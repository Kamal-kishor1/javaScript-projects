let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector(".newgame");
let resetGame = document.querySelector(".resetgame");
let msgWinner = document.querySelector("p");




        //reset button

const resetgame = ()=>{
    btnVal = true;
    count = 0;
    enabledBoxes();
    msgWinner.classList.add("hide");
    msgWinner.innerText = "";
};

resetGame.addEventListener("click",resetgame);
newGame.addEventListener("click",resetgame);



        // checking turn whether player X or player O

let btnVal = true; 
let count=0;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(btnVal){
            box.innerText = "O";
            btnVal = false;
        }
        else{
            box.innerText = "X";
            box.classList.add("color");
            btnVal = true;
        }
        // console.log(btnVal);
        count++;
        // console.log(count);
        box.disabled = true;
        let isWinner = checkWinner();
        if(count===9 && !isWinner){
            drawGame();
        }
    });
});

 

        //function for checking winner 

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const checkWinner = ()=>{
    for(let pattern of winPattern){
        let post0Val=boxes[pattern[0]].innerText;
        let post1Val=boxes[pattern[1]].innerText;
        let post2Val=boxes[pattern[2]].innerText;

        if(post0Val !="" && post1Val != "" && post2Val != ""){
            if(post0Val === post1Val && post1Val === post2Val){
                // console.log("winner",post0Val);
                showWinner(post0Val);
            }
        }
    }
};



        //draw game 

const drawGame = ()=>{
    msgWinner.innerText = "Game was a draw";
    msgWinner.classList.remove("hide");
    disabledBoxes(); 
};


        //printing winner

const showWinner = (winner)=>{
    msgWinner.innerText = `congratulation, winner is ${winner}`;
    msgWinner.classList.remove("hide");
    disabledBoxes();    //disable the after we got our first winner
};

const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};