import { ToDoList } from "./Todo";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')! as HTMLFormElement;
    form.addEventListener('submit', (event) => {
        event.preventDefault(); //stoppa den vanliga användningen av submit
        addTodo();
    })
});

function addTodo(): void {
    const
}