import { IEntity } from '../../../../../entities';

/**
 * Common interface for entity action types
*/
export interface IEntityActionTypes<
	TEntity extends IEntity,
	TBeginEdit extends string,
	TBeginCommit extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string> {
	beginEdit: TBeginEdit;
	beginCommit: TBeginCommit;
	beginRequestList: TBeginRequestList;
	successRequestList: TSuccessRequestList;
}

/**
 * Factory for creating action types.
 * eg. const fooActions = createActionTypes('BEGIN_FOO_EDIT', 'BEGIN_FOO_COMMIT', 'BEGIN_REQUEST_LIST', 'SUCCESS_REQUEST_LIST');
 */
export function createActionTypes<
	TEntity extends IEntity,
	TBeginEdit extends string,
	TBeginCommit extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(
	beginEdit: TBeginEdit,
	beginCommit: TBeginCommit,
	beginRequestList: TBeginRequestList,
	successRequestList: TSuccessRequestList): IEntityActionTypes<TEntity, TBeginEdit, TBeginCommit, TBeginRequestList, TSuccessRequestList> {
	return {
		beginEdit,
		beginCommit,
		beginRequestList,
		successRequestList
	};
}

/** Begin editing an entity. */
export interface IBeginEditAction<TBeginEdit extends string> {
	type: TBeginEdit,
	id: string
}

/** Begin a request for a list of entities. */
export interface IBeginRequestListAction<TBeginRequestList extends string> {
	type: TBeginRequestList;
}

/** Request for entity list returned successfully. */
export interface ISuccessRequestListAction<
	TSuccessRequestList extends string,
	TEntity extends IEntity> {
	type: TSuccessRequestList,
	payload: {
		entities: Array<TEntity>
	}
}

/** Action factory for begin entity list request. */
export function beginRequestList<
	TEntity extends IEntity,
	TBeginEdit extends string,
	TBeginCommit extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(
	actionTypes: IEntityActionTypes<TEntity, TBeginEdit, TBeginCommit, TBeginRequestList, TSuccessRequestList>): IBeginRequestListAction<TBeginRequestList> {

	return {
		type: actionTypes.beginRequestList
	};
}

/** Action factory for successful entity list return. */
export function successRequestList<
	TEntity extends IEntity,
	TBeginEdit extends string,
	TBeginCommit extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(
	actionTypes: IEntityActionTypes<TEntity, TBeginEdit, TBeginCommit, TBeginRequestList, TSuccessRequestList>,
	entities: Array<TEntity>): ISuccessRequestListAction<TSuccessRequestList, TEntity> {

	return {
		type: actionTypes.successRequestList,
		payload: {
			entities
		}
	};
}

/** Action factory for begin entity edit. */
export function beginEdit<
	TEntity extends IEntity,
	TBeginEdit extends string,
	TBeginCommit extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(
	actionTypes: IEntityActionTypes<TEntity, TBeginEdit, TBeginCommit, TBeginRequestList, TSuccessRequestList>,
	id: string): IBeginEditAction<TBeginEdit> {

	return {
		type: actionTypes.beginEdit,
		id
	};
}