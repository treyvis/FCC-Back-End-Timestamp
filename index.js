const express = require('express');
const moment = require('moment');
const app = express();


app.get('/', (req, res) => {
	console.log('server pinged');
	res.send('you found me');
});

app.get('/:date', (req, res) => {
	res.send(req.params.date);
	if (+req.params.date) {
		res.send(moment(req.params.date, 'X'));
	}
});

app.listen(4040);
console.log('pulling express');