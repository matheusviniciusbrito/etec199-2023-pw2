import http from 'http'
import url from 'url'

const server = http.createServer((req, res) =>{
    const urlInfo = url.parse(req.url, true)
    const nome = ulrInfo.query.nome
    const sobreNome = urlInfo.query.sobreNome
    let user = {
        nomeUser: nome,
        sobreNomeUser: sobreNome
    }

    console.log(user)

    
})