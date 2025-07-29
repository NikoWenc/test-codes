const container = document.querySelector("#container");
const contentDiv = document.createElement("div");

contentDiv.classList.toggle("content");
contentDiv.textContent = "This is the glorious text-content!";
container.appendChild(contentDiv);

// a <p> with red text that says “Hey I’m red!”
const redPara = document.createElement("p");
redPara.setAttribute("style", "color: red");
redPara.textContent = "Hi I'm Red!";
container.appendChild(redPara);

// an <h3> with blue text that says “I’m a blue h3!”
const newH3 = document.createElement("h3");
newH3.setAttribute("style", "color: blue");
newH3.textContent = `I\’m a blue h3!`;
container.appendChild(newH3);

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
const newH1 = document.createElement("h1");
const blackBorderDiv = document.createElement("div");
blackBorderDiv.setAttribute("style", "border: 1px solid black; background-color: pink");
newH1.textContent = `I\’m in a div`;
blackBorderDiv.appendChild(newH1);

//a <p> that says “ME TOO!”
const meTooPara = document.createElement("p");
meTooPara.textContent = "ME TOO!";
blackBorderDiv.appendChild(meTooPara);
// append to container div
container.appendChild(blackBorderDiv);

const allBtn = document.querySelectorAll(".button");

allBtn.forEach((item) => {
    item.addEventListener("click", (event) => {
        const currentColer = event.target.style.backgroundColor;
        event.target.style.backgroundColor = currentColer === "blue" ? '' : "blue";

    })
})