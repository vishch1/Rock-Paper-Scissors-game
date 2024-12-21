let userScore=0;
let compScore=0;
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const youScore=document.querySelector("#user-score");
const notScore=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
   //rock,paper,scissor use math.random()*3(no of value u want)
   const randomIDX=Math.floor(Math.random()*3);
   return options[randomIDX];
}
const drawGame=()=>{
    msg.innerText="Draw Game.Play Again";
    msg.style.backgroundColor="black";
    
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++
        msg.innerText=`You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        youScore.innerText=userScore;
    }
    else{
        compScore++
        msg.innerText=`You lost!!  ${userChoice} beats your ${compChoice}`;
         msg.style.backgroundColor="red";
         notScore.innerText=compScore;
    }

}
const playGame=(userChoice)=>{
    console.log("your choice",userChoice);
    const compChoice=genCompChoice();
    console.log("com choice",compChoice);
    if(userChoice===compChoice){
     drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="scissors"? false:true;
        }
        else{
            userWin =  compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice);
    })
})