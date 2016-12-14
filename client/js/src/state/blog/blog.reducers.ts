import { IBlogPost } from '../../../../../entities';
import { BlogPostEditActions, IListRequestAction, IListSuccessAction } from '../blog/blog.actions';

export const blogPostInEdit = (
	state: string = '',
	action: BlogPostEditActions.IAny) => {
	if(action.type === 'BLOG_POST_BEGIN_EDIT') {
		return action.payload;
	}
	else if(action.type === 'BLOG_POST_CANCEL_EDIT') {
		return '';
	}
	else if(action.type === 'BLOG_POST_COMMIT_EDIT') {
		return '';
	}
	return state;
}

export const blogPostsIsLoaded = (
	state: boolean = false,
	action: IListRequestAction | IListSuccessAction) => {
	if (action.type === 'BLOG_POST_LIST_REQUEST') {
		return false;
	}
	else if (action.type === 'BLOG_POST_LIST_SUCCESS') {
		return true;
	}
	return state;
};

export const blogPosts = (
	state: { [id: string]: IBlogPost } = {},
	action: IListSuccessAction) => {
	if (action.type === 'BLOG_POST_LIST_SUCCESS') {
		let postsMap = action.payload.posts.reduce((memo, post) => {
			memo[post._id] = post;
			return memo;
		}, {})
		return {
			...state,
			...postsMap
		};
	}
	return state;
};