import { combineReducers, createReducer, createStore } from "@reduxjs/toolkit";
import reducers from './reducers';

const combinedReducers = combineReducers(reducers);

const store = createStore(combinedReducers);

export default store;