import { ToDoList } from "./Todo";

const todoList = new ToDoList();

document.addEventListener('DOMContentLoaded', () => {
    todoList.loadFromLocalStorage(); // Ladda todos från LocalStorage när sidan laddas
    renderTodoList(); // Rendera todo-listan med de laddade todosen
    const form = document.getElementById('form')! as HTMLFormElement;
    form.addEventListener('submit', (event) => {
        event.preventDefault(); //stoppa den vanliga användningen av submit
        addTodo();
    })
});

function addTodo(): void {
    const taskInput = document.getElementById('task') as HTMLInputElement;
    const priorityInput = document.getElementById('priority') as HTMLInputElement;

    const task = taskInput.value;
    const priority = priorityInput.value;
    const priorityNum = parseInt(priority);

    if (task && priorityNum) {
        todoList.addTodo(task, priorityNum);
        taskInput.value = "";
        priorityInput.value = "";
        renderTodoList();
    }
};

function renderTodoList(): void {
    
    const todos = todoList.getTodos(); //hämtar arrayen med todos från Todo.ts
    console.log(todos); // visar todoList i konsolen
    console.log("Antal todos: " + todos.length);
    const todolistEl = document.getElementById('todo-list') as HTMLUListElement;

    if (todolistEl) {
        todolistEl.innerHTML = ''; //rensa listan
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${todo.task}`;
            li.classList.add(`prio${todo.priority}`);


            if (todo.completed === true) {
                li.classList.add("completed");
            }

            const deleteSpan = document.createElement('span');
            deleteSpan.innerHTML = `<i class="fa-solid fa-check"></i>`;
            deleteSpan.className = 'complete-button';
            deleteSpan.addEventListener('click', () => completeTodo(index));
            li.appendChild(deleteSpan);

            todolistEl.appendChild(li);
        });
    }
};

function completeTodo(index: number): void {
    todoList.markTodoCompleted(index);
    renderTodoList();
}

