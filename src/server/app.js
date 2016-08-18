var express = require('express');

var app = express();

var server = app.listen(3010, () => {
	console.log('listening on localhost://3010');
});
