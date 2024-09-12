import { combineReducers } from 'redux';
import exampleReducer from '../features/exampleSlice';

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
