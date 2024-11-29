let uScore=0;
let cScore=0;

const choices= document.querySelectorAll(".choice");

const genCompChoice=() =>{
    const option=["rock","paper","scissors"];
    const ridx=Math.floor(Math.random()*3);
    return option[ridx];
}


const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        //Draw
        alert("Game Draw!!");
}
}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);   
    });
    
});