import http from "http";

const port = 3000;

const server = http.createServer((req, res) => {
  //Função do backend
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
