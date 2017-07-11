const express = require('express');
const app = express();

app.get('/', (req, res) => {
	console.log('server pinged');
	res.send('you found me');
});

app.listen(4040);
console.log('pulling express');