import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { imagesReducer } from './imagesReducer';
import { userReducer } from './userReducer';
import { modalReducer } from './modalReducer';
import { tokenReducer } from './tokenReducer';
import { currentPageReducer } from './currentPageReducer';


export const rootReducer = combineReducers({
	appReducer,
	imagesReducer,
	userReducer,
	modalReducer,
	tokenReducer,
	currentPageReducer,
})