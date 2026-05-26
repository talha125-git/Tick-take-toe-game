/* let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;          // playerX , playerO 

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

boxes.forEach((box) => {
 box.addEventListener("click", () => {
    
    if (turnO){     //player O
        box.innerHTML = "O";
        turnO = false;
    } else {        //player X
        box.innerHTML = "X";
        turnO = true;
    }
    box.disabled = true;  // when click on same button value not be change 

    checkWinner();
 });
});

  const resetGame = () => {
    turnO = true;
    enablebleboxes();
    msgContainer.classList.add("hide");
  };
  
  const disableboxes = () => {         // for not clicking box once win
    for (let box of boxes) {
        box.disabled = true;
    }
  };
  const enablebleboxes = () => {        
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
  };

  const showWinner = (winner) => {
   msg.innerHTML = `Congratulation, Winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableboxes();
  }; 

 const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val){
              
                showWinner(pos1val);
            }
        }
    }
 };

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);  */



// same code with draw option 
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;          // playerX , playerO 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {     //player O
            box.innerHTML = "O";
            turnO = false;
        } else {        //player X
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;  // when click on same button value not be change 

        checkWinner();
    });
});

const resetGame = () => {
    turnO = true;
    enablebleboxes();
    msgContainer.classList.add("hide");
};

const disableboxes = () => {         // for not clicking box once win
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enablebleboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
};

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const showDraw = () => {
    msg.innerHTML = "It's a Draw!";
    msgContainer.classList.remove("hide");
    disableboxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return; // Stop further checking if we have a winner
            }
        }
    }
    checkDraw(); // Check for a draw if no winner is found
};

const checkDraw = () => {
    let isDraw = true;
    for (let box of boxes) {
        if (box.innerHTML === "") {
            isDraw = false;
            break;
        }
    }
    if (isDraw) {
        showDraw();
    }
};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
