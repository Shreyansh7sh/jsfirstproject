let count=0; 
 let peopleEntered = document.getElementById("h2");
let saveEl = document.getElementById("eneteries");
 function incrementfnct(){
 count = count+1;
 peopleEntered.innerText=count;
}
function savefnct(){
let str = count + "-";
saveEl.innerText+=str;
count=0;
peopleEntered.innerText=0;
}
