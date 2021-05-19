
function randomcondition(){
    var ramdomno =Math.floor(Math.random() * 10);
   
    var guessinput = document.getElementById("guessno").value;
    var displayGuess = document.getElementById("guessdisplay");
    var DisplayRandom = document.getElementById("showgrandom");
    var message1 = document.getElementById("message");
    var message2 = document.getElementById("message1");
    if(ramdomno == guessinput)
    {
        
        message1.textContent = " Yes You Won !!!"
        message.style.background = "Green";
        message1.style.color= "white";
        message1.style.padding = "5px";


    }
    else{
        
        message2.textContent = " Try Again !!!"
        message2.style.color= "red";
        message2.style.padding = "5px";
    }
    displayGuess.textContent = guessinput;
    DisplayRandom.textContent = ramdomno;
    
    
}