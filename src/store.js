import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './reducers/card-reducer';

export default configureStore({
  reducer: cardReducer
});