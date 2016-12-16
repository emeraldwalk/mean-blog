import { createActionTypes } from '../entities/entity.actions';

export const BLOG_ACTIONS = createActionTypes(
	'blogPost',
	'BEGIN_EDIT__BLOG_POST',
	'CANCEL_EDIT__BLOG_POST',
	'BEGIN_SAVE__BLOG_POST',
	'SUCCESS_SAVE__BLOG_POST',
	'BEGIN_REQUEST_LIST__BLOG_POST',
	'SUCCESS_REQUEST_LIST__BLOG_POST');