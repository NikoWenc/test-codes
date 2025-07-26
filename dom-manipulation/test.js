
let userInput = prompt("Calculator");

function calculator(input){
    return alert(eval(input));
    // eval is not safe to use
    // install mathjs for safety measures
    // can be "return alert(math.evaluate(input))"
}

calculator(userInput);