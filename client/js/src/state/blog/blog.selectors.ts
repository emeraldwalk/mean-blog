import { IBlogPost } from '../../../../../entities';
import { createSelector } from 'reselect';
import { IAppState, ILoadable } from '../state';

const getBlogPostIdInEdit = (state: IAppState) => state.blogPostInEdit;
const getIsLoadedPosts = (state: IAppState) => state.isLoaded.blogPosts;
const getPostsMap = (state: IAppState) => state.entities.blogPosts;

export const getPostInEdit = createSelector(
	getBlogPostIdInEdit,
	getPostsMap,
	(idInEdit, postsMap): IBlogPost => {
		return postsMap[idInEdit];
	});

export const getPostsList = createSelector(
	getIsLoadedPosts,
	getPostsMap,
	(isLoaded, postsMap): ILoadable<Array<IBlogPost>> => {
		let postsList = Object.keys(postsMap || {}).map(key => postsMap[key]);
		return {
			isLoading: !isLoaded,
			data: postsList
		};
	});