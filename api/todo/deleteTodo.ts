import { todos } from "../../data";
const deleteTodo = ({ id }: { id: string }) => {
  return todos.splice(+id - 1, 1);
};

export default deleteTodo;
