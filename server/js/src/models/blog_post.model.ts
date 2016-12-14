import * as express from 'express';
import * as mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
	title: String,
	slug: String,
	content: String,
	createdAt: Date
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);
// new BlogPost({
// 	title: 'test title',
// 	slug: 'first-post',
// 	content: 'This is my first post',
// 	createdAt: new Date()
// }).save();

const router = express.Router();

router.get('/', (req, res) => {
	res.json([{
		title: 'List posts'
	}]);
});

router.get('/:slug', (req, res) => {
	let slug = req.params.slug;
	let post = BlogPost.findOne({ slug }).then((post) => {
		res.json(post);
	});
});

export { BlogPost, router };