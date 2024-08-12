const express = require('express');
const path = require('path');
const { create } = require('express-handlebars');
const app = express();
const port = 3000;

// Configurar Handlebars como motor de templates sem layout padrão
const hbs = create({ extname: '.hbs', defaultLayout: false });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para processar dados do formulário
app.use(express.urlencoded({ extended: true }));

// Usar as rotas definidas em router/index.js
const indexRouter = require('./router/index.js');
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
