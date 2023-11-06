import { Chance } from "chance";
import { todos } from "../../data";

const chance = new Chance();

const createTodo = ({ title }: { title: string }) => {
  const id = `${chance.string({ length: 8, alpha: true, numeric: true })}-${
    todos.length + 1
  }`;
  todos.push({ id, title });
  return todos;
};

export default createTodo;
