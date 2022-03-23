import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { imagesReducer } from './imagesReducer';
import { userReducer } from './userReducer';


export const rootReducer = combineReducers({
	appReducer,
	imagesReducer,
	userReducer,
})