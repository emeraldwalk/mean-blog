import { IBlogPost } from '../../../../../entities';

export namespace BlogPostEditActions {
	export interface IBeginEdit {
		type: 'BLOG_POST_BEGIN_EDIT',
		payload: {
			postId: string
		}
	}
	export interface ICancelEdit {
		type: 'BLOG_POST_CANCEL_EDIT'
	}
	export interface ICommitEdit {
		type: 'BLOG_POST_COMMIT_EDIT'
	}
	export type IAny = IBeginEdit | ICancelEdit | ICommitEdit;
}

export interface IListRequestAction {
	type: 'BLOG_POST_LIST_REQUEST'
}

export interface IListSuccessAction {
	type: 'BLOG_POST_LIST_SUCCESS',
	payload: {
		posts: Array<IBlogPost>
	}
}

export function blogPostListRequest(): IListRequestAction {
	return {
		type: 'BLOG_POST_LIST_REQUEST'
	};
}

export function blogPostListSuccess(
	posts: Array<IBlogPost>): IListSuccessAction {
	return {
		type: 'BLOG_POST_LIST_SUCCESS',
		payload: {
			posts: posts
		}
	};
}