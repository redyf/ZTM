var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var remove = document.querySelectorAll("remove");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
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

function toggleDone() {
  li.classList.toggle("done");
}

function deleteListElement(evt) {
  evt.removeChild();
  ul.removeChild(li);
}

li.addEventListener("click", toggleDone);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
remove.addEventListener("click", deleteListElement);