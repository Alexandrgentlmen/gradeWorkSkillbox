import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { imagesReducer } from './imagesReducer';


export const rootReducer = combineReducers({
	appReducer,
	imagesReducer,
})