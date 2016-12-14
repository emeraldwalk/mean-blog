import { combineReducers } from 'redux';
import { IEntityState, IAppState, ILoadedState } from './state';

import { reduceIsLoaded, reduceEntities } from './entities/entity.reducers';
import { BLOG_ACTIONS } from './blog/blog.actions';

export const isLoaded = combineReducers<ILoadedState>({
	blogPost: reduceIsLoaded(BLOG_ACTIONS)
});

export const entities = combineReducers<IEntityState>({
	blogPost: reduceEntities(BLOG_ACTIONS)
});

export const rootReducer = combineReducers<IAppState>({
	//blogPostInEdit: undefined,
	isLoaded,
	entities
});
