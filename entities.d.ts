export interface IEntity {
	_id: string;
}

export interface IEntityTypes {
	blogPost: IBlogPost
}

export type IEntityName = keyof IEntityTypes;

export interface IBlogPost extends IEntity {
	title: string,
	slug: string,
	content: string,
	createdAt: Date
}