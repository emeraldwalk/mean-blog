import { IBlogPost } from '../../../../entities';

export interface IInEditState {
	blogPost: string;
}

export interface ILoadedState {
	blogPost: boolean
}

export interface IEntityState {
	blogPost: {
		[id: string]: IBlogPost
	}
}

export interface IAppState {
	inEdit: IInEditState;
	isLoaded: ILoadedState,
	entities: IEntityState
}

export interface ILoadable<TData> {
	isLoading: boolean;
	data: TData;
}