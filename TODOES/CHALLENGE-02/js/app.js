const dateElement = document.querySelector('#date');

const option = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
dateElement.innerHTML = new Date().toLocaleDateString('en-US', option);

const inuptElement = document.querySelector('#input');
const listElement = document.querySelector('#list');

document.addEventListener('keyup', e => {
    if(e.key === "Enter"){
        const toDo = inuptElement.value;

        if(toDo){
            addToDo(toDo);
        }

        inuptElement.value = "";
    }
});

function addToDo(todo){
    const item = `
            <li class="item">
                <i class="fa fa-circle-thin co" job="complete"></i>
                <p class="text" >${todo}</p>
                <i class="fa fa-trash-o de" job="delete"></i>
            </li>
        `;
    listElement.insertAdjacentHTML('beforeend', item);
}


localStorage.setItem('FirstName', 'Hy');