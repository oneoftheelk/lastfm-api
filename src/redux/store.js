import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk';
import artistsReducer from './artists-reducer';

const reducers = combineReducers({
  artists: artistsReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;