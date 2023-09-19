import getTodos from "./getTodos";
import getSingleTodo from "./getSingleTodo";
import deleteTodo from "./deleteTodo";
import createTodo from "./createTodo";
import updateTodo from "./updateTodo";

const TodoApi = async (req: Request, url: URL) => {
  const pathname = url.pathname;
  if (pathname === "/todos" && req.method === "GET") {
    return getTodos();
  }
  if (pathname === "/todo" && req.method === "GET") {
    const url = new URL(req.url);
    const params = new URLSearchParams(url.search);
    const id = params.get("id");
    return getSingleTodo(id!);
  }
  if (pathname === "/todo" && req.method === "DELETE") {
    const body = await req.json();
    return deleteTodo(body);
  }

  if (pathname === "/todo" && req.method === "PUT") {
    const body = await req.json();
    return updateTodo(body);
  }

  if (pathname === "/todo" && req.method === "POST") {
    const body = await req.json();
    return createTodo(body);
  }
};

export default TodoApi;
