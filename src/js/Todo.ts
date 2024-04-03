import { iTodo } from "./iTodo";

export class ToDoList implements iTodo {

    task?: string;
    completed?: boolean;
    priority?: number; //1, 2, eller 3

    constructor(task?: string, priority?: number) {
        this.task = task;
        this.completed = false;
        this.priority = priority;
    }

    private todos: ToDoList[] = []; //en array av todo-objekt

    /* Metod för att lägga till todo med prioritet */
    public addTodo(task: string, priority: number): boolean {
        if (task != "" && (priority == 1 || priority == 2 || priority == 3)) {
            const newTodo = new ToDoList(task, priority);
            this.todos.push(newTodo);
            this.saveToLocalStorage(this.todos);
            return true;
        } else {
            return false;
        }
    }

    /* metod för att markera todos som klara */
    public markTodoCompleted(todoIndex: number): void {
        if (this.todos[todoIndex].completed === true) {
            this.todos[todoIndex].completed = false;
        } else {
            this.todos[todoIndex].completed = true;
        }

        this.saveToLocalStorage(this.todos);
    }

    /* metod för att hämta listan med todos */
    public getTodos(): ToDoList[] {
        return this.todos; // Returnera hela todos-arrayen
    }

    /* metod för att spara todos till LocalStorage */
    public saveToLocalStorage(todolist: ToDoList[]): void {
        localStorage.setItem('todolist', JSON.stringify(todolist)); // Sparar hela arrayen till localStorage

    }

    /* metod för att hämta todos från LocalStorage */
    public loadFromLocalStorage(): void {
        const storedTodos = localStorage.getItem('todolist'); // Hämta todos från localStorage 
        if (storedTodos) {
            this.todos = JSON.parse(storedTodos);
        } else {
            console.log("Inga todos hittades i localStorage.");
        }
    }
}
