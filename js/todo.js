const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    // html ul태그 아래에 넣을 li, span 태그 생성하기 위함
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    // span태그에 새로운 todo리스트 넣기(.innerText)
    span.innerText = newTodo.text;

    // todo 항목을 삭제하기 위한 button 생성
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    // li태그 안에 span 넣기
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}



function handleToDoSubmit(event) {
    event.preventDefault()
    // 새로고침 전 값 저장
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // forEach : array의 각 item에 대해 function을 실행하게 해준댜.
    // parsedToDos.forEach(sayHello);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


// 1. 사용자가 form을 submit하면
// 2. input을 비우고
// 3. 그 텍스트를 toDos array에 push하고
// 4. 화면에 toDo 그려주기
// 5. toDo들을 저장하기