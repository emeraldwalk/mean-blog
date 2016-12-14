import { IEntity, IEntityName, IEntityTypes } from '../../../../../entities';

/**
 * Common interface for entity action types
*/
export interface IEntityActionTypes<
	TEntityName extends IEntityName,
	TBeginEdit extends string,
	TBeginCommit extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string> {
	entityName: TEntityName;
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
	TEntityName extends IEntityName,
	TBeginEdit extends string,
	TBeginCommit extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(
	entityName: TEntityName,
	beginEdit: TBeginEdit,
	beginCommit: TBeginCommit,
	beginRequestList: TBeginRequestList,
	successRequestList: TSuccessRequestList): IEntityActionTypes<TEntityName, TBeginEdit, TBeginCommit, TBeginRequestList, TSuccessRequestList> {
	return {
		entityName,
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
	TEntityName extends IEntityName> {
	type: TSuccessRequestList,
	payload: {
		entities: Array<IEntityTypes[TEntityName] & IEntity>
	}
}

/** Action factory for begin entity list request. */
export function beginRequestList<
	TEntityName extends IEntityName,
	TBeginEdit extends string,
	TBeginCommit extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(
	actionTypes: IEntityActionTypes<TEntityName, TBeginEdit, TBeginCommit, TBeginRequestList, TSuccessRequestList>): IBeginRequestListAction<TBeginRequestList> {

	return {
		type: actionTypes.beginRequestList
	};
}

/** Action factory for successful entity list return. */
export function successRequestList<
	TEntityName extends IEntityName,
	TBeginEdit extends string,
	TBeginCommit extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(
	actionTypes: IEntityActionTypes<TEntityName, TBeginEdit, TBeginCommit, TBeginRequestList, TSuccessRequestList>,
	entities: Array<IEntityTypes[TEntityName] & IEntity>): ISuccessRequestListAction<TSuccessRequestList, TEntityName> {

	return {
		type: actionTypes.successRequestList,
		payload: {
			entities
		}
	};
}

/** Action factory for begin entity edit. */
export function beginEdit<
	TEntityName extends IEntityName,
	TBeginEdit extends string,
	TBeginCommit extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(
	actionTypes: IEntityActionTypes<TEntityName, TBeginEdit, TBeginCommit, TBeginRequestList, TSuccessRequestList>,
	id: string): IBeginEditAction<TBeginEdit> {

	return {
		type: actionTypes.beginEdit,
		id
	};
}