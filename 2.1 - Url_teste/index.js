import http from 'http'
import url from 'url'

const server = http.createServer((req, res) =>{
    const urlInfo = url.parse(req.url, true)
    const num = ulrInfo.query.num
    let user = {
        nomeUser: nome,
        sobreNomeUser: sobreNome
    }

    console.log(user)


    if(answers["num"] % 2 == 0) {
        console.log(chalk.bgBlue(`${answers["num"]} é um número par`))
    } else {
        console.log(chalk.bgBlue(`${answers["num"]} é um número ímpar`))
    }

    
})