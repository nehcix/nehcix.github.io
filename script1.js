var buttonEnter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var buttonDeletes = document.querySelectorAll("li > button");

function reload() {
    li = document.querySelectorAll("li");
    buttonDeletes = document.querySelectorAll("li > button");
}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var buttonDelete = document.createElement("button");
    buttonDelete.className = "delete";
    buttonDelete.textContent = "Delete";
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value + " "));
    li.appendChild(buttonDelete);
    ul.appendChild(li);
    input.value = "";
    reload();
    link();
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

buttonEnter.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


function link() {
    li.forEach(function(element) {
        element.addEventListener("click", function() {
            element.classList.toggle("done");
        });
    });
    buttonDeletes.forEach(function(element) {
        element.addEventListener("click", function() {
            element.parentElement.remove();
        });
    });
}

link();