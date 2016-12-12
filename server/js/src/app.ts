import * as express from 'express';
import * as path from 'path';

const app = express();
const rootDir = `${__dirname}/../../..`;
const rootResolve = (relative) => path.resolve(`${rootDir}/${relative}`);

app.get('/favicon.ico', (req, res) => {
	res.sendFile(rootResolve('server/leaf.ico'));
});

app.use('/js', express.static(rootResolve('client/js')));

app.use('/lib/semantic',
	express.static(rootResolve('client/semantic/dist')));

app.use('/lib',
	express.static(rootResolve('node_modules/systemjs/dist')),
	express.static(rootResolve('node_modules/angular')),
	express.static(rootResolve('node_modules/angular-ui-router/release')),
	express.static(rootResolve('node_modules/ng1x-decorators/dist')));

app.get('/*', (req, res) => {
	res.sendfile(rootResolve('server/index.html'));
});

app.listen(3000, () => {
	console.log('Server listening @ http://localhost:3000');
});