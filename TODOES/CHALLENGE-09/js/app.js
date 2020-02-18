const dateElement = document.querySelector('#date');

const option = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};


const inuptElement = document.querySelector('#input');
const listElement = document.querySelector('#list');

const check = "fa-check-circle";
const uncheck = "fa-circle-thin";
const line = "lineThrough";

var addTodoList = [];
var id;
var data = localStorage.getItem("todo");

if(data){
    addTodoList = JSON.parse(data);
    addTodoList.forEach(el => {
        addToDo(el.name, el.time, el.id, el.isDone, el.trash);
        console.log(el);
    });
}else{
    id = 0;
    addTodoList = [];
}

let time = new Date();
dateElement.innerHTML = time.toLocaleDateString('en-US', option);

document.addEventListener('keyup', event => {
    const toDo = inuptElement.value;
    if(event.key === "Enter"){

        const timer = time.getMinutes() + ":" + time.getSeconds();
        if(toDo){
            addToDo(toDo, timer);
            addTodoList.push({
                name: toDo,
                time: timer,
                id: id,
                isDone: false,
                trash: false,
            });
            id++;
            localStorage.setItem("todo", JSON.stringify(addTodoList));
        }
        clearInput(inuptElement);
    }
});

function addToDo(todo, timer, id, isDone, trash){
    const isCheck = isDone ? check : uncheck;
    const isLine = isDone ? line : "";
    if(trash) {return};
    const item = `
            <li class="item">
                <i class="fa ${isCheck} co" job="complete" id=${id}></i>
                <p class="text ${isLine}" >${todo} ${timer}</p>
                <i class="fa fa-trash-o de" job="delete" id=${id}></i>
            </li>
        `;
    listElement.insertAdjacentHTML('beforeend', item);
}

function clearInput(input){
    input.value = "";
}

// document.addEventListener('click', event =>{
//     const element = event.target;
//     const elementJob  = element.attributes.job.value;
//     if(elementJob === "complete"){

//     }else if(elementJob === "delete"){
//         listElement.removeChild(element.parentNode);
//         addTodoList[element.id].trash = true;
//     }
//     localStorage.setItem("todo", JSON.stringify(addTodoList));
// });