const loginBox = document.querySelector(".login-box");
const loginForm = loginBox.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const todoBox = document.querySelector(".todo-box");
const todoForm = todoBox.querySelector(".todo-input");
const todoInput = todoForm.querySelector("input");
const listBox = todoBox.querySelector(".list-box ul");
const logoutBtn = todoBox.querySelector(".logout-btn");

const username = localStorage.getItem("username");
const savedTodos = localStorage.getItem(`${username}`);


if(username) {
  todoBox.classList.remove("hidden");
  todoBox.querySelector("h1").innerText = `HELLO ${username}`;
} else {
  loginBox.classList.remove("hidden");
}
let todos = JSON.parse(savedTodos) || [];

// TODOLIST 초기화
todos.forEach(addToDo);

// TODO 추가 함수
function addToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const btn = document.createElement("button");
  btn.innerHTML = "<ion-icon class='del' name='trash'></ion-icon>"
  const del = btn.querySelector(".del");
  del.addEventListener("click", removeToDo);

  li.appendChild(span);
  li.appendChild(btn);
  listBox.appendChild(li);
}

// TODO 제거 함수
function removeToDo(e) {
  const li = e.target.parentElement.parentElement;
  todos = todos.filter((item) => {
    console.log(item.id, parseInt(li.id));
    return item.id !== parseInt(li.id);
  });
  localStorage.setItem(`${username}`, JSON.stringify(todos));
  li.remove();
}


/* 이벤트 리스터 */

// 사용자 이름 입력(로그인)
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);

  location.reload();
});

// TODO 입력
todoForm.addEventListener("submit", e => {
  e.preventDefault();
  const newTodo = {
    id: Date.now(),
    text: todoInput.value
  };
  todoInput.value = "";

  addToDo(newTodo);
  todos.push(newTodo);
  localStorage.setItem(`${username}`, JSON.stringify(todos));
});

logoutBtn.addEventListener("click", e => {
  localStorage.removeItem("username");
  location.reload();
});