# Funcionamento

## Aplicação React

Aplicação Web com ReactJS para consumo da API da Marvel, cujo o objetivo é listar, pesquisar, detalhar, selecionar e enviar por e-mail as histórias em quadrinhos. 
Na listagem, é exibido as miniaturas e títulos das histórias clicáveis, onde são direcionados para as suas respectivas urls do site da Marvel. Ao clicar nos detalhes
de cada história, é exibido informações individuais complementares como personagens e criadores.

API - `https://gateway.marvel.com`
DOCUMENTAÇÂO: `https://developer.marvel.com/docs`

####Funcionalidades extra
I- Inclusão de tradução para Inglês, Português e Espanhol.
II- Inclusão de loading próprio com animation SASS
III- Inclusão de Tooltip com animation SASS

No diretório do projeto React, você pode executar:

### `npm start`

## Aplicação Node

Para possibilitar o envio de e-mail em massa, desenvolvi uma aplicação de servidor para gerenciar os disparos SMTP por meio da biblioteca *Nodemailer*. 
O Front-end consome a rota levantada no nosso servidor: `http://localhost:3001/apiemail/send` passando o body com as informações do e-mail receptor (name, recept, title, text).

Em `app/config/credetial` é necessário configurar os parâmetros do e-mail corporativo emissor (email, pass e host) - E-mail, Senha e Domínio, respectivamente.

No diretório do projeto Node, você pode executar:

### `node server.js`
