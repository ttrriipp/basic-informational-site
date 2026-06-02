import http from "node:http";
import fs from "node:fs";

const server = http.createServer();

const page404 = fs.readFileSync("404.html", "utf-8", (err, data) => {
  if (err) throw err;
  return data;
});

server.on("request", (request, res) => {
  let filePath = "";
  if (request.url === "/") {
    filePath = "./index.html";
  } else {
    filePath = `./${request.url}.html`;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(page404);
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(8000, () => {
  console.log(`server now running`);
});
