let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = false;
let count = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () => {
    turnO = false;
    enableBtns();
    msgContainer.classList.add("hide");
    count = 0;
    
}
const startGame = () => {
    resetGame();
    newGameBtn.classList.add("hide");
    resetBtn.classList.remove("hide");
    count = 0;
}
boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        console.log("box clicked");
        if(turnO){
            box.innerText = 'O';
            turnO = false;
        }
        else{
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
        
    })
})
const enableBtns = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const disableBtns = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
    resetBtn.classList.remove("hide");
    count = 0;
} 
const showDraw = () =>{
    msg.innerText = `Game is a draw`;
    msgContainer.classList.remove("hide");
    disableBtns();

    count = 0;
}  
const checkWinner = () =>{
    for(let pattern of winPatterns){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1 === posval2 && posval2 === posval3){
                console.log("Winner");
                showWinner(posval1);
            }
            else{
                if(count === 9){
                    showDraw();
                }
            }
        }
    }
}
newGameBtn.addEventListener("click" , startGame);
resetBtn.addEventListener("click" , resetGame);
