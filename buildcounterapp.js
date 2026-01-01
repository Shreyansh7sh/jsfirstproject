let count=0; 
 let peopleEntered = document.getElementById("h2")
 function incrementfnct(){
 count = count+1;
 peopleEntered.innerText=count;
}
function savefnct(){
console.log("total number of people entered are : "+ count);
}
savefnct();
