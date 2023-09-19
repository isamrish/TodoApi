import serverConfig from "./api";
const server = Bun.serve(serverConfig);
console.log(`Server is running at http://localhost:${server.port}`);
