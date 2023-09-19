import { todos } from "../../data";
const createTodo = ({ title }: { title: string }) => {
  const id = `${todos.length + 1}`;
  todos.push({ id, title });
  return todos;
};

export default createTodo;
