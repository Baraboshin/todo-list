export namespace Todo {
  export interface ITodo {
    id: number | Date,
    completed: boolean,
    title: string,
  }

  export type ContextType = {
    removeTodo: (id: number | Date) => void
    markTodoOnEdit: (todo: Todo.ITodo) => void
  }
}
