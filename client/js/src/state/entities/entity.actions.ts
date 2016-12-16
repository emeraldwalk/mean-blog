import { IEntity, IEntityName, IEntityTypes } from '../../../../../entities';

/**
 * Common interface for entity action types
*/
export interface IEntityActionTypes<
	TEntityName extends IEntityName,
	TBeginEdit extends string,
	TCancelEdit extends string,
	TBeginSave extends string,
	TSuccessSave extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string> {

	entityName: TEntityName;
	beginEdit: TBeginEdit;
	cancelEdit: TCancelEdit,
	beginSave: TBeginSave;
	successSave: TSuccessSave;
	beginRequestList: TBeginRequestList;
	successRequestList: TSuccessRequestList;
}

/**
 * Factory for creating action types.
 * eg. const fooActions = createActionTypes(
 * 	'BEGIN_EDIT__FOO',
 * 	'CANCEL_EDIT__FOO',
 * 	'BEGIN_SAVE__FOO',
 * 	'SUCCESS_SAVE__FOO',
 * 	'BEGIN_REQUEST_LIST__FOO',
 * 	'SUCCESS_REQUEST_LIST__FOO');
 */
export function createActionTypes<
	TEntityName extends IEntityName,
	TBeginEdit extends string,
	TCancelEdit extends string,
	TBeginSave extends string,
	TSuccessSave extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(

	entityName: TEntityName,
	beginEdit: TBeginEdit,
	cancelEdit: TCancelEdit,
	beginSave: TBeginSave,
	successSave: TSuccessSave,
	beginRequestList: TBeginRequestList,
	successRequestList: TSuccessRequestList): IEntityActionTypes<TEntityName, TBeginEdit, TCancelEdit, TBeginSave, TSuccessSave, TBeginRequestList, TSuccessRequestList> {

	return {
		entityName,
		beginEdit,
		cancelEdit,
		beginSave,
		successSave,
		beginRequestList,
		successRequestList
	};
}

/** Begin editing an entity. */
export interface IBeginEditAction<TBeginEdit extends string> {
	type: TBeginEdit,
	id: string
}

/** Cancel editing an entity. */
export interface ICancelEditAction<TCancelEdit extends string> {
	type: TCancelEdit,
	id: string
}

/** Begin saving an entity. */
export interface IBeginSaveAction<TBeginSave extends string> {
	type: TBeginSave,
	id: string
}

/** Success saving an entity. */
export interface ISuccessSaveAction<TSuccessSave extends string> {
	type: TSuccessSave,
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

/** Action factory for begin entity edit. */
export function beginEdit<
	TEntityName extends IEntityName,
	TBeginEdit extends string,
	TCancelEdit extends string,
	TBeginSave extends string,
	TSuccessSave extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(

	actionTypes: IEntityActionTypes<TEntityName, TBeginEdit, TCancelEdit, TBeginSave, TSuccessSave, TBeginRequestList, TSuccessRequestList>,
	id: string): IBeginEditAction<TBeginEdit> {

	return {
		type: actionTypes.beginEdit,
		id
	};
}

/** Action factory for cancel entity edit. */
export function cancelEdit<
	TEntityName extends IEntityName,
	TBeginEdit extends string,
	TCancelEdit extends string,
	TBeginSave extends string,
	TSuccessSave extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(

	actionTypes: IEntityActionTypes<TEntityName, TBeginEdit, TCancelEdit, TBeginSave, TSuccessSave, TBeginRequestList, TSuccessRequestList>,
	id: string): IBeginEditAction<TCancelEdit> {

	return {
		type: actionTypes.cancelEdit,
		id
	};
}

/** Action factory for begin entity save. */
export function beginSave<
	TEntityName extends IEntityName,
	TBeginEdit extends string,
	TCancelEdit extends string,
	TBeginSave extends string,
	TSuccessSave extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(

	actionTypes: IEntityActionTypes<TEntityName, TBeginEdit, TCancelEdit, TBeginSave, TSuccessSave, TBeginRequestList, TSuccessRequestList>,
	id: string): IBeginEditAction<TBeginSave> {

	return {
		type: actionTypes.beginSave,
		id
	};
}

/** Action factory for successful entity save. */
export function successSave<
	TEntityName extends IEntityName,
	TBeginEdit extends string,
	TCancelEdit extends string,
	TBeginSave extends string,
	TSuccessSave extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(

	actionTypes: IEntityActionTypes<TEntityName, TBeginEdit, TCancelEdit, TBeginSave, TSuccessSave, TBeginRequestList, TSuccessRequestList>,
	id: string): IBeginEditAction<TSuccessSave> {

	return {
		type: actionTypes.successSave,
		id
	};
}

/** Action factory for begin entity list request. */
export function beginRequestList<
	TEntityName extends IEntityName,
	TBeginEdit extends string,
	TCancelEdit extends string,
	TBeginSave extends string,
	TSuccessSave extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(

	actionTypes: IEntityActionTypes<TEntityName, TBeginEdit, TCancelEdit, TBeginSave, TSuccessSave, TBeginRequestList, TSuccessRequestList>): IBeginRequestListAction<TBeginRequestList> {

	return {
		type: actionTypes.beginRequestList
	};
}

/** Action factory for successful entity list return. */
export function successRequestList<
	TEntityName extends IEntityName,
	TBeginEdit extends string,
	TCancelEdit extends string,
	TBeginSave extends string,
	TSuccessSave extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(

	actionTypes: IEntityActionTypes<TEntityName, TBeginEdit, TCancelEdit, TBeginSave, TSuccessSave, TBeginRequestList, TSuccessRequestList>,
	entities: Array<IEntityTypes[TEntityName] & IEntity>): ISuccessRequestListAction<TSuccessRequestList, TEntityName> {

	return {
		type: actionTypes.successRequestList,
		payload: {
			entities
		}
	};
}