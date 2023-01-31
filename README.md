
# Wonder


## Introdução

Este projeto foi desenvolvido como trabalho de conclusão de curso e consiste em uma solução para conectar pessoas com interesses semelhantes ou diferentes e fomentar a comunicação e a interação social. Ele é construído com **React Native**, **NodeJS** e **SQLite**, garantindo uma excelente experiência para o usuário. Pode ser considerado como uma alternativa a uma rede social.

## Instalação

### Para executar o projeto é necessário antes instalar as dependências pelo terminal com o seguinte comando:

`npm install`

O comando acima deve ser executado uma vez no diretório **"/mobile/"** e uma vez no diretório **"/backend/"**.

Uma vez feito isso é preciso executar tanto o **backend** quanto a **aplicação mobile** com o comando:

`npm start`

> Obs: Necessário alterar a URL local da API no arquivo **"/mobile/src/services/api.js"**

## Tecnologias

### Linguagem

- Javascript

### Framework, Bibliotecas e outras

- **React Native**
- **NodeJS**
- **SQLite3**
-  **Bcrypt**
   - Para a criptográfia de senhas, documentação: [link](https://github.com/kelektiv/node.bcrypt.js#readme)
-  **Celebrate**
   - Middleware para validações, documentação: [link](https://github.com/arb/celebrate#readme)
- **Express.js**
   - Framework para criar rotas, manipular requisições HTTP e gerenciar respostas, documentação: [link](https://expressjs.com/)
-  JWT
   - Para autenticação, documentação: [link](https://github.com/auth0/node-jsonwebtoken#readme)
- Knex.js
	 - Query Builder para agilizar a construção e consultas do banco de dados, documentação: [link](https://knexjs.org/guide/)
