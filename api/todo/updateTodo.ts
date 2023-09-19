import { todos } from "../../data";
const updateTodo = ({ id, title }: { id: string; title: string }) => {
  console.log(id, title, todos);
  todos.forEach((todo) => {
    if (todo.id === id) {
      todo.title = title;
    }
  });
  return todos.find((res) => res?.id === id);
};

export default updateTodo;
