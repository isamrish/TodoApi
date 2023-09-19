import { todos } from "../../data";
const getTodos = (id: string) => {
  const todo = todos.find((res) => res.id === id);
  return todo;
};

export default getTodos;
