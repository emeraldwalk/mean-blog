import { combineReducers } from 'redux';
import { IEntityState, IAppState, ILoadedState } from './state';
import { blogPostInEdit, blogPosts, blogPostsIsLoaded } from './blog/blog.reducers';

export const isLoaded = combineReducers<ILoadedState>({
	blogPosts: blogPostsIsLoaded
});

export const entities = combineReducers<IEntityState>({
	blogPosts
});

export const rootReducer = combineReducers<IAppState>({
	blogPostInEdit,
	isLoaded,
	entities
});