import http from "http";

const port = 3000;
const grades = [
  {
    studentName: "Wagner",
    subject: "Matemática",
    grade: 8.5,
  },
];

const server = http.createServer((req, res) => {
  //Função do backend
  const { method } = req;
  const { url } = req;
  if (url === "/grades" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(grades));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Rota não encontrada" }));
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
