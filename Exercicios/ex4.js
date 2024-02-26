import inquirer from "inquirer"

/* Escreva um programa que repita a leitura de uma senha até que ela seja válida. 
Para cada leitura de senha incorreta informada, escrever a mensagem "Senha Invalida". 
Quando a senha for informada corretamente deve ser impressa a mensagem "Acesso Permitido" e o algoritmo encerrado. 
Considere que a senha correta é o valor 2002. */

var senha = 0;

while(senha != 2002) {
    inquirer
    .prompt([
        {
            message: "Informe a senha", 
            name: "nsenha"
        }
    ])
    .then((answers) => {
        senha = answers["nsenha"];
        if(senha == 2002) {
            console.log("Senha correta!");
        }
    .catch((error) => {
        console.log(error);
    });
}