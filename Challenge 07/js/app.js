const DATE_HTML = document.querySelector("#date");
const LIST_HTML = document.querySelector("#list");
const INPUT_HTML = document.querySelector("#input");

const CHECK_STYLE = "fa-check-circle";
const UNCHECK_STYLE = "fa-circle-thin";
const LINE_THOUGH_STYLE = "lineThrough";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
const today = new Date();
DATE_HTML.innerHTML = today.toLocaleString("en-US", options);

let todoItems = [];
let id = 0;


document.addEventListener("keyup", event => {
	if (event.code === "Enter") {
    const inputValue = INPUT_HTML.value;

    if (inputValue != null) {
      // 1. add the todo
      addTodo(inputValue)
      // 2.  Clear input
      clearInput();
    }
  }
});

function clearInput() {
	INPUT_HTML.value = "";
}

function addTodo(todoName) {
	todoItems.push({name: todoName, id : id, done: true});
  updateList();
}

function updateList() {
  let code = "";
  for(let item of todoItems) {
	// TODO
    code += `<li class="item">
        <i class="fa ${item.done ? CHECK_STYLE : UNCHECK_STYLE} co" job="complete" id="${item.id}"></i>
        <p class="text ${item.done ? LINE_THOUGH_STYLE : ""}">${item.name}</p>
        <i class="fa fa-trash-o de" job="delete" id="${item.id}"></i>
    </li>`;
  // TODO: display to html
    LIST_HTML.innerHTML = code; 
  }
}