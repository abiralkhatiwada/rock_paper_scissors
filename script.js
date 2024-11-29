let uScore=0;
let cScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScore=document.querySelector("#user-score");
const CompScore=document.querySelector("#comp-score");

const display=document.querySelector("#choices");

const genCompChoice=() =>{
    const option=["rock","paper","scissor"];
    const ridx=Math.floor(Math.random()*3);
    return option[ridx];
}


const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    let userWin=false;
    if(userChoice===compChoice){
        //Draw
        display.innerText = `Your choice: ${userChoice} & Bot choice: ${compChoice}`;
        msg.innerText="Game draw!";
        msg.style.backgroundColor="rgb(56, 23, 87)"; 
    }
    else{
        if(compChoice==="rock"&&userChoice==="paper"){
            userWin=true;
        }
        else if(compChoice==="paper"&&userChoice==="rock")
            userWin=false;

        else if(compChoice==="rock"&&userChoice==="paper")
            userWin=true;
   
        else if(compChoice==="scissor"&&userChoice==="rock")
            userWin=true;
       
        else if(compChoice==="rock"&&userChoice==="scissor")
             userWin=false;
        
        else if(compChoice==="paper"&&userChoice==="scissor")
            userWin=true;
        
        else if(compChoice==="scissor"&&userChoice==="paper")
            userWin=false;

        showWinner(userWin, userChoice,compChoice);
    }

}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);   
    });
    
});


const showWinner=(userWin, userChoice, compChoice) =>{
    if(userWin){
        display.innerText = `Your choice: ${userChoice} & Bot choice: ${compChoice}`;
        msg.innerText="You Win!!. Play more";
        msg.style.backgroundColor="green";  
        uScore++;
        userScore.innerText=uScore;
    }
    else{
        display.innerText = `Your choice: ${userChoice} & Bot choice: ${compChoice}`;
        msg.innerText="You Lost! Try again."
        msg.style.backgroundColor="red";
        cScore++;
        CompScore.innerText=cScore;
    }
       
}