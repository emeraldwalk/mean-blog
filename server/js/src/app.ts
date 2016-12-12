import * as express from 'express';
import * as path from 'path';

const app = express();
const rootDir = `${__dirname}/../../..`;
const rootResolve = (relative) => path.resolve(`${rootDir}/${relative}`);

app.get('/favicon.ico', (req, res) => {
	res.sendFile(rootResolve('server/leaf.ico'));
});

app.get('/*', (req, res) => {
	res.sendfile(rootResolve('server/index.html'));
});

app.listen(3000, () => {
	console.log('Server listening @ http://localhost:3000');
});