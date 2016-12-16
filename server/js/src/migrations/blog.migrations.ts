import { BlogPostModel } from '../models/blog_post.model';
import { IBlogPost } from '../../../../entities';

export function run(): void {
	let blogPosts: Array<IBlogPost> = [
		{
			title: 'First Post',
			slug: 'first-post',
			content: 'This is my first content.'
		},
		{
			title: 'Second Post',
			slug: 'second-post',
			content: 'This is my second content.'
		},
		{
			title: 'Third Post',
			slug: 'third-post',
			content: 'This is my third content.'
		}
	];

	BlogPostModel.create(...blogPosts);
}