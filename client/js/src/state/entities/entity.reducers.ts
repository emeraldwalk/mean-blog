import { IEntity } from '../../../../../entities';
import { IEntityActionTypes, IBeginRequestListAction, ISuccessRequestListAction } from './entity.actions';

/** Reducer for entity isLoaded. */
export function reduceIsLoaded<
	TEntity extends IEntity,
	TBeginEdit extends string,
	TBeginCommit extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(
	actionTypes: IEntityActionTypes<TEntity, TBeginEdit, TBeginCommit, TBeginRequestList, TSuccessRequestList>) {

	return (
		state: boolean = false,
		action: IBeginRequestListAction<TBeginRequestList> | ISuccessRequestListAction<TSuccessRequestList, TEntity>) => {
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
	TEntity extends IEntity,
	TBeginEdit extends string,
	TBeginCommit extends string,
	TBeginRequestList extends string,
	TSuccessRequestList extends string>(
	actionTypes: IEntityActionTypes<TEntity, TBeginEdit, TBeginCommit, TBeginRequestList, TSuccessRequestList>) {

	return (
		state: { [id: string]: TEntity } = {},
		action: ISuccessRequestListAction<TSuccessRequestList, TEntity>) => {

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