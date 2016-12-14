import { IEntity, IEntityName } from '../../../../../entities';
import { IEntityActionTypes, IBeginRequestListAction, ISuccessRequestListAction } from './entity.actions';

/** Reducer for entity isLoaded. */
export function reduceIsLoaded<
	TEntityName extends IEntityName,
	TBeginEdit extends string,
	TBeginCommit extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(
	actionTypes: IEntityActionTypes<TEntityName, TBeginEdit, TBeginCommit, TBeginRequestList, TSuccessRequestList>) {

	return (
		state: boolean = false,
		action: IBeginRequestListAction<TBeginRequestList> | ISuccessRequestListAction<TSuccessRequestList, TEntityName>) => {
		if (action.type === actionTypes.beginRequestList) {
			return false;
		}
		else if (action.type === actionTypes.successRequestList) {
			return true;
		}

		return state;
	}
}

/** Reducer for a hash of entities keyed by id. */
export function reduceEntities<
	TEntityName extends IEntityName,
	TBeginEdit extends string,
	TBeginCommit extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(
	actionTypes: IEntityActionTypes<TEntityName, TBeginEdit, TBeginCommit, TBeginRequestList, TSuccessRequestList>) {

	return (
		state: { [id: string]: TEntityName } = {},
		action: ISuccessRequestListAction<TSuccessRequestList, TEntityName>) => {

		if (action.type === actionTypes.successRequestList) {
			let map = action.payload.entities.reduce((memo, entity) => {
				memo[entity._id] = entity;
				return memo;
			}, {});
			return {
				...state,
				...map
			};
		}

		return state;
	}
}