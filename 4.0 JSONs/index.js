const http = require("http")
const fs = require("fs")

const port = 5500

const server = http.createServer((req, res) => {
    fs.readFile('servicos.txt', 'utf8', (err, data) => {
        //Eu utilizei utf-8 para os caracteres especiais nao bugarem com a decodificação padrão, Requeijão antigamente estava ficando como RequeijÃ£o
        if (err) {
            res.writeHead(500);
            return res.end("Erro ao carregar a página");
        }
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" }); 
        res.end(data);
    })
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
});