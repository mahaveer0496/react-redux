const visibleTodos = (todos, filter) => {
   let newTodos = todos;
   switch (filter) {
      case 'SHOW_All':
         newTodos = todos;
         break;
      case 'SHOW_COMPLETED':
         newTodos = todos.filter(todo => todo.completed === true)
         break;
      case 'SHOW_IN_PROGRESS':
         newTodos = todos.filter(todo => todo.completed === false)
         break;
      default:
         console.log('not the right filter');
         break;
   }
   return newTodos;
}

export default visibleTodos;
