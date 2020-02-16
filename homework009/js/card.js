const InputOfHtml = document.querySelector('#inputId');
const ListAddCard = document.querySelector('#cardId');

let todoItems = [];
let id = 0;
// get value from local storage
let data = localStorage.getItem("todoItems");
if (data) {
  todoItems = JSON.parse(data);
  id = todoItems.length;
  UpdateOfList();
}

document.addEventListener("keyup", event => {
  if (event.code === "Enter") {
    const inputValue = InputOfHtml.value;
    if (inputValue != "") {
      addValue(inputValue);
      ClearOfInput();
      getOfAllColors();
    }
  }
});

function ClearOfInput() {
  InputOfHtml.value = "";
}

function addValue(todoName) {
  todoItems.push({
    name: todoName,
    id: id,
    done: false
  });
  UpdateOfList();
}

function UpdateOfList() {
  let result = "";
  for (let item of todoItems) {
    result += `
    <div class="col-3">
        <h1>${item.name}</h1>
        <button class="buttonCard"> Card </button>
    </div>`;
    ListAddCard.innerHTML = result;
  }
}

const Element_Add = document.querySelector('#buttonId')
  .addEventListener('click', function () {
    const inputValue = InputOfHtml.value;
    if (inputValue != "") {
      addValue(inputValue);
      // add clear data from browser
      ClearOfInput();
      // add represt Colors from function
      getOfAllColors();
    }
  });

function getOfAllColors() {
  const listOfColors = ["#7b1fa2", "#1e88e5", "#c2185b", "#00897b", "#039be5", "#ffd0a8"];
  var randomOfColors = listOfColors[Math.floor(Math.random() * listOfColors.length)];
  document.body.style.background = randomOfColors;
} 