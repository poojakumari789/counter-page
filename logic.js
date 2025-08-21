let modebtn=document.querySelector("#mode")
let body=document.querySelector("body")
let increase=document.querySelector("#inc")
let decrease=document.querySelector("#dec")
let reset=document.querySelector("#reset")
let value=document.querySelector("#value")

let currmode="light";
modebtn.addEventListener("click",()=>{
if(currmode==="light"){
 currmode="dark";
 body.classList.add("dark")
 body.classList.remove("light")
}
else{
    currmode="light";
    body.classList.add("light");
    body.classList.remove("dark")
}
console.log(currmode);    
});
// for value color
let currvalue=0;
 function display(){ 
value.innerText=currvalue;
if(currvalue>0){
    value.style.color="green";
    value.innerText=currvalue+"😊😍";
    }
    else if(currvalue<0){
    value.style.color="red";
    value.innerText = currvalue+"😒😥";
    }   
 else{
    value.style.color="orange"; 
    value.innerText=currvalue+"🤔😐";   
 }
}


increase.addEventListener("click",()=>{
 currvalue++;
 display();
});

decrease.addEventListener("click",()=>{
 currvalue--;
 display();
});

reset.addEventListener("click",()=>{
 currvalue=0;
 display();
});
