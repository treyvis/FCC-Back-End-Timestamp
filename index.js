const express = require('express');
const moment = require('moment');
const app = express();


app.get('/', (req, res) => {
	console.log('/ Pinged');
	res.send('<h1>Timestamp Microservice</h1>');
});

app.get('/:date', (req, res) => {
	console.log('/:date Pinged');
	const dateString = req.params.date;
	const reg = /^\d+$/;
	if (reg.test(dateString)) {
		res.json({
			unix: moment(dateString, 'X').format('X'),
			natural: moment(dateString, 'X').format('MMMM DD, YYYY')
		});
	} else {
		const momentDate = moment(dateString,['MMMM DD, YYYY', 'DD MMMM YYYY', 'MM-DD-YYYY', 'YYYY-MM-DD']);
		//res.send(momentDate.isValid());
		if(momentDate.isValid()) {
			res.json({
				unix: momentDate.format('X'),
				natural: momentDate.format('MMMM DD, YYYY')
			});
		} else {
			res.json({
				unix: null,
				natural: null
			});
		}
	}
});

app.listen(4040);
console.log('Listening on 4040');