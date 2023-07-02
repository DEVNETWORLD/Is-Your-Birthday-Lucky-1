const dateofbirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton =  document.querySelector("#check-number");
const outputBox = document.querySelector("#output");
console.log(checkButton)




function comparevalues(sum, luckyNumber){
  if (sum%luckyNumber===0){
    outputBox.innerText="Your Birthday is Lucky!🥳";
  }
  else{
    outputBox.innerText="Not so Lucky Day!🙁";
  }
}
function performCalculation(){
  

    const date = dateofbirth.value;
  const sum = calculateSum(date);
  comparevalues(sum, luckyNumber.value);

}
function calculateSum(date)
{
    
     date = date.replaceAll("-","");
  let sum = 0;
    for(let i=0;i<date.length;i++){
        sum = sum + Number(date.charAt(i));
}
  return sum;
}
   
   


/*function displayMessage(message) {
    outputBox.innerText = message;
    console.log("Clicked");
    console.log(dateofbirth.value);
    console.log(luckyNumber.value);
    console.log(typeof (dateofbirth.value));
}*/

checkButton.addEventListener("click", performCalculation);