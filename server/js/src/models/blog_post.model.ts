import * as express from 'express';
import * as mongoose from 'mongoose';
import { IBlogPost } from '../../../../entities';

const blogPostSchema = new mongoose.Schema({
	title: String,
	slug: String,
	content: String
}, {
	timestamps: true
});

export const BlogPostModel = mongoose.model<mongoose.Document & IBlogPost>(
	'BlogPost',
	blogPostSchema);

export const router = express.Router();

router.get('/', (req, res) => {
	BlogPostModel.find().then(posts => {
		res.json(posts);
	})

	// res.json([{
	// 	title: 'List posts'
	// }]);
});

// router.get('/:slug', (req, res) => {
// 	let slug = req.params.slug;
// 	let post = BlogPost.findOne({ slug }).then((post) => {
// 		res.json(post);
// 	});
// });