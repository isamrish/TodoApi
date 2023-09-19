import TodoApi from "./todo";
const serverConfig = {
  port: 3000,
  async fetch(req: Request) {
    const url = new URL(req.url);
    if (url.pathname.includes("/todo")) {
      const result = await TodoApi(req, url);
      return Response.json(result);
    }
    return new Response();
  },
};

export default serverConfig;
