import { createStore } from 'redux';
import { rootReducer } from './root.reducer';

const store = createStore(rootReducer);
store.subscribe(() => {
	console.log('state:', store.getState());
});

export const subscribe: typeof store.subscribe = function() {
	return store.subscribe.apply(this, arguments);
}

export const getState: typeof store.getState = function() {
	return store.getState.apply(this, arguments);
}

export const dispatch: typeof store.dispatch = function() {
	console.log(`********** ${arguments[0].type} ***************************`);
	console.log('action:', arguments[0]);
	return store.dispatch.apply(this, arguments);
}