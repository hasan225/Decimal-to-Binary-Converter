
const result=document.querySelector(".result")
const submit=document.querySelector(".btn");

 submit.addEventListener("click",(e)=>{
     e.preventDefault();

     const number =document.querySelector(".number").value;


     if(number === ''){
         alert("Please Enter a Number")
     }
     else if(number < 0){
         alert("Please Enter a valid Number")
     }
     else{
        const binaryNumber =Number(number).toString(2)
         result.textContent=binaryNumber;
         number='';
     }
 })


