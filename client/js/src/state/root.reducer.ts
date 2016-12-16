import { combineReducers } from 'redux';
import { IEntityState, IAppState, ILoadedState, IInEditState } from './state';

import { reduceInEdit, reduceIsLoaded, reduceEntities } from './entities/entity.reducers';
import { BLOG_ACTIONS } from './blog/blog.actions';

export const inEdit = combineReducers<IInEditState>({
	blogPost: reduceInEdit(BLOG_ACTIONS)
});

export const isLoaded = combineReducers<ILoadedState>({
	blogPost: reduceIsLoaded(BLOG_ACTIONS)
});

export const entities = combineReducers<IEntityState>({
	blogPost: reduceEntities(BLOG_ACTIONS)
});

export const rootReducer = combineReducers<IAppState>({
	inEdit,
	isLoaded,
	entities
});
