let boxes = document.querySelectorAll(".box");


let winnerPattern = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

let signX = true;

function checkWinner(box){
    winnerPattern.forEach((pattern)=>{  
        if(boxes[pattern[0]].innerText != ""  && boxes[pattern[1]].innerText != "" && boxes[pattern[2]].innerText!= ""){
            if(boxes[pattern[0]].innerText===boxes[pattern[1]].innerText && boxes[pattern[1]].innerText===boxes[pattern[2]].innerText){
                console.log("Winner");
                boxes.forEach((box)=>{
                    box.disabled = true;
                });
            }
        }
    })
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(signX == true){
            box.innerText = "X";
            signX = false;
        }
        else{
            box.innerText = "0";
            signX = true;
        }
        box.disabled = true;
        checkWinner(box);
    })
})