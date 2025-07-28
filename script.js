let hsc=0;
let csc=0;
const butn = document.querySelector("#play");
butn.addEventListener("click", play);

const rockbtn= document.querySelector("#rock");
rockbtn.addEventListener("click", rock)
const paperbtn= document.querySelector("#paper");
paperbtn.addEventListener("click", paper)
const scissorbtn= document.querySelector("#scissor");
scissorbtn.addEventListener("click", scissor)
/*play(genresp(),humresp());*/

function play(h){
    let c=genresp();
    console.log(c,h);
    let res=document.querySelector("#result");
    if (h==c){
        res.textContent=("draw");
    }
    else if ((h=="rock" && c=="scissor") || (h=="paper" && c=="rock") || (h=="scissor" && c=="paper")){
        res.textContent=("You win!!  " + `${h} beats ${c}`);
        hsc++;
    }
    else if ((c=="rock" && h=="scissor") || (c=="paper" && h=="rock") || (c=="scissor" && h=="paper")){
        res.textContent=("Computer wins!!   " + `${h} loses to ${c}`);
        csc++;
    }
    else{
        res.textContent=("smthn aint ryt");
    }
    console.log("You: " + hsc );
    console.log("Computer: " + csc );
    document.querySelector("#score").textContent = `You: ${hsc} | Computer: ${csc}`;

}


function genresp(){
    let x=Math.floor(Math.random()*30);
    if (x<10){
        alert("rock");
        return("rock");
        }
    else if (x<20){
        alert("paper");
        return("paper");
    }
    else if (x<30){
        alert("scissor");
        return("scissor");
    }
    else{
        return("smthn broke");
    }
}


function rock(){
    play("rock");
    console.log("rock");
}
function paper(){
    play("paper");
}
function scissor(){
    play("scissor");
}
