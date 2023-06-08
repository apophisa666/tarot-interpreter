import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import cardReducer from './reducers/card-reducer';

export default createStore(cardReducer, applyMiddleware(thunk, logger));