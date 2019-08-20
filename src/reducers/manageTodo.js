export default function manageTodo(state = {
  todos: [],
}, action) {

  console.log("reducer received this action:", action)
  
  if (action.type === "ADD_TODO")
    return {
      todos: [...state.todos, action.todo]
    }
  else
    return state;
}
