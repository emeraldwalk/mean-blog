import { createActionTypes } from '../entities/entity.actions';

export const BLOG_ACTIONS = createActionTypes(
	'blogPost',
	'BEGIN_BLOG_POST_EDIT',
	'BEGIN_BLOG_POST_COMMIT',
	'BEGIN_BLOG_POST_REQUEST_LIST',
	'SUCCESS_BLOG_POST_REQUEST_LIST');