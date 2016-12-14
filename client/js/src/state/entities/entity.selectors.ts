import { IEntityTypes, IEntityName, IBlogPost } from '../../../../../entities';
import { createSelector } from 'reselect';
import { IAppState, IEntityState, ILoadable } from '../state';

const getEntityIdInEdit = (entityName: IEntityName) => (state: IAppState) => state.inEdit[entityName];
const getIsLoadedEntities = (entityName: IEntityName) => (state: IAppState) => state.isLoaded[entityName];
const getEntityMap = (entityName: IEntityName) => (state: IAppState) => {
	return state.entities[entityName];
};

const entityInEdit = {};
export function getEntityInEdit(entityName: IEntityName) {
	if (!entityInEdit[entityName]) {
		entityInEdit[entityName] = createSelector(
			getEntityIdInEdit(entityName),
			getEntityMap(entityName),
			(idInEdit, entityMap) => {
				return entityMap[idInEdit];
			});
	}
	return entityInEdit[entityName];
}

const entityList = {};
export function getEntityList<
	TEntityName extends keyof IEntityTypes,
	TEntity extends IEntityTypes[TEntityName]>(entityName: TEntityName) {

	if (!entityList[String(entityName)]) {
		entityList[String(entityName)] = createSelector(
			getIsLoadedEntities(entityName),
			getEntityMap(entityName),
			(isLoaded, entityMap): ILoadable<Array<IEntityTypes[TEntityName]>> => {
				let entityList: Array<TEntity> = Object.keys(entityMap || {}).map(id => entityMap[id]);
				return {
					isLoading: !isLoaded,
					data: entityList
				};
			});
	}

	return entityList[String(entityName)];
}