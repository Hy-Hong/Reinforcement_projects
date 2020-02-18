const dateElement = document.querySelector('#date');
const inuptElement = document.querySelector('#input');
const listElement = document.querySelector('#list');

const icon = "fa-pencil";

const option = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

var addTodoList = [];
var id;
var data = localStorage.getItem("todo");

if(data){
    addTodoList = JSON.parse(data);
    addTodoList.forEach(el => {
        addToDo(el.name, el.id, el.isDone, el.trash);
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

        if(toDo){
            addToDo(toDo);
            addTodoList.push({
                name: toDo,
                id: id,
            });
            id++;
        }
        clearInput(inuptElement);
    }
});

function addToDo(todo, id){
    const item = `
            <li class="item">
                <i class="fa ${icon} co" job="complete" id=${id}></i>
                <p class="text" >${todo} </p>
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