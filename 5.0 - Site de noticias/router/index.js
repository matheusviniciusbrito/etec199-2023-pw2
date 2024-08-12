const express = require('express');
const router = express.Router();
const path = require('path');

// Rota principal - Exibir lista de notícias
router.get('/', (req, res) => {
    const noticias = require('../data/noticias.json');
    res.render('index', { noticias: noticias });
});

// Rota para notícias individuais
router.get('/noticia/:id', (req, res) => {
    const noticias = require('../data/noticias.json');
    const noticia = noticias.find(n => n.id == req.params.id);
    if (noticia) {
        res.render('noticia', { noticia: noticia });
    } else {
        res.status(404).send('Notícia não encontrada');
    }
});

// Rota para processar o formulário
router.post('/noticia', (req, res) => {
    const noticiaId = req.body.id;
    res.redirect(`/noticia/${noticiaId}`);
});

module.exports = router;
