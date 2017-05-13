const visibleTodos = (todos, filter) => {
   switch (filter) {
      case 'SHOW_ALL':
         return todos;
      case 'SHOW_COMPLETED':
         return todos.filter(todo => todo.completed === true)
      case 'SHOW_IN_PROGRESS':
         return todos.filter(todo => todo.completed === false)
      default:
         console.log('not the right filter');
         break;
   }
}
export default visibleTodos;
