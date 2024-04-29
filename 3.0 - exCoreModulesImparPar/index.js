const http = require("http");
const url = require("url");
const fs = require("fs");

const port = 5500;

const server = http.createServer((req, res) => {
    const urlInfo = url.parse(req.url, true);
    const num = urlInfo.query.num;

    if (!num) {
        /* 3º objetivo atendido: "realizar a leitura de arquivo externo;"
        O servidor lê o arquivo index.html usando fs.readFile sempre que uma requisição GET sem o parâmetro num é recebida
        */
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end("Erro ao carregar a página");
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else {
        const numNewLine = `O número ${num} é ${num % 2 === 0 ? "par" : "ímpar"}\r\n`;

        fs.appendFile("respostas.txt", numNewLine, err => {
            if (err) {
                res.writeHead(500);
                return res.end("Erro ao escrever no arquivo");
            }

            fs.readFile('index.html', (err, data) => {
                if (err) {
                    res.writeHead(500);
                    return res.end("Erro ao carregar a página");
                }
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.write("<h1>A resposta foi adicionada ao arquivo respostas.txt, verifique o arquivo em sua máquina</h1>");
                res.end();
            });
        });
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
