import { applyMiddleware, compose, createStore } from 'redux';
import inputReducer from '../src/combineReducer/rootReducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

let finalCreateStore = compose(
	applyMiddleware(thunk, createLogger())//...functions
)(createStore);

export default function configureStore(initialState) {
	return finalCreateStore(inputReducer, initialState);
}