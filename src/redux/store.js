import {createStore, combineReducers} from "redux";
import artistsReducer from './artists-reducer';

const reducers = combineReducers({
    artists: artistsReducer
});

const store = createStore(reducers);

window.store = store;
export default store;