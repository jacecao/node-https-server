const https = require('https');
const fs = require('fs');

const options = {
	hostname: '127.0.0.1',
	port: 3000,
	path: '/',
	method: 'GET',
	key: fs.readFileSync('./key/client/client-key.pem'),
	cert: fs.readFileSync('./key/client/client-cert.pem'),
	ca: [fs.readFileSync('./key/ca-cert.pem')],
	agent: false
};

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let req = https.request(options, (res) => {
	console.log('statusCode', res.statusCode);
	console.log('header:', res.headers);
	
	res.setEncoding('utf-8');
	res.on('data', (d) => console.log(`data-${d}`));		
});

req.end();

req.on('error', (err) => console.log(err))
