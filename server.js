const https = require('https');
const fs = require('fs');

const options = {
	key: fs.readFileSync('./key/server/server-key.pem'),
	ca: [fs.readFileSync('./key/server/server-cert.pem')],
	cert: fs.readFileSync('./key/server/server-cert.pem')
};

https.createServer(options, (req, res) => {
	console.log(req.url);
	if (req.url !== '/favicon.ico') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html><head><meta charset="utf-8"></head></html>');
		res.write('hello https\n');
		res.end('hah');
	}

}).listen(3000, '127.0.0.1', () => console.log('listenning'));
