import { IBlogPost } from '../../../../entities';

export interface ILoadedState {
	blogPosts: boolean
}

export interface IEntityState {
	blogPosts: {
		[id: string]: IBlogPost
	}
}

export interface IAppState {
	blogPostInEdit: string;
	isLoaded: ILoadedState,
	entities: IEntityState
}

export interface ILoadable<TData> {
	isLoading: boolean;
	data: TData;
}