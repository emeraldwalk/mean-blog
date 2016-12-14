export interface IEntity {
	_id: string;
}

export interface IEntityTypes {
	blogPost: IBlogPost
	unknown: {_id: string} // HACK: for some reason only having 1 type here causes some problems later on
}

export type IEntityName = keyof IEntityTypes;

export interface IBlogPost {
	_id: string,
	title: string,
	slug: string,
	content: string,
	createdAt: Date
}