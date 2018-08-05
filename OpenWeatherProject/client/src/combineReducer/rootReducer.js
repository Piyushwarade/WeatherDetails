import {combineReducers} from 'redux';
import weather from '../reducers/weatherReducer';

const rootReducer = combineReducers({
	weather: weather
});

export default rootReducer;