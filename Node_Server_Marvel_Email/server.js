var express = require('express');
var app = express();
// var bodyParser = require('body-parser');

const cors = require('cors')
app.use(cors());

app.use(express.json())
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'content-type');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');next();//Se ocorreu tudo certo aqui, passa pra próxima função (next funciona como um bit de trava para a função ser executada primeiro e evitar o callback)
});

const moduleEmail = require('./app/modules/email/routers/index');

app.use('/apiemail', moduleEmail);

var server = app.listen(3001, ()=> {
	var host = server.address().address
	var port = server.address().port
	console.log("App listening at http://%s:%s", host, port)
})

module.exports = app;