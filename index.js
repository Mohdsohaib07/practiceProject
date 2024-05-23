
const heads = document.getElementById("heads");
const tails = document.getElementById("tails");
let result = document.getElementById("p");
function toss(){
    heads.classList.remove("ani");
    tails.classList.remove("ani");
   heads.style.zIndex="1";
   tails.style.zIndex = "0";
   setTimeout(()=> {
    let random = Math.floor(Math.random()*2)+1;
    console.log(random);
    if(random==1){  //heads
        tails.style.zIndex = "-1";
        heads.classList.add("ani");
        result.textContent= "it's heads";
        result.style.color= "green";
    }
    else{ //tails
        heads.style.zIndex="-1";
        tails.classList.add("ani");
        result.textContent= "it's Tails";
        result.style.color="blue";
    }
},10);
}