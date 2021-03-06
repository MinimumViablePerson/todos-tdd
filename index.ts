type Todo = {
  id: number
  title: string
  completed: boolean
}

export function addTodo (todos: Todo[], title: string) {
  const newTodo: Todo = {
    id: todos.length + 1,
    title: title,
    completed: false
  }
  return [...todos, newTodo]
}

export function removeTodo (todos: Todo[], id: number) {
  return todos.filter(todo => todo.id !== id)
}

export function toggleTodo (todos: Todo[], id: number) {
  // make a copy of todos
  const todosCopy: Todo[] = JSON.parse(JSON.stringify(todos))

  // toggle the one that matches id
  const match = todosCopy.find(todo => todo.id === id)
  if (match) {
    match.completed = !match.completed
  }

  return todosCopy
}

export function editTitle (todos: Todo[], id: number, title: string) {
  // make a copy of todos
  const todosCopy: Todo[] = JSON.parse(JSON.stringify(todos))

  // toggle the one that matches id
  const match = todosCopy.find(todo => todo.id === id)
  if (match) {
    match.title = title
  }

  return todosCopy
}

let todos: Todo[] = [
  {
    id: 1,
    title: 'Buy milk',
    completed: false
  },
  {
    id: 2,
    title: 'Cook dinner',
    completed: false
  }
]

todos = addTodo(todos, 'Learn TDD')
todos = addTodo(todos, 'Learn unit testing')
todos = removeTodo(todos, 1)
todos = editTitle(todos, 2, 'Sleep well')
todos = toggleTodo(todos, 2)

console.log(todos)
