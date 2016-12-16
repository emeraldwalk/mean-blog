import * as express from 'express';
import * as path from 'path';
import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/mean-blog');

// TODO: Remove this once we really get up and running
import { run } from './migrations/blog.migrations';
mongoose.connection.once('connected', () => {
	mongoose.connection.db.dropCollection('blogposts').then(() => {
		run();
	});
});

import { router as blogPostsRouter } from './models/blog_post.model';

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
	express.static(rootResolve('node_modules/ng1x-decorators/dist')),
	express.static(rootResolve('node_modules/redux/dist')),
	express.static(rootResolve('node_modules/reselect/dist')));

app.use('/api/blog', blogPostsRouter);

app.get('/*', (req, res) => {
	res.sendFile(rootResolve('server/index.html'));
});

app.listen(3000, () => {
	console.log('Server listening @ http://localhost:3000');
});