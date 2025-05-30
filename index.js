import http from "http";
import { v4 } from "uuid";

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
  const { method, url } = req;
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    if (url === "/grades" && method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(grades));
    } else if (url === "/grades" && method === "POST") {
      const { studentName, subject, grade } = JSON.parse(body);
      const newGrade = {
        id: v4(),
        studentName,
        subject,
        grade,
      };
      grades.push(newGrade);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newGrade));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Rota não encontrada" }));
    }
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
