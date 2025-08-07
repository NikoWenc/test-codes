let userNum = parseInt(prompt("Enter a number for FizzBuzz: "));
let answers = [];

for (let x = 0; x <= userNum; x++){

    if (x % 3 === 0 && x % 5 === 0 ){
        answers[x] = " FizzBuzz ";
    }
    else if (x % 5 === 0){
        answers[x] = " Buzz ";
    }
    else if (x % 3 === 0 ){
        answers[x] = " Fizz ";
    }
    else {
        answers[x] = x;
    }

    if (x == userNum){
        console.log(answers);
    }
}


// function add7(numForAdd){
//     return numForAdd + 7;
// }

// function multiply(num1ForMultiply, num2ForMultiply){
//     num1ForMultiply = prompt("Enter first Number:");
//     num2ForMultiply = prompt("Enter second Number:");
//     return alert(num1ForMultiply * num2ForMultiply);
// }

// function capitalize(){
//     let newWord = prompt("Enter a sting:");
//     return alert(newWord.slice(0,1).toUpperCase() + newWord.slice(1));
// }               //return first letter only --     //return all characters starting at index[1]

// function lastletter(){
//     let newWord = prompt("Enter a sting:");
//     document.getElementById("text").innerHTML = newWord.slice(-1);
// }

// ----------------------------------------------------------------------------------
// simple user / password checker

// let userName = prompt("Please Enter your name:");

// if (userName === "Admin" || userName === "admin") {
//     adminPassword = prompt("Enter Password:");
//     if (adminPassword == "TheMaster"){
//         alert("Welcome Master");
//     }else if (adminPassword === null || adminPassword === ""){
//         alert("Cancelled");
//     }else {
//         alert("Wrong Password");
//     }
// }else if (userName === null){
//     alert("Cancelled");
// }else {
//     alert("I don't know you!");
// }
// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------
// to check if input text is in the array |~ un-comment the <input> & <p> tag before running ~|

// let a = ['apple', 'orange', 'watermelon'];
// let input = document.getElementById("text");
// let output = document.getElementById("test");

// input.addEventListener("input", function(){
//     for(let x of a){
//         if (x === input.value){
//             output.innerText = x;
//             return;
//         } else if (input.value === ""){
//             output.innerText = "";
//         }else {
//             output.innerText = "Not found"; 
//         }
//     }
    
// })
// ----------------------------------------------------------------------------------
