// Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
const ul = document.getElementById("unordered-list");
const input = document.getElementById("item");
const button = document.getElementById("button");


// Create a function that will run in response to the button being clicked
button.addEventListener("click", () =>{
    if (input.value == '') return;
    const inputItem = input.value;
    const newList = document.createElement("li");
    const newSpan = document.createElement("span");
    const newButton = document.createElement("button");

    input.value = "";
    input.focus();

    newList.appendChild(newSpan);
    newList.appendChild(newButton);

    newSpan.textContent = inputItem;
    newButton.textContent = "Delete";
    ul.appendChild(newList);

    newButton.addEventListener("click", () => {
    ul.removeChild(newList);
});
});


