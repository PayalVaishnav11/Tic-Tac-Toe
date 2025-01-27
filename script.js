let boxes = document.querySelectorAll('.box')
let resetBtn = document.querySelector('#reset-btn')
let winMesg = document.querySelector('.winMesg');

let newGameBtn = document.querySelector('#new-game')

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


//playerX , player0
let turnX = true;


const disabledBoxes = ()=>{
     for (const box of boxes) {
          box.disabled = true;
     }
}
const enabledBoxes = ()=>{
     for (const box of boxes) {
          box.disabled = false;
     }
}

const resetGame = ()=>{
     turnX = true;
     enabledBoxes();
     for (const box of boxes) {
          box.innerText = "";
     }
     winMesg.style.display = "none";
}
function checkDraw() {
//      .every(callback):
//      This method checks if all elements in an array satisfy a condition.
     const allFilled = [...boxes].every(box => box.innerText !== "");
//   If all boxes are filled, the every method will return true.
//   If even one box is empty, it will return false.
     if (allFilled) {
         winMesg.style.display = "block";
         winMesg.innerHTML = "It's a Draw!";
     }
 }
 

function checkWin(){
   for (const patterns of winPatterns) {
        console.log(patterns[0],patterns[1],patterns[2]);
        console.log(boxes[patterns[0]].innerText);
        
           let posVal1=  boxes[patterns[0]].innerText;
           let posVal2 = boxes[patterns[1]].innerText;
           let posVal3 = boxes[patterns[2]].innerText ;

           if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
               if(posVal1 === posVal2 && posVal2 === posVal3){
                    winMesg.style.display = "block";
                    if(posVal1 === "X"){
                         winMesg.innerHTML = "Congratulations ,Winner is X";
                         disabledBoxes();
                    }
                    else{
                          winMesg.innerHTML = "Congratulations ,Winner is O";
                          disabledBoxes();
                    }
               }
           }

   }
}

boxes.forEach( (box ) => {
     box.addEventListener('click' , (e)=>{   //e is a click event 
          if(turnX){
               box.innerText= 'X';
               turnX = false;
          }
          else{
               box.innerText = 'O';
               turnX = true;
          }
        box.disabled = true;
        checkWin();
        checkDraw();
     })

})

newGameBtn.addEventListener("click",()=>{
     resetGame();
})
resetBtn.addEventListener("click",()=>{
     resetGame();
})
